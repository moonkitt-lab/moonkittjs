import * as _38 from "./app/runtime/v1alpha1/module";
import * as _39 from "./auth/module/v1/module";
import * as _40 from "./auth/v1beta1/auth";
import * as _41 from "./auth/v1beta1/genesis";
import * as _42 from "./auth/v1beta1/query";
import * as _43 from "./auth/v1beta1/tx";
import * as _44 from "./authz/module/v1/module";
import * as _45 from "./authz/v1beta1/authz";
import * as _46 from "./authz/v1beta1/event";
import * as _47 from "./authz/v1beta1/genesis";
import * as _48 from "./authz/v1beta1/query";
import * as _49 from "./authz/v1beta1/tx";
import * as _50 from "./bank/module/v1/module";
import * as _51 from "./bank/v1beta1/authz";
import * as _52 from "./bank/v1beta1/bank";
import * as _53 from "./bank/v1beta1/genesis";
import * as _54 from "./bank/v1beta1/query";
import * as _55 from "./bank/v1beta1/tx";
import * as _56 from "./base/abci/v1beta1/abci";
import * as _57 from "./base/node/v1beta1/query";
import * as _58 from "./base/query/v1beta1/pagination";
import * as _59 from "./base/reflection/v2alpha1/reflection";
import * as _60 from "./base/v1beta1/coin";
import * as _61 from "./capability/module/v1/module";
import * as _62 from "./consensus/module/v1/module";
import * as _63 from "./consensus/v1/query";
import * as _64 from "./consensus/v1/tx";
import * as _65 from "./crisis/module/v1/module";
import * as _66 from "./crypto/ed25519/keys";
import * as _67 from "./crypto/hd/v1/hd";
import * as _68 from "./crypto/keyring/v1/record";
import * as _69 from "./crypto/multisig/keys";
import * as _70 from "./crypto/secp256k1/keys";
import * as _71 from "./crypto/secp256r1/keys";
import * as _72 from "./distribution/module/v1/module";
import * as _73 from "./distribution/v1beta1/distribution";
import * as _74 from "./distribution/v1beta1/genesis";
import * as _75 from "./distribution/v1beta1/query";
import * as _76 from "./distribution/v1beta1/tx";
import * as _77 from "./evidence/module/v1/module";
import * as _78 from "./feegrant/module/v1/module";
import * as _79 from "./feegrant/v1beta1/feegrant";
import * as _80 from "./feegrant/v1beta1/genesis";
import * as _81 from "./feegrant/v1beta1/query";
import * as _82 from "./feegrant/v1beta1/tx";
import * as _83 from "./genutil/module/v1/module";
import * as _84 from "./gov/module/v1/module";
import * as _85 from "./gov/v1/genesis";
import * as _86 from "./gov/v1/gov";
import * as _87 from "./gov/v1/query";
import * as _88 from "./gov/v1/tx";
import * as _89 from "./gov/v1beta1/genesis";
import * as _90 from "./gov/v1beta1/gov";
import * as _91 from "./gov/v1beta1/query";
import * as _92 from "./gov/v1beta1/tx";
import * as _93 from "./group/module/v1/module";
import * as _94 from "./group/v1/events";
import * as _95 from "./group/v1/genesis";
import * as _96 from "./group/v1/query";
import * as _97 from "./group/v1/tx";
import * as _98 from "./group/v1/types";
import * as _99 from "./mint/module/v1/module";
import * as _100 from "./mint/v1beta1/genesis";
import * as _101 from "./mint/v1beta1/mint";
import * as _102 from "./mint/v1beta1/query";
import * as _103 from "./mint/v1beta1/tx";
import * as _104 from "./nft/module/v1/module";
import * as _105 from "./orm/module/v1alpha1/module";
import * as _106 from "./orm/query/v1alpha1/query";
import * as _107 from "./params/module/v1/module";
import * as _108 from "./params/v1beta1/params";
import * as _109 from "./params/v1beta1/query";
import * as _110 from "./query/v1/query";
import * as _111 from "./reflection/v1/reflection";
import * as _112 from "./slashing/module/v1/module";
import * as _113 from "./staking/module/v1/module";
import * as _114 from "./staking/v1beta1/authz";
import * as _115 from "./staking/v1beta1/genesis";
import * as _116 from "./staking/v1beta1/query";
import * as _117 from "./staking/v1beta1/staking";
import * as _118 from "./staking/v1beta1/tx";
import * as _119 from "./tx/config/v1/config";
import * as _120 from "./tx/signing/v1beta1/signing";
import * as _121 from "./tx/v1beta1/service";
import * as _122 from "./tx/v1beta1/tx";
import * as _123 from "./upgrade/module/v1/module";
import * as _124 from "./upgrade/v1beta1/query";
import * as _125 from "./upgrade/v1beta1/tx";
import * as _126 from "./upgrade/v1beta1/upgrade";
import * as _127 from "./vesting/module/v1/module";
import * as _128 from "./vesting/v1beta1/tx";
import * as _129 from "./vesting/v1beta1/vesting";
import * as _166 from "./auth/v1beta1/tx.amino";
import * as _167 from "./authz/v1beta1/tx.amino";
import * as _168 from "./bank/v1beta1/tx.amino";
import * as _169 from "./consensus/v1/tx.amino";
import * as _170 from "./distribution/v1beta1/tx.amino";
import * as _171 from "./feegrant/v1beta1/tx.amino";
import * as _172 from "./gov/v1/tx.amino";
import * as _173 from "./gov/v1beta1/tx.amino";
import * as _174 from "./group/v1/tx.amino";
import * as _175 from "./mint/v1beta1/tx.amino";
import * as _176 from "./staking/v1beta1/tx.amino";
import * as _177 from "./upgrade/v1beta1/tx.amino";
import * as _178 from "./vesting/v1beta1/tx.amino";
import * as _179 from "./auth/v1beta1/tx.registry";
import * as _180 from "./authz/v1beta1/tx.registry";
import * as _181 from "./bank/v1beta1/tx.registry";
import * as _182 from "./consensus/v1/tx.registry";
import * as _183 from "./distribution/v1beta1/tx.registry";
import * as _184 from "./feegrant/v1beta1/tx.registry";
import * as _185 from "./gov/v1/tx.registry";
import * as _186 from "./gov/v1beta1/tx.registry";
import * as _187 from "./group/v1/tx.registry";
import * as _188 from "./mint/v1beta1/tx.registry";
import * as _189 from "./staking/v1beta1/tx.registry";
import * as _190 from "./upgrade/v1beta1/tx.registry";
import * as _191 from "./vesting/v1beta1/tx.registry";
import * as _192 from "./auth/v1beta1/query.lcd";
import * as _193 from "./authz/v1beta1/query.lcd";
import * as _194 from "./bank/v1beta1/query.lcd";
import * as _195 from "./base/node/v1beta1/query.lcd";
import * as _196 from "./consensus/v1/query.lcd";
import * as _197 from "./distribution/v1beta1/query.lcd";
import * as _198 from "./feegrant/v1beta1/query.lcd";
import * as _199 from "./gov/v1/query.lcd";
import * as _200 from "./gov/v1beta1/query.lcd";
import * as _201 from "./group/v1/query.lcd";
import * as _202 from "./mint/v1beta1/query.lcd";
import * as _203 from "./params/v1beta1/query.lcd";
import * as _204 from "./staking/v1beta1/query.lcd";
import * as _205 from "./tx/v1beta1/service.lcd";
import * as _206 from "./upgrade/v1beta1/query.lcd";
import * as _207 from "./auth/v1beta1/query.rpc.Query";
import * as _208 from "./authz/v1beta1/query.rpc.Query";
import * as _209 from "./bank/v1beta1/query.rpc.Query";
import * as _210 from "./base/node/v1beta1/query.rpc.Service";
import * as _211 from "./consensus/v1/query.rpc.Query";
import * as _212 from "./distribution/v1beta1/query.rpc.Query";
import * as _213 from "./feegrant/v1beta1/query.rpc.Query";
import * as _214 from "./gov/v1/query.rpc.Query";
import * as _215 from "./gov/v1beta1/query.rpc.Query";
import * as _216 from "./group/v1/query.rpc.Query";
import * as _217 from "./mint/v1beta1/query.rpc.Query";
import * as _218 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _219 from "./params/v1beta1/query.rpc.Query";
import * as _220 from "./staking/v1beta1/query.rpc.Query";
import * as _221 from "./tx/v1beta1/service.rpc.Service";
import * as _222 from "./upgrade/v1beta1/query.rpc.Query";
import * as _223 from "./auth/v1beta1/tx.rpc.msg";
import * as _224 from "./authz/v1beta1/tx.rpc.msg";
import * as _225 from "./bank/v1beta1/tx.rpc.msg";
import * as _226 from "./consensus/v1/tx.rpc.msg";
import * as _227 from "./distribution/v1beta1/tx.rpc.msg";
import * as _228 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _229 from "./gov/v1/tx.rpc.msg";
import * as _230 from "./gov/v1beta1/tx.rpc.msg";
import * as _231 from "./group/v1/tx.rpc.msg";
import * as _232 from "./mint/v1beta1/tx.rpc.msg";
import * as _233 from "./staking/v1beta1/tx.rpc.msg";
import * as _234 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _235 from "./vesting/v1beta1/tx.rpc.msg";
import * as _242 from "./lcd";
import * as _243 from "./rpc.query";
import * as _244 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._38
      };
    }
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._39
      };
    }
    export const v1beta1 = {
      ..._40,
      ..._41,
      ..._42,
      ..._43,
      ..._166,
      ..._179,
      ..._192,
      ..._207,
      ..._223
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._44
      };
    }
    export const v1beta1 = {
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._167,
      ..._180,
      ..._193,
      ..._208,
      ..._224
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._50
      };
    }
    export const v1beta1 = {
      ..._51,
      ..._52,
      ..._53,
      ..._54,
      ..._55,
      ..._168,
      ..._181,
      ..._194,
      ..._209,
      ..._225
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._56
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._57,
        ..._195,
        ..._210
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._58
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._59
      };
    }
    export const v1beta1 = {
      ..._60
    };
  }
  export namespace capability {
    export namespace module {
      export const v1 = {
        ..._61
      };
    }
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._62
      };
    }
    export const v1 = {
      ..._63,
      ..._64,
      ..._169,
      ..._182,
      ..._196,
      ..._211,
      ..._226
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._65
      };
    }
  }
  export namespace crypto {
    export const ed25519 = {
      ..._66
    };
    export namespace hd {
      export const v1 = {
        ..._67
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._68
      };
    }
    export const multisig = {
      ..._69
    };
    export const secp256k1 = {
      ..._70
    };
    export const secp256r1 = {
      ..._71
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._72
      };
    }
    export const v1beta1 = {
      ..._73,
      ..._74,
      ..._75,
      ..._76,
      ..._170,
      ..._183,
      ..._197,
      ..._212,
      ..._227
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._77
      };
    }
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._78
      };
    }
    export const v1beta1 = {
      ..._79,
      ..._80,
      ..._81,
      ..._82,
      ..._171,
      ..._184,
      ..._198,
      ..._213,
      ..._228
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._83
      };
    }
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._84
      };
    }
    export const v1 = {
      ..._85,
      ..._86,
      ..._87,
      ..._88,
      ..._172,
      ..._185,
      ..._199,
      ..._214,
      ..._229
    };
    export const v1beta1 = {
      ..._89,
      ..._90,
      ..._91,
      ..._92,
      ..._173,
      ..._186,
      ..._200,
      ..._215,
      ..._230
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._93
      };
    }
    export const v1 = {
      ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._174,
      ..._187,
      ..._201,
      ..._216,
      ..._231
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._99
      };
    }
    export const v1beta1 = {
      ..._100,
      ..._101,
      ..._102,
      ..._103,
      ..._175,
      ..._188,
      ..._202,
      ..._217,
      ..._232
    };
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._104
      };
    }
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._105
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._106,
        ..._218
      };
    }
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._107
      };
    }
    export const v1beta1 = {
      ..._108,
      ..._109,
      ..._203,
      ..._219
    };
  }
  export namespace query {
    export const v1 = {
      ..._110
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._111
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._112
      };
    }
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._113
      };
    }
    export const v1beta1 = {
      ..._114,
      ..._115,
      ..._116,
      ..._117,
      ..._118,
      ..._176,
      ..._189,
      ..._204,
      ..._220,
      ..._233
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
      ..._205,
      ..._221
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
      ..._177,
      ..._190,
      ..._206,
      ..._222,
      ..._234
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
      ..._178,
      ..._191,
      ..._235
    };
  }
  export const ClientFactory = {
    ..._242,
    ..._243,
    ..._244
  };
}