//@ts-nocheck
import { MsgMintPhoton, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/atomone.photon.v1.MsgMintPhoton": {
    aminoType: "atomone/photon/v1/MsgMintPhoton",
    toAmino: MsgMintPhoton.toAmino,
    fromAmino: MsgMintPhoton.fromAmino
  },
  "/atomone.photon.v1.MsgUpdateParams": {
    aminoType: "atomone/x/photon/v1/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};