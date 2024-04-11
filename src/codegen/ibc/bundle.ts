import * as _15 from "./applications/transfer/v1/genesis";
import * as _16 from "./applications/transfer/v1/query";
import * as _17 from "./applications/transfer/v1/transfer";
import * as _18 from "./applications/transfer/v1/tx";
import * as _19 from "./applications/transfer/v2/packet";
import * as _20 from "./core/channel/v1/channel";
import * as _21 from "./core/channel/v1/genesis";
import * as _22 from "./core/channel/v1/query";
import * as _23 from "./core/channel/v1/tx";
import * as _24 from "./core/client/v1/client";
import * as _25 from "./core/client/v1/genesis";
import * as _26 from "./core/client/v1/query";
import * as _27 from "./core/client/v1/tx";
import * as _28 from "./core/commitment/v1/commitment";
import * as _29 from "./core/connection/v1/connection";
import * as _30 from "./core/connection/v1/genesis";
import * as _31 from "./core/connection/v1/query";
import * as _32 from "./core/connection/v1/tx";
import * as _33 from "./lightclients/localhost/v1/localhost";
import * as _34 from "./lightclients/solomachine/v1/solomachine";
import * as _35 from "./lightclients/solomachine/v2/solomachine";
import * as _36 from "./lightclients/tendermint/v1/tendermint";
import * as _146 from "./applications/transfer/v1/tx.amino";
import * as _147 from "./core/channel/v1/tx.amino";
import * as _148 from "./core/client/v1/tx.amino";
import * as _149 from "./core/connection/v1/tx.amino";
import * as _150 from "./applications/transfer/v1/tx.registry";
import * as _151 from "./core/channel/v1/tx.registry";
import * as _152 from "./core/client/v1/tx.registry";
import * as _153 from "./core/connection/v1/tx.registry";
import * as _154 from "./applications/transfer/v1/query.lcd";
import * as _155 from "./core/channel/v1/query.lcd";
import * as _156 from "./core/client/v1/query.lcd";
import * as _157 from "./core/connection/v1/query.lcd";
import * as _158 from "./applications/transfer/v1/query.rpc.Query";
import * as _159 from "./core/channel/v1/query.rpc.Query";
import * as _160 from "./core/client/v1/query.rpc.Query";
import * as _161 from "./core/connection/v1/query.rpc.Query";
import * as _162 from "./applications/transfer/v1/tx.rpc.msg";
import * as _163 from "./core/channel/v1/tx.rpc.msg";
import * as _164 from "./core/client/v1/tx.rpc.msg";
import * as _165 from "./core/connection/v1/tx.rpc.msg";
import * as _239 from "./lcd";
import * as _240 from "./rpc.query";
import * as _241 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._15,
        ..._16,
        ..._17,
        ..._18,
        ..._146,
        ..._150,
        ..._154,
        ..._158,
        ..._162
      };
      export const v2 = {
        ..._19
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._20,
        ..._21,
        ..._22,
        ..._23,
        ..._147,
        ..._151,
        ..._155,
        ..._159,
        ..._163
      };
    }
    export namespace client {
      export const v1 = {
        ..._24,
        ..._25,
        ..._26,
        ..._27,
        ..._148,
        ..._152,
        ..._156,
        ..._160,
        ..._164
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._28
      };
    }
    export namespace connection {
      export const v1 = {
        ..._29,
        ..._30,
        ..._31,
        ..._32,
        ..._149,
        ..._153,
        ..._157,
        ..._161,
        ..._165
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._33
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._34
      };
      export const v2 = {
        ..._35
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._36
      };
    }
  }
  export const ClientFactory = {
    ..._239,
    ..._240,
    ..._241
  };
}