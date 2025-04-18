import * as _131 from "./applications/interchain_accounts/controller/v1/controller";
import * as _132 from "./applications/interchain_accounts/controller/v1/query";
import * as _133 from "./applications/interchain_accounts/controller/v1/tx";
import * as _134 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _135 from "./applications/interchain_accounts/host/v1/host";
import * as _136 from "./applications/interchain_accounts/host/v1/query";
import * as _137 from "./applications/interchain_accounts/host/v1/tx";
import * as _138 from "./applications/interchain_accounts/v1/account";
import * as _139 from "./applications/interchain_accounts/v1/metadata";
import * as _140 from "./applications/interchain_accounts/v1/packet";
import * as _141 from "./applications/transfer/v1/authz";
import * as _142 from "./applications/transfer/v1/genesis";
import * as _143 from "./applications/transfer/v1/query";
import * as _144 from "./applications/transfer/v1/transfer";
import * as _145 from "./applications/transfer/v1/tx";
import * as _146 from "./applications/transfer/v2/packet";
import * as _147 from "./core/channel/v1/channel";
import * as _148 from "./core/channel/v1/genesis";
import * as _149 from "./core/channel/v1/query";
import * as _150 from "./core/channel/v1/tx";
import * as _151 from "./core/channel/v1/upgrade";
import * as _152 from "./core/client/v1/client";
import * as _153 from "./core/client/v1/genesis";
import * as _154 from "./core/client/v1/query";
import * as _155 from "./core/client/v1/tx";
import * as _156 from "./core/commitment/v1/commitment";
import * as _157 from "./core/connection/v1/connection";
import * as _158 from "./core/connection/v1/genesis";
import * as _159 from "./core/connection/v1/query";
import * as _160 from "./core/connection/v1/tx";
import * as _161 from "./lightclients/localhost/v2/localhost";
import * as _162 from "./lightclients/solomachine/v2/solomachine";
import * as _163 from "./lightclients/solomachine/v3/solomachine";
import * as _164 from "./lightclients/tendermint/v1/tendermint";
import * as _165 from "./lightclients/wasm/v1/genesis";
import * as _166 from "./lightclients/wasm/v1/query";
import * as _167 from "./lightclients/wasm/v1/tx";
import * as _168 from "./lightclients/wasm/v1/wasm";
import * as _268 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _269 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _270 from "./applications/transfer/v1/tx.amino";
import * as _271 from "./core/channel/v1/tx.amino";
import * as _272 from "./core/client/v1/tx.amino";
import * as _273 from "./core/connection/v1/tx.amino";
import * as _274 from "./lightclients/wasm/v1/tx.amino";
import * as _275 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _276 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _277 from "./applications/transfer/v1/tx.registry";
import * as _278 from "./core/channel/v1/tx.registry";
import * as _279 from "./core/client/v1/tx.registry";
import * as _280 from "./core/connection/v1/tx.registry";
import * as _281 from "./lightclients/wasm/v1/tx.registry";
import * as _282 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _283 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _284 from "./applications/transfer/v1/query.lcd";
import * as _285 from "./core/channel/v1/query.lcd";
import * as _286 from "./core/client/v1/query.lcd";
import * as _287 from "./core/connection/v1/query.lcd";
import * as _288 from "./lightclients/wasm/v1/query.lcd";
import * as _289 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _290 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _291 from "./applications/transfer/v1/query.rpc.Query";
import * as _292 from "./core/channel/v1/query.rpc.Query";
import * as _293 from "./core/client/v1/query.rpc.Query";
import * as _294 from "./core/connection/v1/query.rpc.Query";
import * as _295 from "./lightclients/wasm/v1/query.rpc.Query";
import * as _296 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _297 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _298 from "./applications/transfer/v1/tx.rpc.msg";
import * as _299 from "./core/channel/v1/tx.rpc.msg";
import * as _300 from "./core/client/v1/tx.rpc.msg";
import * as _301 from "./core/connection/v1/tx.rpc.msg";
import * as _302 from "./lightclients/wasm/v1/tx.rpc.msg";
import * as _329 from "./lcd";
import * as _330 from "./rpc.query";
import * as _331 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._131,
          ..._132,
          ..._133,
          ..._268,
          ..._275,
          ..._282,
          ..._289,
          ..._296
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._134
        };
      }
      export namespace host {
        export const v1 = {
          ..._135,
          ..._136,
          ..._137,
          ..._269,
          ..._276,
          ..._283,
          ..._290,
          ..._297
        };
      }
      export const v1 = {
        ..._138,
        ..._139,
        ..._140
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._141,
        ..._142,
        ..._143,
        ..._144,
        ..._145,
        ..._270,
        ..._277,
        ..._284,
        ..._291,
        ..._298
      };
      export const v2 = {
        ..._146
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._147,
        ..._148,
        ..._149,
        ..._150,
        ..._151,
        ..._271,
        ..._278,
        ..._285,
        ..._292,
        ..._299
      };
    }
    export namespace client {
      export const v1 = {
        ..._152,
        ..._153,
        ..._154,
        ..._155,
        ..._272,
        ..._279,
        ..._286,
        ..._293,
        ..._300
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._156
      };
    }
    export namespace connection {
      export const v1 = {
        ..._157,
        ..._158,
        ..._159,
        ..._160,
        ..._273,
        ..._280,
        ..._287,
        ..._294,
        ..._301
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._161
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._162
      };
      export const v3 = {
        ..._163
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._164
      };
    }
    export namespace wasm {
      export const v1 = {
        ..._165,
        ..._166,
        ..._167,
        ..._168,
        ..._274,
        ..._281,
        ..._288,
        ..._295,
        ..._302
      };
    }
  }
  export const ClientFactory = {
    ..._329,
    ..._330,
    ..._331
  };
}