//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSubmitProposal, MsgExecLegacyContent, MsgVote, MsgVoteWeighted, MsgDeposit, MsgUpdateParams, MsgProposeLaw, MsgProposeConstitutionAmendment } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/atomone.gov.v1.MsgSubmitProposal", MsgSubmitProposal], ["/atomone.gov.v1.MsgExecLegacyContent", MsgExecLegacyContent], ["/atomone.gov.v1.MsgVote", MsgVote], ["/atomone.gov.v1.MsgVoteWeighted", MsgVoteWeighted], ["/atomone.gov.v1.MsgDeposit", MsgDeposit], ["/atomone.gov.v1.MsgUpdateParams", MsgUpdateParams], ["/atomone.gov.v1.MsgProposeLaw", MsgProposeLaw], ["/atomone.gov.v1.MsgProposeConstitutionAmendment", MsgProposeConstitutionAmendment]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/atomone.gov.v1.MsgSubmitProposal",
        value: MsgSubmitProposal.encode(value).finish()
      };
    },
    execLegacyContent(value: MsgExecLegacyContent) {
      return {
        typeUrl: "/atomone.gov.v1.MsgExecLegacyContent",
        value: MsgExecLegacyContent.encode(value).finish()
      };
    },
    vote(value: MsgVote) {
      return {
        typeUrl: "/atomone.gov.v1.MsgVote",
        value: MsgVote.encode(value).finish()
      };
    },
    voteWeighted(value: MsgVoteWeighted) {
      return {
        typeUrl: "/atomone.gov.v1.MsgVoteWeighted",
        value: MsgVoteWeighted.encode(value).finish()
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/atomone.gov.v1.MsgDeposit",
        value: MsgDeposit.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/atomone.gov.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    proposeLaw(value: MsgProposeLaw) {
      return {
        typeUrl: "/atomone.gov.v1.MsgProposeLaw",
        value: MsgProposeLaw.encode(value).finish()
      };
    },
    proposeConstitutionAmendment(value: MsgProposeConstitutionAmendment) {
      return {
        typeUrl: "/atomone.gov.v1.MsgProposeConstitutionAmendment",
        value: MsgProposeConstitutionAmendment.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/atomone.gov.v1.MsgSubmitProposal",
        value
      };
    },
    execLegacyContent(value: MsgExecLegacyContent) {
      return {
        typeUrl: "/atomone.gov.v1.MsgExecLegacyContent",
        value
      };
    },
    vote(value: MsgVote) {
      return {
        typeUrl: "/atomone.gov.v1.MsgVote",
        value
      };
    },
    voteWeighted(value: MsgVoteWeighted) {
      return {
        typeUrl: "/atomone.gov.v1.MsgVoteWeighted",
        value
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/atomone.gov.v1.MsgDeposit",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/atomone.gov.v1.MsgUpdateParams",
        value
      };
    },
    proposeLaw(value: MsgProposeLaw) {
      return {
        typeUrl: "/atomone.gov.v1.MsgProposeLaw",
        value
      };
    },
    proposeConstitutionAmendment(value: MsgProposeConstitutionAmendment) {
      return {
        typeUrl: "/atomone.gov.v1.MsgProposeConstitutionAmendment",
        value
      };
    }
  },
  fromPartial: {
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/atomone.gov.v1.MsgSubmitProposal",
        value: MsgSubmitProposal.fromPartial(value)
      };
    },
    execLegacyContent(value: MsgExecLegacyContent) {
      return {
        typeUrl: "/atomone.gov.v1.MsgExecLegacyContent",
        value: MsgExecLegacyContent.fromPartial(value)
      };
    },
    vote(value: MsgVote) {
      return {
        typeUrl: "/atomone.gov.v1.MsgVote",
        value: MsgVote.fromPartial(value)
      };
    },
    voteWeighted(value: MsgVoteWeighted) {
      return {
        typeUrl: "/atomone.gov.v1.MsgVoteWeighted",
        value: MsgVoteWeighted.fromPartial(value)
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/atomone.gov.v1.MsgDeposit",
        value: MsgDeposit.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/atomone.gov.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    proposeLaw(value: MsgProposeLaw) {
      return {
        typeUrl: "/atomone.gov.v1.MsgProposeLaw",
        value: MsgProposeLaw.fromPartial(value)
      };
    },
    proposeConstitutionAmendment(value: MsgProposeConstitutionAmendment) {
      return {
        typeUrl: "/atomone.gov.v1.MsgProposeConstitutionAmendment",
        value: MsgProposeConstitutionAmendment.fromPartial(value)
      };
    }
  }
};