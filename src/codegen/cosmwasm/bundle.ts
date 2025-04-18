import * as _2 from "./wasm/v1/authz";
import * as _3 from "./wasm/v1/genesis";
import * as _4 from "./wasm/v1/ibc";
import * as _5 from "./wasm/v1/proposal";
import * as _6 from "./wasm/v1/query";
import * as _7 from "./wasm/v1/tx";
import * as _8 from "./wasm/v1/types";
import * as _188 from "./wasm/v1/tx.amino";
import * as _189 from "./wasm/v1/tx.registry";
import * as _190 from "./wasm/v1/query.lcd";
import * as _191 from "./wasm/v1/query.rpc.Query";
import * as _192 from "./wasm/v1/tx.rpc.msg";
import * as _323 from "./lcd";
import * as _324 from "./rpc.query";
import * as _325 from "./rpc.tx";
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
      ..._188,
      ..._189,
      ..._190,
      ..._191,
      ..._192
    };
  }
  export const ClientFactory = {
    ..._323,
    ..._324,
    ..._325
  };
}