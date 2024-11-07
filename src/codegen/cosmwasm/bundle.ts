import * as _2 from "./wasm/v1/authz";
import * as _3 from "./wasm/v1/genesis";
import * as _4 from "./wasm/v1/ibc";
import * as _5 from "./wasm/v1/proposal";
import * as _6 from "./wasm/v1/query";
import * as _7 from "./wasm/v1/tx";
import * as _8 from "./wasm/v1/types";
import * as _169 from "./wasm/v1/tx.amino";
import * as _170 from "./wasm/v1/tx.registry";
import * as _171 from "./wasm/v1/query.lcd";
import * as _172 from "./wasm/v1/query.rpc.Query";
import * as _173 from "./wasm/v1/tx.rpc.msg";
import * as _284 from "./lcd";
import * as _285 from "./rpc.query";
import * as _286 from "./rpc.tx";
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
      ..._169,
      ..._170,
      ..._171,
      ..._172,
      ..._173
    };
  }
  export const ClientFactory = {
    ..._284,
    ..._285,
    ..._286
  };
}