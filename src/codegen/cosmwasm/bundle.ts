import * as _2 from "./wasm/v1/authz";
import * as _3 from "./wasm/v1/genesis";
import * as _4 from "./wasm/v1/ibc";
import * as _5 from "./wasm/v1/proposal";
import * as _6 from "./wasm/v1/query";
import * as _7 from "./wasm/v1/tx";
import * as _8 from "./wasm/v1/types";
import * as _141 from "./wasm/v1/tx.amino";
import * as _142 from "./wasm/v1/tx.registry";
import * as _143 from "./wasm/v1/query.lcd";
import * as _144 from "./wasm/v1/query.rpc.Query";
import * as _145 from "./wasm/v1/tx.rpc.msg";
import * as _236 from "./lcd";
import * as _237 from "./rpc.query";
import * as _238 from "./rpc.tx";
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
      ..._141,
      ..._142,
      ..._143,
      ..._144,
      ..._145
    };
  }
  export const ClientFactory = {
    ..._236,
    ..._237,
    ..._238
  };
}