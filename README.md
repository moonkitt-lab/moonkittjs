# moonkittjs

<img src="https://github.com/moonkitt-lab/moonkittjs/assets/118589706/aa1cc8c9-5d43-4d18-8dab-8a7ea1526f56" />

## install

```sh
npm install moonkittjs
```

## Table of contents

- [moonkittjs](#moonkittjs)
  - [Install](#install)
  - [Table of contents](#table-of-contents)
- [Usage](#usage)
  - [Generated from](#generated-from)
  - [RPC Clients](#rpc-clients)
  - [Composing Messages](#composing-messages)
    - Cosmos, CosmWasm, and IBC
      - [CosmWasm](#cosmwasm-messages)
      - [IBC](#ibc-messages)
      - [Cosmos](#cosmos-messages)
- [Wallets and Signers](#connecting-with-wallets-and-signing-messages)
  - [Stargate Client](#initializing-the-stargate-client)
  - [Creating Signers](#creating-signers)
  - [Broadcasting Messages](#broadcasting-messages)
- [Advanced Usage](#advanced-usage)
- [Developing](#developing)
- [Credits](#credits)

## Usage

### Generated from

`moonkittjs` 1.0.0 is generated for the Cosmos Hub, from the versions that gaia pins in its `go.mod`:

| Source     | Version                                             |
| ---------- | --------------------------------------------------- |
| gaia       | v28.3.1 (protos identical to v28.0.0)               |
| cosmos-sdk | v0.53.4                                             |
| ibc-go     | v10.7.0                                             |
| wasmd      | v0.60.9                                             |
| ics23      | commit `a324422` (unchanged)                        |

It requires `@cosmjs/*` ^0.39.0. See [CHANGELOG.md](./CHANGELOG.md) for what changed since 0.3.0.

### RPC Clients

Queries go over the CometBFT RPC (`abci_query`), through the Comet client of cosmjs.
The code runs unchanged in Node, in a browser bundle and in a Cloudflare Worker.

#### Per-module clients (recommended: small bundles)

Import the query client of each module you need from its own file. One connection
is shared by all the clients, and a bundler only includes the modules you import.

```ts
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { connectComet } from "@cosmjs/tendermint-rpc";
import { QueryClientImpl as BankQuery } from "moonkittjs/dist/codegen/cosmos/bank/v1beta1/query.rpc.Query";
import { QueryClientImpl as StakingQuery } from "moonkittjs/dist/codegen/cosmos/staking/v1beta1/query.rpc.Query";
import { QueryClientImpl as DistributionQuery } from "moonkittjs/dist/codegen/cosmos/distribution/v1beta1/query.rpc.Query";
import { QueryClientImpl as LiquidQuery } from "moonkittjs/dist/codegen/gaia/liquid/v1beta1/query.rpc.Query";
import type { TokenizeShareRecord } from "moonkittjs/dist/codegen/gaia/liquid/v1beta1/liquid";

const comet = await connectComet(RPC_ENDPOINT);
const rpc = createProtobufRpcClient(new QueryClient(comet));

const bank = new BankQuery(rpc);
const liquid = new LiquidQuery(rpc);

const { balances } = await bank.allBalances({ address: "cosmos1addresshere", resolveDenom: false });
const { records } = await liquid.tokenizeShareRecordsOwned({ owner: "cosmos1addresshere" });
const { params } = await liquid.params();

comet.disconnect();
```

Measured with `npm run size` (esbuild, minified): the liquid, bank, staking and
distribution query clients together add 457 kB (53 kB gzip) to an app that
already ships `@cosmjs/stargate`.

#### All modules at once

`createRPCQueryClient` builds a client for every module (each one is loaded with a
dynamic `import()`). It is convenient, but it brings the code of all the modules
into the bundle, so prefer the per-module clients in an application.

```js
import { gaia } from "moonkittjs";

const client = await gaia.ClientFactory.createRPCQueryClient({ rpcEndpoint: RPC_ENDPOINT });

const balance = await client.cosmos.bank.v1beta1.allBalances({ address: "cosmos1addresshere" });
const lsmParams = await client.gaia.liquid.v1beta1.params();
```

#### Checking a node

`npm run test:rpc -- <rpcEndpoint>` runs a few read-only queries (bank, staking,
distribution and gaia liquid) against a node. The default endpoint is
`http://127.0.0.1:26657`. It sends no transaction.

### Composing Messages

Import the `moonkitt` object from `moonkittjs`.

```js
import { moonkitt } from "moonkittjs";

const { createSpotLimitOrder, createSpotMarketOrder, deposit } =
  moonkitt.exchange.v1beta1.MessageComposer.withTypeUrl;
```

#### CosmWasm Messages

```js
import { cosmwasm } from "moonkittjs";

const {
  clearAdmin,
  executeContract,
  instantiateContract,
  migrateContract,
  storeCode,
  updateAdmin,
} = cosmwasm.wasm.v1.MessageComposer.withTypeUrl;
```

#### IBC Messages

```js
import { ibc } from "moonkittjs";

const { transfer } = ibc.applications.transfer.v1.MessageComposer.withTypeUrl;
```

#### Cosmos Messages

```js
import { cosmos } from "moonkittjs";

const {
  fundCommunityPool,
  setWithdrawAddress,
  withdrawDelegatorReward,
  withdrawValidatorCommission,
} = cosmos.distribution.v1beta1.MessageComposer.fromPartial;

const { multiSend, send } = cosmos.bank.v1beta1.MessageComposer.fromPartial;

const {
  beginRedelegate,
  createValidator,
  delegate,
  editValidator,
  undelegate,
} = cosmos.staking.v1beta1.MessageComposer.fromPartial;

const { deposit, submitProposal, vote, voteWeighted } =
  cosmos.gov.v1beta1.MessageComposer.fromPartial;
```

## Connecting with Wallets and Signing Messages

⚡️ For web interfaces, we recommend using [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit). Continue below to see how to manually construct signers and clients.

Here are the docs on [creating signers](https://github.com/cosmology-tech/cosmos-kit/tree/main/packages/react#signing-clients) in cosmos-kit that can be used with Keplr and other wallets.

### Initializing the Stargate Client

Use `getSigningmoonkittClient` to get your `SigningStargateClient`, with the proto/amino messages full-loaded. No need to manually add amino types, just require and initialize the client:

```js
import { getSigningmoonkittClient } from "moonkittjs";

const stargateClient = await getSigningmoonkittClient({
  rpcEndpoint,
  signer, // OfflineSigner
});
```

### Creating Signers

To broadcast messages, you can create signers with a variety of options:

- [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit/tree/main/packages/react#signing-clients) (recommended)
- [keplr](https://docs.keplr.app/api/cosmjs.html)
- [cosmjs](https://gist.github.com/webmaster128/8444d42a7eceeda2544c8a59fbd7e1d9)

### Amino Signer

Likely you'll want to use the Amino, so unless you need proto, you should use this one:

```js
import { getOfflineSignerAmino as getOfflineSigner } from "cosmjs-utils";
```

### Proto Signer

```js
import { getOfflineSignerProto as getOfflineSigner } from "cosmjs-utils";
```

WARNING: NOT RECOMMENDED TO USE PLAIN-TEXT MNEMONICS. Please take care of your security and use best practices such as AES encryption and/or methods from 12factor applications.

```js
import { chains } from "chain-registry";

const mnemonic =
  "unfold client turtle either pilot stock floor glow toward bullet car science";
const chain = chains.find(({ chain_name }) => chain_name === "moonkitt");
const signer = await getOfflineSigner({
  mnemonic,
  chain,
});
```

### Broadcasting Messages

Now that you have your `stargateClient`, you can broadcast messages:

```js
const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;

const msg = send({
  amount: [
    {
      denom: "coin",
      amount: "1000",
    },
  ],
  toAddress: address,
  fromAddress: address,
});

const fee: StdFee = {
  amount: [
    {
      denom: "coin",
      amount: "864",
    },
  ],
  gas: "86364",
};
const response = await stargateClient.signAndBroadcast(address, [msg], fee);
```

## Advanced Usage

If you want to manually construct a stargate client

```js
import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";

import {
    cosmosAminoConverters,
    cosmosProtoRegistry,
    cosmwasmAminoConverters,
    cosmwasmProtoRegistry,
    ibcProtoRegistry,
    ibcAminoConverters,
    moonkittAminoConverters,
    moonkittProtoRegistry
} from 'moonkittjs';

const signer: OfflineSigner = /* create your signer (see above)  */
const rpcEndpint = 'https://rpc.cosmos.directory/moonkitt'; // or another URL

const protoRegistry: ReadonlyArray<[string, GeneratedType]> = [
    ...cosmosProtoRegistry,
    ...cosmwasmProtoRegistry,
    ...ibcProtoRegistry,
    ...moonkittProtoRegistry
];

const aminoConverters = {
    ...cosmosAminoConverters,
    ...cosmwasmAminoConverters,
    ...ibcAminoConverters,
    ...moonkittAminoConverters
};

const registry = new Registry(protoRegistry);
const aminoTypes = new AminoTypes(aminoConverters);

const stargateClient = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
});
```

## Developing

When first cloning the repo:

```
./scripts/setup-proto.sh   # checks out the proto submodules (proto/ only)
npm install
npm run build
npm test
```

### Codegen

The protos come from the git submodules (`cosmos`, `ibc-go`, `ics23`, `gaia`) and from the vendored files in `./proto`. To generate for another gaia release, take the versions from its `go.mod`, set them in `scripts/update-proto.sh`, run it, then:

```
npm run codegen
npm run build
npm test
```

The settings are in `scripts/codegen.js`.

### Build output

`npm run build` writes CommonJS and the type declarations in `dist/`, and ES modules in `dist/esm/`. The `exports` field of `package.json` maps `moonkittjs` and `moonkittjs/dist/codegen/*` to the right one, so the import paths are the same for both.

### Publishing

```
npm run build
npm test
npm publish
```

## Related

Checkout these related projects:

- [@cosmology/telescope](https://github.com/cosmology-tech/telescope) Your Frontend Companion for Building with TypeScript with Cosmos SDK Modules.
- [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) Convert your CosmWasm smart contracts into dev-friendly TypeScript classes.
- [chain-registry](https://github.com/cosmology-tech/chain-registry) Everything from token symbols, logos, and IBC denominations for all assets you want to support in your application.
- [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) Experience the convenience of connecting with a variety of web3 wallets through a single, streamlined interface.
- [create-cosmos-app](https://github.com/cosmology-tech/create-cosmos-app) Set up a modern Cosmos app by running one command.
- [interchain-ui](https://github.com/cosmology-tech/interchain-ui) The Interchain Design System, empowering developers with a flexible, easy-to-use UI kit.
- [starship](https://github.com/cosmology-tech/starship) Unified Testing and Development for the Interchain.

## Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.zone/validator)

## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
