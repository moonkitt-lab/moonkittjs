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
import * as _249 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _250 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _251 from "./applications/transfer/v1/tx.amino";
import * as _252 from "./core/channel/v1/tx.amino";
import * as _253 from "./core/client/v1/tx.amino";
import * as _254 from "./core/connection/v1/tx.amino";
import * as _255 from "./lightclients/wasm/v1/tx.amino";
import * as _256 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _257 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _258 from "./applications/transfer/v1/tx.registry";
import * as _259 from "./core/channel/v1/tx.registry";
import * as _260 from "./core/client/v1/tx.registry";
import * as _261 from "./core/connection/v1/tx.registry";
import * as _262 from "./lightclients/wasm/v1/tx.registry";
import * as _263 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _264 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _265 from "./applications/transfer/v1/query.lcd";
import * as _266 from "./core/channel/v1/query.lcd";
import * as _267 from "./core/client/v1/query.lcd";
import * as _268 from "./core/connection/v1/query.lcd";
import * as _269 from "./lightclients/wasm/v1/query.lcd";
import * as _270 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _271 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _272 from "./applications/transfer/v1/query.rpc.Query";
import * as _273 from "./core/channel/v1/query.rpc.Query";
import * as _274 from "./core/client/v1/query.rpc.Query";
import * as _275 from "./core/connection/v1/query.rpc.Query";
import * as _276 from "./lightclients/wasm/v1/query.rpc.Query";
import * as _277 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _278 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _279 from "./applications/transfer/v1/tx.rpc.msg";
import * as _280 from "./core/channel/v1/tx.rpc.msg";
import * as _281 from "./core/client/v1/tx.rpc.msg";
import * as _282 from "./core/connection/v1/tx.rpc.msg";
import * as _283 from "./lightclients/wasm/v1/tx.rpc.msg";
import * as _290 from "./lcd";
import * as _291 from "./rpc.query";
import * as _292 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._131,
          ..._132,
          ..._133,
          ..._249,
          ..._256,
          ..._263,
          ..._270,
          ..._277
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
          ..._250,
          ..._257,
          ..._264,
          ..._271,
          ..._278
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
        ..._251,
        ..._258,
        ..._265,
        ..._272,
        ..._279
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
        ..._252,
        ..._259,
        ..._266,
        ..._273,
        ..._280
      };
    }
    export namespace client {
      export const v1 = {
        ..._152,
        ..._153,
        ..._154,
        ..._155,
        ..._253,
        ..._260,
        ..._267,
        ..._274,
        ..._281
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
        ..._254,
        ..._261,
        ..._268,
        ..._275,
        ..._282
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
        ..._255,
        ..._262,
        ..._269,
        ..._276,
        ..._283
      };
    }
  }
  export const ClientFactory = {
    ..._290,
    ..._291,
    ..._292
  };
}