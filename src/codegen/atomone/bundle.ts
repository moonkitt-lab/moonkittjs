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
import * as _297 from "./gov/v1/tx.amino";
import * as _298 from "./gov/v1beta1/tx.amino";
import * as _299 from "./photon/v1/tx.amino";
import * as _300 from "./gov/v1/tx.registry";
import * as _301 from "./gov/v1beta1/tx.registry";
import * as _302 from "./photon/v1/tx.registry";
import * as _303 from "./gov/v1/query.lcd";
import * as _304 from "./gov/v1beta1/query.lcd";
import * as _305 from "./photon/v1/query.lcd";
import * as _306 from "./gov/v1/query.rpc.Query";
import * as _307 from "./gov/v1beta1/query.rpc.Query";
import * as _308 from "./photon/v1/query.rpc.Query";
import * as _309 from "./gov/v1/tx.rpc.msg";
import * as _310 from "./gov/v1beta1/tx.rpc.msg";
import * as _311 from "./photon/v1/tx.rpc.msg";
import * as _321 from "./lcd";
import * as _322 from "./rpc.query";
import * as _323 from "./rpc.tx";
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
      ..._297,
      ..._300,
      ..._303,
      ..._306,
      ..._309
    };
    export const v1beta1 = {
      ..._174,
      ..._175,
      ..._176,
      ..._177,
      ..._298,
      ..._301,
      ..._304,
      ..._307,
      ..._310
    };
  }
  export namespace photon {
    export const v1 = {
      ..._178,
      ..._179,
      ..._180,
      ..._181,
      ..._299,
      ..._302,
      ..._305,
      ..._308,
      ..._311
    };
  }
  export const ClientFactory = {
    ..._321,
    ..._322,
    ..._323
  };
}