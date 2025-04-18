import * as _169 from "./gov/module/v1/module";
import * as _170 from "./gov/v1/genesis";
import * as _171 from "./gov/v1/gov";
import * as _172 from "./gov/v1/query";
import * as _173 from "./gov/v1/tx";
import * as _174 from "./gov/v1beta1/genesis";
import * as _175 from "./gov/v1beta1/gov";
import * as _176 from "./gov/v1beta1/query";
import * as _177 from "./gov/v1beta1/tx";
import * as _178 from "./photon/v1/genesis";
import * as _179 from "./photon/v1/photon";
import * as _180 from "./photon/v1/query";
import * as _181 from "./photon/v1/tx";
import * as _303 from "./gov/v1/tx.amino";
import * as _304 from "./gov/v1beta1/tx.amino";
import * as _305 from "./photon/v1/tx.amino";
import * as _306 from "./gov/v1/tx.registry";
import * as _307 from "./gov/v1beta1/tx.registry";
import * as _308 from "./photon/v1/tx.registry";
import * as _309 from "./gov/v1/query.lcd";
import * as _310 from "./gov/v1beta1/query.lcd";
import * as _311 from "./photon/v1/query.lcd";
import * as _312 from "./gov/v1/query.rpc.Query";
import * as _313 from "./gov/v1beta1/query.rpc.Query";
import * as _314 from "./photon/v1/query.rpc.Query";
import * as _315 from "./gov/v1/tx.rpc.msg";
import * as _316 from "./gov/v1beta1/tx.rpc.msg";
import * as _317 from "./photon/v1/tx.rpc.msg";
import * as _332 from "./lcd";
import * as _333 from "./rpc.query";
import * as _334 from "./rpc.tx";
export namespace atomone {
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._169
      };
    }
    export const v1 = {
      ..._170,
      ..._171,
      ..._172,
      ..._173,
      ..._303,
      ..._306,
      ..._309,
      ..._312,
      ..._315
    };
    export const v1beta1 = {
      ..._174,
      ..._175,
      ..._176,
      ..._177,
      ..._304,
      ..._307,
      ..._310,
      ..._313,
      ..._316
    };
  }
  export namespace photon {
    export const v1 = {
      ..._178,
      ..._179,
      ..._180,
      ..._181,
      ..._305,
      ..._308,
      ..._311,
      ..._314,
      ..._317
    };
  }
  export const ClientFactory = {
    ..._332,
    ..._333,
    ..._334
  };
}