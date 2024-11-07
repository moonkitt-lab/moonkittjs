import * as _118 from "./abci/types";
import * as _119 from "./crypto/keys";
import * as _120 from "./crypto/proof";
import * as _121 from "./libs/bits/types";
import * as _122 from "./p2p/types";
import * as _123 from "./types/block";
import * as _124 from "./types/evidence";
import * as _125 from "./types/params";
import * as _126 from "./types/types";
import * as _127 from "./types/validator";
import * as _128 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._118
  };
  export const crypto = {
    ..._119,
    ..._120
  };
  export namespace libs {
    export const bits = {
      ..._121
    };
  }
  export const p2p = {
    ..._122
  };
  export const types = {
    ..._123,
    ..._124,
    ..._125,
    ..._126,
    ..._127
  };
  export const version = {
    ..._128
  };
}