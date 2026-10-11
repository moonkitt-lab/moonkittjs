// Measures what a consumer pays for the query clients it imports.
// Bundles (esbuild, minified ESM, browser) a file that only imports the liquid,
// bank, staking and distribution query clients through the deep import paths.
//
// Usage: npm run build && npm run size
import { build } from 'esbuild';
import { gzipSync } from 'node:zlib';

const entry = `
import { QueryClientImpl as LiquidQuery } from 'moonkittjs/dist/codegen/gaia/liquid/v1beta1/query.rpc.Query';
import { QueryClientImpl as BankQuery } from 'moonkittjs/dist/codegen/cosmos/bank/v1beta1/query.rpc.Query';
import { QueryClientImpl as StakingQuery } from 'moonkittjs/dist/codegen/cosmos/staking/v1beta1/query.rpc.Query';
import { QueryClientImpl as DistributionQuery } from 'moonkittjs/dist/codegen/cosmos/distribution/v1beta1/query.rpc.Query';
export const clients = (rpc) => ({
  liquid: new LiquidQuery(rpc),
  bank: new BankQuery(rpc),
  staking: new StakingQuery(rpc),
  distribution: new DistributionQuery(rpc)
});
`;
const rootEntry = `
import { gaia } from 'moonkittjs';
export const createClient = gaia.ClientFactory.createRPCQueryClient;
`;

const measure = async (label, contents, options = {}) => {
  const result = await build({
    stdin: { contents, resolveDir: process.cwd(), loader: 'js' },
    bundle: true,
    minify: true,
    format: 'esm',
    platform: 'browser',
    target: 'es2022',
    write: false,
    logLevel: 'error',
    ...options
  });
  const bytes = result.outputFiles.reduce((total, file) => total + file.contents.length, 0);
  const gzip = result.outputFiles.reduce((total, file) => total + gzipSync(file.contents).length, 0);
  const kb = (n) => `${(n / 1024).toFixed(1)} kB`;
  console.log(`${label}: ${kb(bytes)} minified, ${kb(gzip)} gzip`);
};

await measure('4 query clients, @cosmjs/* external (moonkittjs code only)', entry, {
  external: ['@cosmjs/*']
});
await measure('4 query clients, with @cosmjs/* bundled', entry);
// neutral platform has no Node built-ins: the build fails if one is required
await measure('4 query clients, Cloudflare Workers conditions', entry, {
  platform: 'neutral',
  mainFields: ['browser', 'module', 'main'],
  conditions: ['workerd', 'worker', 'browser', 'import']
});
await measure("root import ({ gaia } from 'moonkittjs'), @cosmjs/* external", rootEntry, {
  external: ['@cosmjs/*'],
  splitting: true,
  outdir: 'out'
});
