import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgSubmitProposal, MsgSubmitProposalResponse, MsgExecLegacyContent, MsgExecLegacyContentResponse, MsgVote, MsgVoteResponse, MsgVoteWeighted, MsgVoteWeightedResponse, MsgDeposit, MsgDepositResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgProposeLaw, MsgProposeLawResponse, MsgProposeConstitutionAmendment, MsgProposeConstitutionAmendmentResponse } from "./tx";
/** Msg defines the gov Msg service. */
export interface Msg {
  /** SubmitProposal defines a method to create new proposal given the messages. */
  submitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse>;
  /**
   * ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal
   * to execute a legacy content-based proposal.
   */
  execLegacyContent(request: MsgExecLegacyContent): Promise<MsgExecLegacyContentResponse>;
  /** Vote defines a method to add a vote on a specific proposal. */
  vote(request: MsgVote): Promise<MsgVoteResponse>;
  /**
   * VoteWeighted defines a method to add a weighted vote on a specific
   * proposal.
   */
  voteWeighted(request: MsgVoteWeighted): Promise<MsgVoteWeightedResponse>;
  /** Deposit defines a method to add deposit on a specific proposal. */
  deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/gov module
   * parameters. The authority is defined in the keeper.
   * 
   * Since: cosmos-sdk 0.47
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /**
   * ProposeLaw defines a governance operation for proposing a new law.
   * The authority is defined in the keeper.
   */
  proposeLaw(request: MsgProposeLaw): Promise<MsgProposeLawResponse>;
  /**
   * ProposeConstitutionAmendment defines a governance operation for proposing a
   * new constitution amendment. The authority is defined in the keeper.
   */
  proposeConstitutionAmendment(request: MsgProposeConstitutionAmendment): Promise<MsgProposeConstitutionAmendmentResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.submitProposal = this.submitProposal.bind(this);
    this.execLegacyContent = this.execLegacyContent.bind(this);
    this.vote = this.vote.bind(this);
    this.voteWeighted = this.voteWeighted.bind(this);
    this.deposit = this.deposit.bind(this);
    this.updateParams = this.updateParams.bind(this);
    this.proposeLaw = this.proposeLaw.bind(this);
    this.proposeConstitutionAmendment = this.proposeConstitutionAmendment.bind(this);
  }
  submitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse> {
    const data = MsgSubmitProposal.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Msg", "SubmitProposal", data);
    return promise.then(data => MsgSubmitProposalResponse.decode(new BinaryReader(data)));
  }
  execLegacyContent(request: MsgExecLegacyContent): Promise<MsgExecLegacyContentResponse> {
    const data = MsgExecLegacyContent.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Msg", "ExecLegacyContent", data);
    return promise.then(data => MsgExecLegacyContentResponse.decode(new BinaryReader(data)));
  }
  vote(request: MsgVote): Promise<MsgVoteResponse> {
    const data = MsgVote.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Msg", "Vote", data);
    return promise.then(data => MsgVoteResponse.decode(new BinaryReader(data)));
  }
  voteWeighted(request: MsgVoteWeighted): Promise<MsgVoteWeightedResponse> {
    const data = MsgVoteWeighted.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Msg", "VoteWeighted", data);
    return promise.then(data => MsgVoteWeightedResponse.decode(new BinaryReader(data)));
  }
  deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Msg", "Deposit", data);
    return promise.then(data => MsgDepositResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  proposeLaw(request: MsgProposeLaw): Promise<MsgProposeLawResponse> {
    const data = MsgProposeLaw.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Msg", "ProposeLaw", data);
    return promise.then(data => MsgProposeLawResponse.decode(new BinaryReader(data)));
  }
  proposeConstitutionAmendment(request: MsgProposeConstitutionAmendment): Promise<MsgProposeConstitutionAmendmentResponse> {
    const data = MsgProposeConstitutionAmendment.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Msg", "ProposeConstitutionAmendment", data);
    return promise.then(data => MsgProposeConstitutionAmendmentResponse.decode(new BinaryReader(data)));
  }
}