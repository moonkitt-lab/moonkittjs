import * as _131 from "./abci/types.js";
import * as _132 from "./crypto/keys.js";
import * as _133 from "./crypto/proof.js";
import * as _134 from "./libs/bits/types.js";
import * as _135 from "./p2p/types.js";
import * as _136 from "./types/block.js";
import * as _137 from "./types/evidence.js";
import * as _138 from "./types/params.js";
import * as _139 from "./types/types.js";
import * as _140 from "./types/validator.js";
import * as _141 from "./version/types.js";
export namespace tendermint {
  export const abci = {
    ..._131
  };
  export const crypto = {
    ..._132,
    ..._133
  };
  export namespace libs {
    export const bits = {
      ..._134
    };
  }
  export const p2p = {
    ..._135
  };
  export const types = {
    ..._136,
    ..._137,
    ..._138,
    ..._139,
    ..._140
  };
  export const version = {
    ..._141
  };
}