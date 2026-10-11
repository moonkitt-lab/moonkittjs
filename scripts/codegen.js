// To be run with "npm run codegen"

// The proto sources are git submodules (cosmos, ibc-go, ics23, gaia),
// checked out sparsely (proto/ only), plus the vendored files in proto/.
//   - after cloning the repo:      ./scripts/setup-proto.sh
//   - to move to another version:  edit the refs in ./scripts/update-proto.sh, run it,
//                                  update the branches in .gitmodules, then commit
// The versions to use are the ones the gaia release pins in its go.mod.

const { join } = require('path');
const { cpSync, mkdtempSync, readdirSync, readFileSync, writeFileSync } = require('fs');
const { tmpdir } = require('os');
const telescope = require('@cosmology/telescope').default;
const rimraf = require('rimraf').rimrafSync;
const { AMINO_MAP } = require('./aminos');

const sourceProtoDirs = [
  join(__dirname, '/../proto'),
  join(__dirname, '/../cosmos/proto'),
  join(__dirname, '/../ics23/proto'),
  join(__dirname, '/../ibc-go/proto'),
  join(__dirname, '/../gaia/proto'),
];

// The telescope proto parser rejects empty statements (a lone ";"), which are
// valid protobuf and present in cosmos-sdk v0.53 (cosmos/gov/v1). The protos
// are staged in a temp directory and cleaned there, so the submodules stay
// untouched.
const stageProtoDir = (dir, index) => {
  const staged = join(stagingRoot, String(index));
  cpSync(dir, staged, { recursive: true });
  for (const entry of readdirSync(staged, { recursive: true })) {
    if (!entry.endsWith('.proto')) continue;
    const file = join(staged, entry);
    const content = readFileSync(file, 'utf8');
    const cleaned = content.replace(/^[ \t]*;[ \t]*\r?\n/gm, '');
    if (cleaned !== content) writeFileSync(file, cleaned);
  }
  return staged;
};
const stagingRoot = mkdtempSync(join(tmpdir(), 'moonkittjs-proto-'));
const protoDirs = sourceProtoDirs.map(stageProtoDir);
const outPath = join(__dirname, '../src/codegen');
rimraf(outPath);

// Fixes applied to the telescope output so that it runs unchanged in browsers
// and Cloudflare Workers (no Node-only globals).
const patchGeneratedCode = () => {
  const helpers = join(outPath, 'helpers.ts');
  const content = readFileSync(helpers, 'utf8');
  const patched = content.replace(
    /Buffer\.from\(pagination\.key\)\.toString\(\s*'base64'\s*\)/,
    'base64FromBytes(pagination.key)'
  );
  if (patched === content) {
    throw new Error('patchGeneratedCode: helpers.ts no longer matches, review the patch');
  }
  writeFileSync(helpers, patched);
};

telescope({
  protoDirs,
  outPath,
  options: {
    // explicit extensions so that the ESM build is valid for Node, Vite and Workers
    restoreImportExtension: '.js',
    tsDisable: {
      files: [
        'cosmos/authz/v1beta1/tx.amino.ts',
        'cosmos/staking/v1beta1/tx.amino.ts'
      ],
      patterns: ['**/*amino.ts', '**/*registry.ts']
    },
    interfaces: {
      enabled: true,
      useGlobalDecoderRegistry: true,
      useUnionTypes: true
    },
    prototypes: {
      includePackageVar: false,
      removeUnusedImports: true,
      experimentalGlobalProtoNamespace: true,
      addTypeUrlToObjects: true,
      addTypeUrlToDecoders: true,
      addAminoTypeToObjects: true,

      excluded: {
        packages: [
          'ibc.applications.fee.v1', // issue with parsing protos (LCD routes with nested objects in params)

          'cosmos.app.v1alpha1',
          'cosmos.app.v1beta1',
          'cosmos.base.kv.v1beta1',
          'cosmos.base.reflection.v1beta1',
          'cosmos.base.snapshots.v1beta1',
          'cosmos.base.store.v1beta1',
          'cosmos.crisis.v1beta1',
          'cosmos.evidence.v1beta1',
          'cosmos.genutil.v1beta1',

          'cosmos.autocli.v1',

          // test-only modules of the cosmos-sdk repo
          'cosmos.benchmark.v1',
          'cosmos.benchmark.module.v1',
          'cosmos.counter.v1',
          'cosmos.counter.module.v1',

          'cosmos.msg.v1',
          'cosmos.nft.v1beta1',
          'cosmos.capability.v1beta1',
          'cosmos.orm.v1alpha1',
          'cosmos.orm.v1',
          'google.api',
          'ibc.core.port.v1',
          'ibc.core.types.v1'
        ]
      },
      methods: {
        fromJSON: false,
        toJSON: false,
        encode: true,
        decode: true,
        fromPartial: true,
        toAmino: true,
        fromAmino: true,
        fromProto: true,
        toProto: true
      },
      parser: {
        keepCase: false
      }
    },
    typingsFormat: {
      duration: 'duration',
      timestamp: 'date',
      useExact: false,
      useDeepPartial: false,
      num64: 'long',
      customTypes: {
        useCosmosSDKDec: true
      }
    },
    aminoEncoding: {
      enabled: true,
      exceptions: AMINO_MAP
    },
    lcdClients: {
      enabled: false
    },
    rpcClients: {
      enabled: true,
      camelCase: true,
      // cosmjs >= 0.38 removed Tendermint34Client: connect through connectComet
      useConnectComet: true
    }
  }
})
  .then(() => {
    rimraf(stagingRoot);
    patchGeneratedCode();
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
