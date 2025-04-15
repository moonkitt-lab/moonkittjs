import * as _2 from "./wasm/v1/authz";
import * as _3 from "./wasm/v1/genesis";
import * as _4 from "./wasm/v1/ibc";
import * as _5 from "./wasm/v1/proposal";
import * as _6 from "./wasm/v1/query";
import * as _7 from "./wasm/v1/tx";
import * as _8 from "./wasm/v1/types";
import * as _182 from "./wasm/v1/tx.amino";
import * as _183 from "./wasm/v1/tx.registry";
import * as _184 from "./wasm/v1/query.lcd";
import * as _185 from "./wasm/v1/query.rpc.Query";
import * as _186 from "./wasm/v1/tx.rpc.msg";
import * as _312 from "./lcd";
import * as _313 from "./rpc.query";
import * as _314 from "./rpc.tx";
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
      ..._182,
      ..._183,
      ..._184,
      ..._185,
      ..._186
    };
  }
  export const ClientFactory = {
    ..._312,
    ..._313,
    ..._314
  };
}