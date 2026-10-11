import * as _190 from "./liquid/module/v1/module.js";
import * as _191 from "./liquid/v1beta1/genesis.js";
import * as _192 from "./liquid/v1beta1/liquid.js";
import * as _193 from "./liquid/v1beta1/query.js";
import * as _194 from "./liquid/v1beta1/tx.js";
import * as _195 from "./metaprotocols/extensions.js";
import * as _304 from "./liquid/v1beta1/tx.amino.js";
import * as _305 from "./liquid/v1beta1/tx.registry.js";
import * as _306 from "./liquid/v1beta1/query.rpc.Query.js";
import * as _307 from "./liquid/v1beta1/tx.rpc.msg.js";
import * as _314 from "./rpc.query.js";
import * as _315 from "./rpc.tx.js";
export namespace gaia {
  export namespace liquid {
    export namespace module {
      export const v1 = {
        ..._190
      };
    }
    export const v1beta1 = {
      ..._191,
      ..._192,
      ..._193,
      ..._194,
      ..._304,
      ..._305,
      ..._306,
      ..._307
    };
  }
  export const metaprotocols = {
    ..._195
  };
  export const ClientFactory = {
    ..._314,
    ..._315
  };
}