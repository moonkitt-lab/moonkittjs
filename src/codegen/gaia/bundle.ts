import * as _182 from "./liquid/module/v1/module";
import * as _183 from "./liquid/v1beta1/genesis";
import * as _184 from "./liquid/v1beta1/liquid";
import * as _185 from "./liquid/v1beta1/query";
import * as _186 from "./liquid/v1beta1/tx";
import * as _187 from "./metaprotocols/extensions";
import * as _318 from "./liquid/v1beta1/tx.amino";
import * as _319 from "./liquid/v1beta1/tx.registry";
import * as _320 from "./liquid/v1beta1/query.lcd";
import * as _321 from "./liquid/v1beta1/query.rpc.Query";
import * as _322 from "./liquid/v1beta1/tx.rpc.msg";
import * as _335 from "./lcd";
import * as _336 from "./rpc.query";
import * as _337 from "./rpc.tx";
export namespace gaia {
  export namespace liquid {
    export namespace module {
      export const v1 = {
        ..._182
      };
    }
    export const v1beta1 = {
      ..._183,
      ..._184,
      ..._185,
      ..._186,
      ..._318,
      ..._319,
      ..._320,
      ..._321,
      ..._322
    };
  }
  export const metaprotocols = {
    ..._187
  };
  export const ClientFactory = {
    ..._335,
    ..._336,
    ..._337
  };
}