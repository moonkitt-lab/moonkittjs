// Opt-in, read-only check of the generated RPC query clients against a live
// node. It only sends ABCI queries: no keys, no transactions.
//
// Usage: npm run build && npm run test:rpc -- [rpcEndpoint]
//        (default endpoint: http://127.0.0.1:26657)
import { QueryClient, createProtobufRpcClient } from '@cosmjs/stargate';
import { Comet38Client, connectComet } from '@cosmjs/tendermint-rpc';

import { QueryClientImpl as BankQuery } from 'moonkittjs/dist/codegen/cosmos/bank/v1beta1/query.rpc.Query';
import { QueryClientImpl as DistributionQuery } from 'moonkittjs/dist/codegen/cosmos/distribution/v1beta1/query.rpc.Query';
import { QueryClientImpl as StakingQuery } from 'moonkittjs/dist/codegen/cosmos/staking/v1beta1/query.rpc.Query';
import { BondStatus } from 'moonkittjs/dist/codegen/cosmos/staking/v1beta1/staking';
import { QueryClientImpl as LiquidQuery } from 'moonkittjs/dist/codegen/gaia/liquid/v1beta1/query.rpc.Query';
import { createRPCQueryClient } from 'moonkittjs/dist/codegen/gaia/rpc.query';

const rpcEndpoint = process.argv[2] ?? 'http://127.0.0.1:26657';

const show = (label, value) =>
  console.log(
    `${label}: ${JSON.stringify(value, (_k, v) =>
      typeof v === 'bigint' ? v.toString() : v instanceof Uint8Array ? `<${v.length} bytes>` : v
    )}`
  );

// connectComet detects the CometBFT version through /status. A node whose
// /status is broken can still serve ABCI queries: fall back to the 0.38 client.
const comet = await connectComet(rpcEndpoint).catch((error) => {
  console.warn(`connectComet failed (${error.message}), falling back to Comet38Client`);
  return Comet38Client.connect(rpcEndpoint);
});
try {
  const abci = await comet.abciInfo();
  show('endpoint', rpcEndpoint);
  show('app', { data: abci.data, height: abci.lastBlockHeight });

  // Per-module clients over one shared connection: this is the tree-shakeable way.
  const rpc = createProtobufRpcClient(new QueryClient(comet));
  const bank = new BankQuery(rpc);
  const staking = new StakingQuery(rpc);
  const distribution = new DistributionQuery(rpc);
  const liquid = new LiquidQuery(rpc);

  const stakingParams = (await staking.params()).params;
  show('staking.params', { bondDenom: stakingParams.bondDenom, maxValidators: stakingParams.maxValidators });
  show('bank.supplyOf', (await bank.supplyOf({ denom: stakingParams.bondDenom })).amount);

  const { validators } = await staking.validators({
    status: 'BOND_STATUS_BONDED',
    pagination: { key: new Uint8Array(), offset: 0n, limit: 2n, countTotal: false, reverse: false }
  });
  show(
    'staking.validators (first 2 bonded)',
    validators.map((v) => ({
      moniker: v.description.moniker,
      operator: v.operatorAddress,
      status: BondStatus[v.status],
      tokens: v.tokens
    }))
  );
  show('distribution.communityPool (first coin)', (await distribution.communityPool()).pool[0]);

  show('liquid.params', (await liquid.params()).params);
  show('liquid.lastTokenizeShareRecordId', await liquid.lastTokenizeShareRecordId());
  show('liquid.totalLiquidStaked', await liquid.totalLiquidStaked());
  if (validators.length > 0) {
    show(
      'liquid.liquidValidator',
      (await liquid.liquidValidator({ validatorAddr: validators[0].operatorAddress })).liquidValidator
    );
  }
  const records = await liquid.allTokenizeShareRecords({
    pagination: { key: new Uint8Array(), offset: 0n, limit: 2n, countTotal: true, reverse: false }
  });
  show('liquid.allTokenizeShareRecords (first 2)', { total: records.pagination?.total, records: records.records });

  // The bundled factory (opens its own connection, loads modules lazily).
  // It connects with connectComet, so it needs a working /status.
  try {
    const client = await createRPCQueryClient({ rpcEndpoint });
    show('createRPCQueryClient -> gaia.liquid.v1beta1.params', (await client.gaia.liquid.v1beta1.params()).params);
    show(
      'createRPCQueryClient -> cosmos.base.tendermint.v1beta1.getNodeInfo',
      (await client.cosmos.base.tendermint.v1beta1.getNodeInfo()).applicationVersion?.version
    );
  } catch (error) {
    console.warn(`createRPCQueryClient skipped: ${error.message}`);
  }
  console.log('OK');
} finally {
  comet.disconnect();
}
