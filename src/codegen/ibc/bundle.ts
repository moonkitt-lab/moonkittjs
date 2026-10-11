import * as _142 from "./applications/interchain_accounts/controller/v1/controller.js";
import * as _143 from "./applications/interchain_accounts/controller/v1/query.js";
import * as _144 from "./applications/interchain_accounts/controller/v1/tx.js";
import * as _145 from "./applications/interchain_accounts/genesis/v1/genesis.js";
import * as _146 from "./applications/interchain_accounts/host/v1/host.js";
import * as _147 from "./applications/interchain_accounts/host/v1/query.js";
import * as _148 from "./applications/interchain_accounts/host/v1/tx.js";
import * as _149 from "./applications/interchain_accounts/v1/account.js";
import * as _150 from "./applications/interchain_accounts/v1/metadata.js";
import * as _151 from "./applications/interchain_accounts/v1/packet.js";
import * as _152 from "./applications/transfer/v1/authz.js";
import * as _153 from "./applications/transfer/v1/denomtrace.js";
import * as _154 from "./applications/transfer/v1/genesis.js";
import * as _155 from "./applications/transfer/v1/packet.js";
import * as _156 from "./applications/transfer/v1/query.js";
import * as _157 from "./applications/transfer/v1/token.js";
import * as _158 from "./applications/transfer/v1/transfer.js";
import * as _159 from "./applications/transfer/v1/tx.js";
import * as _160 from "./core/channel/v1/channel.js";
import * as _161 from "./core/channel/v1/genesis.js";
import * as _162 from "./core/channel/v1/query.js";
import * as _163 from "./core/channel/v1/tx.js";
import * as _164 from "./core/channel/v2/genesis.js";
import * as _165 from "./core/channel/v2/packet.js";
import * as _166 from "./core/channel/v2/query.js";
import * as _167 from "./core/channel/v2/tx.js";
import * as _168 from "./core/client/v1/client.js";
import * as _169 from "./core/client/v1/genesis.js";
import * as _170 from "./core/client/v1/query.js";
import * as _171 from "./core/client/v1/tx.js";
import * as _172 from "./core/client/v2/config.js";
import * as _173 from "./core/client/v2/counterparty.js";
import * as _174 from "./core/client/v2/genesis.js";
import * as _175 from "./core/client/v2/query.js";
import * as _176 from "./core/client/v2/tx.js";
import * as _177 from "./core/commitment/v1/commitment.js";
import * as _178 from "./core/commitment/v2/commitment.js";
import * as _179 from "./core/connection/v1/connection.js";
import * as _180 from "./core/connection/v1/genesis.js";
import * as _181 from "./core/connection/v1/query.js";
import * as _182 from "./core/connection/v1/tx.js";
import * as _183 from "./lightclients/solomachine/v2/solomachine.js";
import * as _184 from "./lightclients/solomachine/v3/solomachine.js";
import * as _185 from "./lightclients/tendermint/v1/tendermint.js";
import * as _186 from "./lightclients/wasm/v1/genesis.js";
import * as _187 from "./lightclients/wasm/v1/query.js";
import * as _188 from "./lightclients/wasm/v1/tx.js";
import * as _189 from "./lightclients/wasm/v1/wasm.js";
import * as _268 from "./applications/interchain_accounts/controller/v1/tx.amino.js";
import * as _269 from "./applications/interchain_accounts/host/v1/tx.amino.js";
import * as _270 from "./applications/transfer/v1/tx.amino.js";
import * as _271 from "./core/channel/v1/tx.amino.js";
import * as _272 from "./core/channel/v2/tx.amino.js";
import * as _273 from "./core/client/v1/tx.amino.js";
import * as _274 from "./core/client/v2/tx.amino.js";
import * as _275 from "./core/connection/v1/tx.amino.js";
import * as _276 from "./lightclients/wasm/v1/tx.amino.js";
import * as _277 from "./applications/interchain_accounts/controller/v1/tx.registry.js";
import * as _278 from "./applications/interchain_accounts/host/v1/tx.registry.js";
import * as _279 from "./applications/transfer/v1/tx.registry.js";
import * as _280 from "./core/channel/v1/tx.registry.js";
import * as _281 from "./core/channel/v2/tx.registry.js";
import * as _282 from "./core/client/v1/tx.registry.js";
import * as _283 from "./core/client/v2/tx.registry.js";
import * as _284 from "./core/connection/v1/tx.registry.js";
import * as _285 from "./lightclients/wasm/v1/tx.registry.js";
import * as _286 from "./applications/interchain_accounts/controller/v1/query.rpc.Query.js";
import * as _287 from "./applications/interchain_accounts/host/v1/query.rpc.Query.js";
import * as _288 from "./applications/transfer/v1/query.rpc.Query.js";
import * as _289 from "./core/channel/v1/query.rpc.Query.js";
import * as _290 from "./core/channel/v2/query.rpc.Query.js";
import * as _291 from "./core/client/v1/query.rpc.Query.js";
import * as _292 from "./core/client/v2/query.rpc.Query.js";
import * as _293 from "./core/connection/v1/query.rpc.Query.js";
import * as _294 from "./lightclients/wasm/v1/query.rpc.Query.js";
import * as _295 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg.js";
import * as _296 from "./applications/interchain_accounts/host/v1/tx.rpc.msg.js";
import * as _297 from "./applications/transfer/v1/tx.rpc.msg.js";
import * as _298 from "./core/channel/v1/tx.rpc.msg.js";
import * as _299 from "./core/channel/v2/tx.rpc.msg.js";
import * as _300 from "./core/client/v1/tx.rpc.msg.js";
import * as _301 from "./core/client/v2/tx.rpc.msg.js";
import * as _302 from "./core/connection/v1/tx.rpc.msg.js";
import * as _303 from "./lightclients/wasm/v1/tx.rpc.msg.js";
import * as _312 from "./rpc.query.js";
import * as _313 from "./rpc.tx.js";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._142,
          ..._143,
          ..._144,
          ..._268,
          ..._277,
          ..._286,
          ..._295
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._145
        };
      }
      export namespace host {
        export const v1 = {
          ..._146,
          ..._147,
          ..._148,
          ..._269,
          ..._278,
          ..._287,
          ..._296
        };
      }
      export const v1 = {
        ..._149,
        ..._150,
        ..._151
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._152,
        ..._153,
        ..._154,
        ..._155,
        ..._156,
        ..._157,
        ..._158,
        ..._159,
        ..._270,
        ..._279,
        ..._288,
        ..._297
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._160,
        ..._161,
        ..._162,
        ..._163,
        ..._271,
        ..._280,
        ..._289,
        ..._298
      };
      export const v2 = {
        ..._164,
        ..._165,
        ..._166,
        ..._167,
        ..._272,
        ..._281,
        ..._290,
        ..._299
      };
    }
    export namespace client {
      export const v1 = {
        ..._168,
        ..._169,
        ..._170,
        ..._171,
        ..._273,
        ..._282,
        ..._291,
        ..._300
      };
      export const v2 = {
        ..._172,
        ..._173,
        ..._174,
        ..._175,
        ..._176,
        ..._274,
        ..._283,
        ..._292,
        ..._301
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._177
      };
      export const v2 = {
        ..._178
      };
    }
    export namespace connection {
      export const v1 = {
        ..._179,
        ..._180,
        ..._181,
        ..._182,
        ..._275,
        ..._284,
        ..._293,
        ..._302
      };
    }
  }
  export namespace lightclients {
    export namespace solomachine {
      export const v2 = {
        ..._183
      };
      export const v3 = {
        ..._184
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._185
      };
    }
    export namespace wasm {
      export const v1 = {
        ..._186,
        ..._187,
        ..._188,
        ..._189,
        ..._276,
        ..._285,
        ..._294,
        ..._303
      };
    }
  }
  export const ClientFactory = {
    ..._312,
    ..._313
  };
}