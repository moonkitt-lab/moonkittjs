import * as _190 from "./gov/module/v1/module.js";
import * as _191 from "./gov/v1/genesis.js";
import * as _192 from "./gov/v1/gov.js";
import * as _193 from "./gov/v1/query.js";
import * as _194 from "./gov/v1/tx.js";
import * as _195 from "./gov/v1beta1/genesis.js";
import * as _196 from "./gov/v1beta1/gov.js";
import * as _197 from "./gov/v1beta1/query.js";
import * as _198 from "./gov/v1beta1/tx.js";
import * as _199 from "./photon/v1/genesis.js";
import * as _200 from "./photon/v1/photon.js";
import * as _201 from "./photon/v1/query.js";
import * as _202 from "./photon/v1/tx.js";
import * as _347 from "./gov/v1/tx.amino.js";
import * as _348 from "./gov/v1beta1/tx.amino.js";
import * as _349 from "./photon/v1/tx.amino.js";
import * as _350 from "./gov/v1/tx.registry.js";
import * as _351 from "./gov/v1beta1/tx.registry.js";
import * as _352 from "./photon/v1/tx.registry.js";
import * as _353 from "./gov/v1/query.lcd.js";
import * as _354 from "./gov/v1beta1/query.lcd.js";
import * as _355 from "./photon/v1/query.lcd.js";
import * as _356 from "./gov/v1/query.rpc.Query.js";
import * as _357 from "./gov/v1beta1/query.rpc.Query.js";
import * as _358 from "./photon/v1/query.rpc.Query.js";
import * as _359 from "./gov/v1/tx.rpc.msg.js";
import * as _360 from "./gov/v1beta1/tx.rpc.msg.js";
import * as _361 from "./photon/v1/tx.rpc.msg.js";
import * as _376 from "./lcd.js";
import * as _377 from "./rpc.query.js";
import * as _378 from "./rpc.tx.js";
export namespace atomone {
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._190
      };
    }
    export const v1 = {
      ..._191,
      ..._192,
      ..._193,
      ..._194,
      ..._347,
      ..._350,
      ..._353,
      ..._356,
      ..._359
    };
    export const v1beta1 = {
      ..._195,
      ..._196,
      ..._197,
      ..._198,
      ..._348,
      ..._351,
      ..._354,
      ..._357,
      ..._360
    };
  }
  export namespace photon {
    export const v1 = {
      ..._199,
      ..._200,
      ..._201,
      ..._202,
      ..._349,
      ..._352,
      ..._355,
      ..._358,
      ..._361
    };
  }
  export const ClientFactory = {
    ..._376,
    ..._377,
    ..._378
  };
}