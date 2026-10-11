import * as _16 from "./app/runtime/v1alpha1/module.js";
import * as _17 from "./auth/module/v1/module.js";
import * as _18 from "./auth/v1beta1/auth.js";
import * as _19 from "./auth/v1beta1/genesis.js";
import * as _20 from "./auth/v1beta1/query.js";
import * as _21 from "./auth/v1beta1/tx.js";
import * as _22 from "./authz/module/v1/module.js";
import * as _23 from "./authz/v1beta1/authz.js";
import * as _24 from "./authz/v1beta1/event.js";
import * as _25 from "./authz/v1beta1/genesis.js";
import * as _26 from "./authz/v1beta1/query.js";
import * as _27 from "./authz/v1beta1/tx.js";
import * as _28 from "./bank/module/v1/module.js";
import * as _29 from "./bank/v1beta1/authz.js";
import * as _30 from "./bank/v1beta1/bank.js";
import * as _31 from "./bank/v1beta1/genesis.js";
import * as _32 from "./bank/v1beta1/query.js";
import * as _33 from "./bank/v1beta1/tx.js";
import * as _34 from "./base/abci/v1beta1/abci.js";
import * as _35 from "./base/node/v1beta1/query.js";
import * as _36 from "./base/query/v1beta1/pagination.js";
import * as _37 from "./base/reflection/v2alpha1/reflection.js";
import * as _38 from "./base/tendermint/v1beta1/query.js";
import * as _39 from "./base/tendermint/v1beta1/types.js";
import * as _40 from "./base/v1beta1/coin.js";
import * as _41 from "./circuit/module/v1/module.js";
import * as _42 from "./circuit/v1/query.js";
import * as _43 from "./circuit/v1/tx.js";
import * as _44 from "./circuit/v1/types.js";
import * as _45 from "./consensus/module/v1/module.js";
import * as _46 from "./consensus/v1/query.js";
import * as _47 from "./consensus/v1/tx.js";
import * as _48 from "./crisis/module/v1/module.js";
import * as _49 from "./crypto/ed25519/keys.js";
import * as _50 from "./crypto/hd/v1/hd.js";
import * as _51 from "./crypto/keyring/v1/record.js";
import * as _52 from "./crypto/multisig/keys.js";
import * as _53 from "./crypto/secp256k1/keys.js";
import * as _54 from "./crypto/secp256r1/keys.js";
import * as _55 from "./distribution/module/v1/module.js";
import * as _56 from "./distribution/v1beta1/distribution.js";
import * as _57 from "./distribution/v1beta1/genesis.js";
import * as _58 from "./distribution/v1beta1/query.js";
import * as _59 from "./distribution/v1beta1/tx.js";
import * as _60 from "./epochs/module/v1/module.js";
import * as _61 from "./epochs/v1beta1/events.js";
import * as _62 from "./epochs/v1beta1/genesis.js";
import * as _63 from "./epochs/v1beta1/query.js";
import * as _64 from "./evidence/module/v1/module.js";
import * as _65 from "./feegrant/module/v1/module.js";
import * as _66 from "./feegrant/v1beta1/feegrant.js";
import * as _67 from "./feegrant/v1beta1/genesis.js";
import * as _68 from "./feegrant/v1beta1/query.js";
import * as _69 from "./feegrant/v1beta1/tx.js";
import * as _70 from "./genutil/module/v1/module.js";
import * as _71 from "./gov/module/v1/module.js";
import * as _72 from "./gov/v1/genesis.js";
import * as _73 from "./gov/v1/gov.js";
import * as _74 from "./gov/v1/query.js";
import * as _75 from "./gov/v1/tx.js";
import * as _76 from "./gov/v1beta1/genesis.js";
import * as _77 from "./gov/v1beta1/gov.js";
import * as _78 from "./gov/v1beta1/query.js";
import * as _79 from "./gov/v1beta1/tx.js";
import * as _80 from "./group/module/v1/module.js";
import * as _81 from "./group/v1/events.js";
import * as _82 from "./group/v1/genesis.js";
import * as _83 from "./group/v1/query.js";
import * as _84 from "./group/v1/tx.js";
import * as _85 from "./group/v1/types.js";
import * as _86 from "./mint/module/v1/module.js";
import * as _87 from "./mint/v1beta1/genesis.js";
import * as _88 from "./mint/v1beta1/mint.js";
import * as _89 from "./mint/v1beta1/query.js";
import * as _90 from "./mint/v1beta1/tx.js";
import * as _91 from "./msg/textual/v1/textual.js";
import * as _92 from "./nft/module/v1/module.js";
import * as _93 from "./params/module/v1/module.js";
import * as _94 from "./params/v1beta1/params.js";
import * as _95 from "./params/v1beta1/query.js";
import * as _96 from "./protocolpool/module/v1/module.js";
import * as _97 from "./protocolpool/v1/genesis.js";
import * as _98 from "./protocolpool/v1/query.js";
import * as _99 from "./protocolpool/v1/tx.js";
import * as _100 from "./protocolpool/v1/types.js";
import * as _101 from "./query/v1/query.js";
import * as _102 from "./reflection/v1/reflection.js";
import * as _103 from "./slashing/module/v1/module.js";
import * as _104 from "./slashing/v1beta1/genesis.js";
import * as _105 from "./slashing/v1beta1/query.js";
import * as _106 from "./slashing/v1beta1/slashing.js";
import * as _107 from "./slashing/v1beta1/tx.js";
import * as _108 from "./staking/module/v1/module.js";
import * as _109 from "./staking/v1beta1/authz.js";
import * as _110 from "./staking/v1beta1/genesis.js";
import * as _111 from "./staking/v1beta1/query.js";
import * as _112 from "./staking/v1beta1/staking.js";
import * as _113 from "./staking/v1beta1/tx.js";
import * as _114 from "./store/internal/kv/v1beta1/kv.js";
import * as _115 from "./store/snapshots/v1/snapshot.js";
import * as _116 from "./store/streaming/abci/grpc.js";
import * as _117 from "./store/v1beta1/commit_info.js";
import * as _118 from "./store/v1beta1/listening.js";
import * as _119 from "./tx/config/v1/config.js";
import * as _120 from "./tx/signing/v1beta1/signing.js";
import * as _121 from "./tx/v1beta1/service.js";
import * as _122 from "./tx/v1beta1/tx.js";
import * as _123 from "./upgrade/module/v1/module.js";
import * as _124 from "./upgrade/v1beta1/query.js";
import * as _125 from "./upgrade/v1beta1/tx.js";
import * as _126 from "./upgrade/v1beta1/upgrade.js";
import * as _127 from "./vesting/module/v1/module.js";
import * as _128 from "./vesting/v1beta1/tx.js";
import * as _129 from "./vesting/v1beta1/vesting.js";
import * as _130 from "./ics23/v1/proofs.js";
import * as _200 from "./auth/v1beta1/tx.amino.js";
import * as _201 from "./authz/v1beta1/tx.amino.js";
import * as _202 from "./bank/v1beta1/tx.amino.js";
import * as _203 from "./circuit/v1/tx.amino.js";
import * as _204 from "./consensus/v1/tx.amino.js";
import * as _205 from "./distribution/v1beta1/tx.amino.js";
import * as _206 from "./feegrant/v1beta1/tx.amino.js";
import * as _207 from "./gov/v1/tx.amino.js";
import * as _208 from "./gov/v1beta1/tx.amino.js";
import * as _209 from "./group/v1/tx.amino.js";
import * as _210 from "./mint/v1beta1/tx.amino.js";
import * as _211 from "./protocolpool/v1/tx.amino.js";
import * as _212 from "./slashing/v1beta1/tx.amino.js";
import * as _213 from "./staking/v1beta1/tx.amino.js";
import * as _214 from "./upgrade/v1beta1/tx.amino.js";
import * as _215 from "./vesting/v1beta1/tx.amino.js";
import * as _216 from "./auth/v1beta1/tx.registry.js";
import * as _217 from "./authz/v1beta1/tx.registry.js";
import * as _218 from "./bank/v1beta1/tx.registry.js";
import * as _219 from "./circuit/v1/tx.registry.js";
import * as _220 from "./consensus/v1/tx.registry.js";
import * as _221 from "./distribution/v1beta1/tx.registry.js";
import * as _222 from "./feegrant/v1beta1/tx.registry.js";
import * as _223 from "./gov/v1/tx.registry.js";
import * as _224 from "./gov/v1beta1/tx.registry.js";
import * as _225 from "./group/v1/tx.registry.js";
import * as _226 from "./mint/v1beta1/tx.registry.js";
import * as _227 from "./protocolpool/v1/tx.registry.js";
import * as _228 from "./slashing/v1beta1/tx.registry.js";
import * as _229 from "./staking/v1beta1/tx.registry.js";
import * as _230 from "./upgrade/v1beta1/tx.registry.js";
import * as _231 from "./vesting/v1beta1/tx.registry.js";
import * as _232 from "./auth/v1beta1/query.rpc.Query.js";
import * as _233 from "./authz/v1beta1/query.rpc.Query.js";
import * as _234 from "./bank/v1beta1/query.rpc.Query.js";
import * as _235 from "./base/node/v1beta1/query.rpc.Service.js";
import * as _236 from "./base/tendermint/v1beta1/query.rpc.Service.js";
import * as _237 from "./circuit/v1/query.rpc.Query.js";
import * as _238 from "./consensus/v1/query.rpc.Query.js";
import * as _239 from "./distribution/v1beta1/query.rpc.Query.js";
import * as _240 from "./epochs/v1beta1/query.rpc.Query.js";
import * as _241 from "./feegrant/v1beta1/query.rpc.Query.js";
import * as _242 from "./gov/v1/query.rpc.Query.js";
import * as _243 from "./gov/v1beta1/query.rpc.Query.js";
import * as _244 from "./group/v1/query.rpc.Query.js";
import * as _245 from "./mint/v1beta1/query.rpc.Query.js";
import * as _246 from "./params/v1beta1/query.rpc.Query.js";
import * as _247 from "./protocolpool/v1/query.rpc.Query.js";
import * as _248 from "./slashing/v1beta1/query.rpc.Query.js";
import * as _249 from "./staking/v1beta1/query.rpc.Query.js";
import * as _250 from "./tx/v1beta1/service.rpc.Service.js";
import * as _251 from "./upgrade/v1beta1/query.rpc.Query.js";
import * as _252 from "./auth/v1beta1/tx.rpc.msg.js";
import * as _253 from "./authz/v1beta1/tx.rpc.msg.js";
import * as _254 from "./bank/v1beta1/tx.rpc.msg.js";
import * as _255 from "./circuit/v1/tx.rpc.msg.js";
import * as _256 from "./consensus/v1/tx.rpc.msg.js";
import * as _257 from "./distribution/v1beta1/tx.rpc.msg.js";
import * as _258 from "./feegrant/v1beta1/tx.rpc.msg.js";
import * as _259 from "./gov/v1/tx.rpc.msg.js";
import * as _260 from "./gov/v1beta1/tx.rpc.msg.js";
import * as _261 from "./group/v1/tx.rpc.msg.js";
import * as _262 from "./mint/v1beta1/tx.rpc.msg.js";
import * as _263 from "./protocolpool/v1/tx.rpc.msg.js";
import * as _264 from "./slashing/v1beta1/tx.rpc.msg.js";
import * as _265 from "./staking/v1beta1/tx.rpc.msg.js";
import * as _266 from "./upgrade/v1beta1/tx.rpc.msg.js";
import * as _267 from "./vesting/v1beta1/tx.rpc.msg.js";
import * as _310 from "./rpc.query.js";
import * as _311 from "./rpc.tx.js";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._16
      };
    }
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._17
      };
    }
    export const v1beta1 = {
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._200,
      ..._216,
      ..._232,
      ..._252
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._22
      };
    }
    export const v1beta1 = {
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._201,
      ..._217,
      ..._233,
      ..._253
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._28
      };
    }
    export const v1beta1 = {
      ..._29,
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._202,
      ..._218,
      ..._234,
      ..._254
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._34
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._35,
        ..._235
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._36
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._37
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._38,
        ..._39,
        ..._236
      };
    }
    export const v1beta1 = {
      ..._40
    };
  }
  export namespace circuit {
    export namespace module {
      export const v1 = {
        ..._41
      };
    }
    export const v1 = {
      ..._42,
      ..._43,
      ..._44,
      ..._203,
      ..._219,
      ..._237,
      ..._255
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._45
      };
    }
    export const v1 = {
      ..._46,
      ..._47,
      ..._204,
      ..._220,
      ..._238,
      ..._256
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._48
      };
    }
  }
  export namespace crypto {
    export const ed25519 = {
      ..._49
    };
    export namespace hd {
      export const v1 = {
        ..._50
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._51
      };
    }
    export const multisig = {
      ..._52
    };
    export const secp256k1 = {
      ..._53
    };
    export const secp256r1 = {
      ..._54
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._55
      };
    }
    export const v1beta1 = {
      ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._205,
      ..._221,
      ..._239,
      ..._257
    };
  }
  export namespace epochs {
    export namespace module {
      export const v1 = {
        ..._60
      };
    }
    export const v1beta1 = {
      ..._61,
      ..._62,
      ..._63,
      ..._240
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._64
      };
    }
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._65
      };
    }
    export const v1beta1 = {
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._206,
      ..._222,
      ..._241,
      ..._258
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._70
      };
    }
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._71
      };
    }
    export const v1 = {
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._207,
      ..._223,
      ..._242,
      ..._259
    };
    export const v1beta1 = {
      ..._76,
      ..._77,
      ..._78,
      ..._79,
      ..._208,
      ..._224,
      ..._243,
      ..._260
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._80
      };
    }
    export const v1 = {
      ..._81,
      ..._82,
      ..._83,
      ..._84,
      ..._85,
      ..._209,
      ..._225,
      ..._244,
      ..._261
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._86
      };
    }
    export const v1beta1 = {
      ..._87,
      ..._88,
      ..._89,
      ..._90,
      ..._210,
      ..._226,
      ..._245,
      ..._262
    };
  }
  export namespace msg {
    export namespace textual {
      export const v1 = {
        ..._91
      };
    }
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._92
      };
    }
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._93
      };
    }
    export const v1beta1 = {
      ..._94,
      ..._95,
      ..._246
    };
  }
  export namespace protocolpool {
    export namespace module {
      export const v1 = {
        ..._96
      };
    }
    export const v1 = {
      ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._211,
      ..._227,
      ..._247,
      ..._263
    };
  }
  export namespace query {
    export const v1 = {
      ..._101
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._102
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._103
      };
    }
    export const v1beta1 = {
      ..._104,
      ..._105,
      ..._106,
      ..._107,
      ..._212,
      ..._228,
      ..._248,
      ..._264
    };
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._108
      };
    }
    export const v1beta1 = {
      ..._109,
      ..._110,
      ..._111,
      ..._112,
      ..._113,
      ..._213,
      ..._229,
      ..._249,
      ..._265
    };
  }
  export namespace store {
    export namespace internal {
      export namespace kv {
        export const v1beta1 = {
          ..._114
        };
      }
    }
    export namespace snapshots {
      export const v1 = {
        ..._115
      };
    }
    export namespace streaming {
      export const abci = {
        ..._116
      };
    }
    export const v1beta1 = {
      ..._117,
      ..._118
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._119
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._120
      };
    }
    export const v1beta1 = {
      ..._121,
      ..._122,
      ..._250
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._123
      };
    }
    export const v1beta1 = {
      ..._124,
      ..._125,
      ..._126,
      ..._214,
      ..._230,
      ..._251,
      ..._266
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._127
      };
    }
    export const v1beta1 = {
      ..._128,
      ..._129,
      ..._215,
      ..._231,
      ..._267
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._130
    };
  }
  export const ClientFactory = {
    ..._310,
    ..._311
  };
}