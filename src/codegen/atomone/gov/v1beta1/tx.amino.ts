//@ts-nocheck
import { MsgSubmitProposal, MsgVote, MsgVoteWeighted, MsgDeposit } from "./tx";
export const AminoConverter = {
  "/atomone.gov.v1beta1.MsgSubmitProposal": {
    aminoType: "atomone/MsgSubmitProposal",
    toAmino: MsgSubmitProposal.toAmino,
    fromAmino: MsgSubmitProposal.fromAmino
  },
  "/atomone.gov.v1beta1.MsgVote": {
    aminoType: "atomone/MsgVote",
    toAmino: MsgVote.toAmino,
    fromAmino: MsgVote.fromAmino
  },
  "/atomone.gov.v1beta1.MsgVoteWeighted": {
    aminoType: "atomone/MsgVoteWeighted",
    toAmino: MsgVoteWeighted.toAmino,
    fromAmino: MsgVoteWeighted.fromAmino
  },
  "/atomone.gov.v1beta1.MsgDeposit": {
    aminoType: "atomone/MsgDeposit",
    toAmino: MsgDeposit.toAmino,
    fromAmino: MsgDeposit.fromAmino
  }
};