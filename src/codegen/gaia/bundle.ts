import * as _203 from "./liquid/module/v1/module.js";
import * as _204 from "./liquid/v1beta1/genesis.js";
import * as _205 from "./liquid/v1beta1/liquid.js";
import * as _206 from "./liquid/v1beta1/query.js";
import * as _207 from "./liquid/v1beta1/tx.js";
import * as _208 from "./metaprotocols/extensions.js";
import * as _362 from "./liquid/v1beta1/tx.amino.js";
import * as _363 from "./liquid/v1beta1/tx.registry.js";
import * as _364 from "./liquid/v1beta1/query.lcd.js";
import * as _365 from "./liquid/v1beta1/query.rpc.Query.js";
import * as _366 from "./liquid/v1beta1/tx.rpc.msg.js";
import * as _379 from "./lcd.js";
import * as _380 from "./rpc.query.js";
import * as _381 from "./rpc.tx.js";
export namespace gaia {
  export namespace liquid {
    export namespace module {
      export const v1 = {
        ..._203
      };
    }
    export const v1beta1 = {
      ..._204,
      ..._205,
      ..._206,
      ..._207,
      ..._362,
      ..._363,
      ..._364,
      ..._365,
      ..._366
    };
  }
  export const metaprotocols = {
    ..._208
  };
  export const ClientFactory = {
    ..._379,
    ..._380,
    ..._381
  };
}