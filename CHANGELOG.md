# Changelog

## 0.4.0

Generated for the current Cosmos Hub: gaia v28.3.1 (mainnet runs v28.3.0; the
protos are identical to v28.0.0), with the versions pinned in its `go.mod`:
cosmos-sdk v0.53.4, ibc-go v10.7.0, wasmd v0.60.9.

### Added

- `gaia.liquid.v1beta1`: the `LiquidValidators` query.
- `cosmos.base.tendermint.v1beta1` (node info, latest block, validator sets) and
  `cosmos.slashing.v1beta1`, which were excluded before.
- New in cosmos-sdk v0.53: `cosmos.protocolpool.v1`, `cosmos.epochs.v1beta1`.
- New in ibc-go v10: `ibc.core.channel.v2`, `ibc.core.client.v2`,
  `ibc.core.commitment.v2`, and the `denomtrace`, `packet` and `token` files of
  `ibc.applications.transfer.v1`.
- A real ES module build in `dist/esm`, and an `exports` map: `moonkittjs` and
  `moonkittjs/dist/codegen/*` resolve to ES modules for `import` and to CommonJS
  for `require`. Bundlers now only include the modules that are imported.
- `npm run test:rpc` (read-only queries against a node) and `npm run size`.

### Changed

- `@cosmjs/*` ^0.32.4 -> ^0.38.1. `@cosmjs/encoding` and `@cosmjs/math` are now
  declared dependencies (they were used but not declared).
- `createRPCQueryClient` connects with `connectComet` (it detects the CometBFT
  version) instead of `Tendermint34Client`, which cosmjs 0.38 removed.
- The LCD pagination helper no longer uses the Node `Buffer`.
- Generated with `@cosmology/telescope` 1.12.21 (was 1.12.3).
- The package no longer ships source maps.

### Breaking

- cosmjs 0.38 is required. A consumer still on cosmjs 0.32 - 0.37 would get two
  copies of cosmjs: upgrade the application first.
- Only the paths `moonkittjs`, `moonkittjs/dist/codegen/*` and
  `moonkittjs/package.json` can be imported. `moonkittjs/dist/codegen/...` paths
  used with 0.3.0 keep working, without a file extension. The `.mjs` files that
  0.3.0 shipped next to the `.js` files are gone (`dist/esm/**/*.js` replaces
  them, through the `exports` map).
- Removed with ibc-go v10:
  - `ibc.applications.transfer.v2` (`packet`), `ibc.lightclients.localhost.v2`
    and the `capability` module are gone.
  - `ibc.applications.transfer.v1`: `DenomTrace` moved from the `transfer` file
    to the `denomtrace` file; `QueryDenomTraceRequest/Response` and
    `QueryDenomTracesRequest/Response` are replaced by `QueryDenomRequest/Response`
    and `QueryDenomsRequest/Response`, which return the new `Denom` type.
  - `ibc.core.channel.v1`: channel upgrades are gone (`upgrade` file, the
    `MsgChannelUpgrade*` messages, `MsgPruneAcknowledgements`, `MsgUpdateParams`,
    `Params`, and the `ChannelParams`, `Upgrade` and `UpgradeError` queries).
  - `ibc.core.client.v1`: `ClientUpdateProposal` and `UpgradeProposal`.
  - `ibc.core.commitment.v1`: `MerklePath` moved to `ibc.core.commitment.v2`.
- Removed with cosmos-sdk v0.53: `cosmos.orm.query.v1alpha1`.
- `cosmwasm.wasm.v1`: the `proposal` file is now `proposal_legacy` (wasmd v0.60).

No type or field changed in `gaia.liquid.v1beta1`, nor in the bank, staking and
distribution types that 0.3.0 exposed.
