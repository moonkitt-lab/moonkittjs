import * as _2 from "./wasm/v1/authz.js";
import * as _3 from "./wasm/v1/genesis.js";
import * as _4 from "./wasm/v1/ibc.js";
import * as _5 from "./wasm/v1/proposal_legacy.js";
import * as _6 from "./wasm/v1/query.js";
import * as _7 from "./wasm/v1/tx.js";
import * as _8 from "./wasm/v1/types.js";
import * as _209 from "./wasm/v1/tx.amino.js";
import * as _210 from "./wasm/v1/tx.registry.js";
import * as _211 from "./wasm/v1/query.lcd.js";
import * as _212 from "./wasm/v1/query.rpc.Query.js";
import * as _213 from "./wasm/v1/tx.rpc.msg.js";
import * as _367 from "./lcd.js";
import * as _368 from "./rpc.query.js";
import * as _369 from "./rpc.tx.js";
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
      ..._209,
      ..._210,
      ..._211,
      ..._212,
      ..._213
    };
  }
  export const ClientFactory = {
    ..._367,
    ..._368,
    ..._369
  };
}