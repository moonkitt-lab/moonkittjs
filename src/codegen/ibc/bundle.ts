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
import * as _302 from "./applications/interchain_accounts/controller/v1/tx.amino.js";
import * as _303 from "./applications/interchain_accounts/host/v1/tx.amino.js";
import * as _304 from "./applications/transfer/v1/tx.amino.js";
import * as _305 from "./core/channel/v1/tx.amino.js";
import * as _306 from "./core/channel/v2/tx.amino.js";
import * as _307 from "./core/client/v1/tx.amino.js";
import * as _308 from "./core/client/v2/tx.amino.js";
import * as _309 from "./core/connection/v1/tx.amino.js";
import * as _310 from "./lightclients/wasm/v1/tx.amino.js";
import * as _311 from "./applications/interchain_accounts/controller/v1/tx.registry.js";
import * as _312 from "./applications/interchain_accounts/host/v1/tx.registry.js";
import * as _313 from "./applications/transfer/v1/tx.registry.js";
import * as _314 from "./core/channel/v1/tx.registry.js";
import * as _315 from "./core/channel/v2/tx.registry.js";
import * as _316 from "./core/client/v1/tx.registry.js";
import * as _317 from "./core/client/v2/tx.registry.js";
import * as _318 from "./core/connection/v1/tx.registry.js";
import * as _319 from "./lightclients/wasm/v1/tx.registry.js";
import * as _320 from "./applications/interchain_accounts/controller/v1/query.lcd.js";
import * as _321 from "./applications/interchain_accounts/host/v1/query.lcd.js";
import * as _322 from "./applications/transfer/v1/query.lcd.js";
import * as _323 from "./core/channel/v1/query.lcd.js";
import * as _324 from "./core/channel/v2/query.lcd.js";
import * as _325 from "./core/client/v1/query.lcd.js";
import * as _326 from "./core/client/v2/query.lcd.js";
import * as _327 from "./core/connection/v1/query.lcd.js";
import * as _328 from "./lightclients/wasm/v1/query.lcd.js";
import * as _329 from "./applications/interchain_accounts/controller/v1/query.rpc.Query.js";
import * as _330 from "./applications/interchain_accounts/host/v1/query.rpc.Query.js";
import * as _331 from "./applications/transfer/v1/query.rpc.Query.js";
import * as _332 from "./core/channel/v1/query.rpc.Query.js";
import * as _333 from "./core/channel/v2/query.rpc.Query.js";
import * as _334 from "./core/client/v1/query.rpc.Query.js";
import * as _335 from "./core/client/v2/query.rpc.Query.js";
import * as _336 from "./core/connection/v1/query.rpc.Query.js";
import * as _337 from "./lightclients/wasm/v1/query.rpc.Query.js";
import * as _338 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg.js";
import * as _339 from "./applications/interchain_accounts/host/v1/tx.rpc.msg.js";
import * as _340 from "./applications/transfer/v1/tx.rpc.msg.js";
import * as _341 from "./core/channel/v1/tx.rpc.msg.js";
import * as _342 from "./core/channel/v2/tx.rpc.msg.js";
import * as _343 from "./core/client/v1/tx.rpc.msg.js";
import * as _344 from "./core/client/v2/tx.rpc.msg.js";
import * as _345 from "./core/connection/v1/tx.rpc.msg.js";
import * as _346 from "./lightclients/wasm/v1/tx.rpc.msg.js";
import * as _373 from "./lcd.js";
import * as _374 from "./rpc.query.js";
import * as _375 from "./rpc.tx.js";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._142,
          ..._143,
          ..._144,
          ..._302,
          ..._311,
          ..._320,
          ..._329,
          ..._338
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
          ..._303,
          ..._312,
          ..._321,
          ..._330,
          ..._339
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
        ..._304,
        ..._313,
        ..._322,
        ..._331,
        ..._340
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
        ..._305,
        ..._314,
        ..._323,
        ..._332,
        ..._341
      };
      export const v2 = {
        ..._164,
        ..._165,
        ..._166,
        ..._167,
        ..._306,
        ..._315,
        ..._324,
        ..._333,
        ..._342
      };
    }
    export namespace client {
      export const v1 = {
        ..._168,
        ..._169,
        ..._170,
        ..._171,
        ..._307,
        ..._316,
        ..._325,
        ..._334,
        ..._343
      };
      export const v2 = {
        ..._172,
        ..._173,
        ..._174,
        ..._175,
        ..._176,
        ..._308,
        ..._317,
        ..._326,
        ..._335,
        ..._344
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
        ..._309,
        ..._318,
        ..._327,
        ..._336,
        ..._345
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
        ..._310,
        ..._319,
        ..._328,
        ..._337,
        ..._346
      };
    }
  }
  export const ClientFactory = {
    ..._373,
    ..._374,
    ..._375
  };
}