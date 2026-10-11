import * as _2 from "./wasm/v1/authz.js";
import * as _3 from "./wasm/v1/genesis.js";
import * as _4 from "./wasm/v1/ibc.js";
import * as _5 from "./wasm/v1/proposal_legacy.js";
import * as _6 from "./wasm/v1/query.js";
import * as _7 from "./wasm/v1/tx.js";
import * as _8 from "./wasm/v1/types.js";
import * as _196 from "./wasm/v1/tx.amino.js";
import * as _197 from "./wasm/v1/tx.registry.js";
import * as _198 from "./wasm/v1/query.rpc.Query.js";
import * as _199 from "./wasm/v1/tx.rpc.msg.js";
import * as _308 from "./rpc.query.js";
import * as _309 from "./rpc.tx.js";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._8,
      ..._196,
      ..._197,
      ..._198,
      ..._199
    };
  }
  export const ClientFactory = {
    ..._308,
    ..._309
  };
}