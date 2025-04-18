import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { isSet, toTimestamp, fromTimestamp } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** VoteOption enumerates the valid vote options for a given governance proposal. */
export enum VoteOption {
  /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
  VOTE_OPTION_UNSPECIFIED = 0,
  /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
  VOTE_OPTION_YES = 1,
  /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
  VOTE_OPTION_ABSTAIN = 2,
  /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
  VOTE_OPTION_NO = 3,
  UNRECOGNIZED = -1,
}
export const VoteOptionSDKType = VoteOption;
export const VoteOptionAmino = VoteOption;
export function voteOptionFromJSON(object: any): VoteOption {
  switch (object) {
    case 0:
    case "VOTE_OPTION_UNSPECIFIED":
      return VoteOption.VOTE_OPTION_UNSPECIFIED;
    case 1:
    case "VOTE_OPTION_YES":
      return VoteOption.VOTE_OPTION_YES;
    case 2:
    case "VOTE_OPTION_ABSTAIN":
      return VoteOption.VOTE_OPTION_ABSTAIN;
    case 3:
    case "VOTE_OPTION_NO":
      return VoteOption.VOTE_OPTION_NO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteOption.UNRECOGNIZED;
  }
}
export function voteOptionToJSON(object: VoteOption): string {
  switch (object) {
    case VoteOption.VOTE_OPTION_UNSPECIFIED:
      return "VOTE_OPTION_UNSPECIFIED";
    case VoteOption.VOTE_OPTION_YES:
      return "VOTE_OPTION_YES";
    case VoteOption.VOTE_OPTION_ABSTAIN:
      return "VOTE_OPTION_ABSTAIN";
    case VoteOption.VOTE_OPTION_NO:
      return "VOTE_OPTION_NO";
    case VoteOption.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ProposalStatus enumerates the valid statuses of a proposal. */
export enum ProposalStatus {
  /** PROPOSAL_STATUS_UNSPECIFIED - PROPOSAL_STATUS_UNSPECIFIED defines the default proposal status. */
  PROPOSAL_STATUS_UNSPECIFIED = 0,
  /**
   * PROPOSAL_STATUS_DEPOSIT_PERIOD - PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
   * period.
   */
  PROPOSAL_STATUS_DEPOSIT_PERIOD = 1,
  /**
   * PROPOSAL_STATUS_VOTING_PERIOD - PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
   * period.
   */
  PROPOSAL_STATUS_VOTING_PERIOD = 2,
  /**
   * PROPOSAL_STATUS_PASSED - PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
   * passed.
   */
  PROPOSAL_STATUS_PASSED = 3,
  /**
   * PROPOSAL_STATUS_REJECTED - PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
   * been rejected.
   */
  PROPOSAL_STATUS_REJECTED = 4,
  /**
   * PROPOSAL_STATUS_FAILED - PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
   * failed.
   */
  PROPOSAL_STATUS_FAILED = 5,
  UNRECOGNIZED = -1,
}
export const ProposalStatusSDKType = ProposalStatus;
export const ProposalStatusAmino = ProposalStatus;
export function proposalStatusFromJSON(object: any): ProposalStatus {
  switch (object) {
    case 0:
    case "PROPOSAL_STATUS_UNSPECIFIED":
      return ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;
    case 1:
    case "PROPOSAL_STATUS_DEPOSIT_PERIOD":
      return ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD;
    case 2:
    case "PROPOSAL_STATUS_VOTING_PERIOD":
      return ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD;
    case 3:
    case "PROPOSAL_STATUS_PASSED":
      return ProposalStatus.PROPOSAL_STATUS_PASSED;
    case 4:
    case "PROPOSAL_STATUS_REJECTED":
      return ProposalStatus.PROPOSAL_STATUS_REJECTED;
    case 5:
    case "PROPOSAL_STATUS_FAILED":
      return ProposalStatus.PROPOSAL_STATUS_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalStatus.UNRECOGNIZED;
  }
}
export function proposalStatusToJSON(object: ProposalStatus): string {
  switch (object) {
    case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
      return "PROPOSAL_STATUS_UNSPECIFIED";
    case ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD:
      return "PROPOSAL_STATUS_DEPOSIT_PERIOD";
    case ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD:
      return "PROPOSAL_STATUS_VOTING_PERIOD";
    case ProposalStatus.PROPOSAL_STATUS_PASSED:
      return "PROPOSAL_STATUS_PASSED";
    case ProposalStatus.PROPOSAL_STATUS_REJECTED:
      return "PROPOSAL_STATUS_REJECTED";
    case ProposalStatus.PROPOSAL_STATUS_FAILED:
      return "PROPOSAL_STATUS_FAILED";
    case ProposalStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** WeightedVoteOption defines a unit of vote for vote split. */
export interface WeightedVoteOption {
  /**
   * option defines the valid vote options, it must not contain duplicate vote
   * options.
   */
  option: VoteOption;
  /** weight is the vote weight associated with the vote option. */
  weight: string;
}
export interface WeightedVoteOptionProtoMsg {
  typeUrl: "/atomone.gov.v1.WeightedVoteOption";
  value: Uint8Array;
}
/** WeightedVoteOption defines a unit of vote for vote split. */
export interface WeightedVoteOptionAmino {
  /**
   * option defines the valid vote options, it must not contain duplicate vote
   * options.
   */
  option?: VoteOption;
  /** weight is the vote weight associated with the vote option. */
  weight?: string;
}
export interface WeightedVoteOptionAminoMsg {
  type: "/atomone.gov.v1.WeightedVoteOption";
  value: WeightedVoteOptionAmino;
}
/** WeightedVoteOption defines a unit of vote for vote split. */
export interface WeightedVoteOptionSDKType {
  option: VoteOption;
  weight: string;
}
/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */
export interface Deposit {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
  /** depositor defines the deposit addresses from the proposals. */
  depositor: string;
  /** amount to be deposited by depositor. */
  amount: Coin[];
}
export interface DepositProtoMsg {
  typeUrl: "/atomone.gov.v1.Deposit";
  value: Uint8Array;
}
/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */
export interface DepositAmino {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id?: string;
  /** depositor defines the deposit addresses from the proposals. */
  depositor?: string;
  /** amount to be deposited by depositor. */
  amount: CoinAmino[];
}
export interface DepositAminoMsg {
  type: "/atomone.gov.v1.Deposit";
  value: DepositAmino;
}
/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */
export interface DepositSDKType {
  proposal_id: bigint;
  depositor: string;
  amount: CoinSDKType[];
}
/** Proposal defines the core field members of a governance proposal. */
export interface Proposal {
  /** id defines the unique id of the proposal. */
  id: bigint;
  /** messages are the arbitrary messages to be executed if the proposal passes. */
  messages: Any[];
  /** status defines the proposal status. */
  status: ProposalStatus;
  /**
   * final_tally_result is the final tally result of the proposal. When
   * querying a proposal via gRPC, this field is not populated until the
   * proposal's voting period has ended.
   */
  finalTallyResult?: TallyResult;
  /** submit_time is the time of proposal submission. */
  submitTime?: Date;
  /** deposit_end_time is the end time for deposition. */
  depositEndTime?: Date;
  /** total_deposit is the total deposit on the proposal. */
  totalDeposit: Coin[];
  /** voting_start_time is the starting time to vote on a proposal. */
  votingStartTime?: Date;
  /** voting_end_time is the end time of voting on a proposal. */
  votingEndTime?: Date;
  /** metadata is any arbitrary metadata attached to the proposal. */
  metadata: string;
  /**
   * title is the title of the proposal
   * 
   * Since: cosmos-sdk 0.47
   */
  title: string;
  /**
   * summary is a short summary of the proposal
   * 
   * Since: cosmos-sdk 0.47
   */
  summary: string;
  /**
   * Proposer is the address of the proposal sumbitter
   * 
   * Since: cosmos-sdk 0.47
   */
  proposer: string;
}
export interface ProposalProtoMsg {
  typeUrl: "/atomone.gov.v1.Proposal";
  value: Uint8Array;
}
/** Proposal defines the core field members of a governance proposal. */
export interface ProposalAmino {
  /** id defines the unique id of the proposal. */
  id?: string;
  /** messages are the arbitrary messages to be executed if the proposal passes. */
  messages?: AnyAmino[];
  /** status defines the proposal status. */
  status?: ProposalStatus;
  /**
   * final_tally_result is the final tally result of the proposal. When
   * querying a proposal via gRPC, this field is not populated until the
   * proposal's voting period has ended.
   */
  final_tally_result?: TallyResultAmino;
  /** submit_time is the time of proposal submission. */
  submit_time?: string;
  /** deposit_end_time is the end time for deposition. */
  deposit_end_time?: string;
  /** total_deposit is the total deposit on the proposal. */
  total_deposit: CoinAmino[];
  /** voting_start_time is the starting time to vote on a proposal. */
  voting_start_time?: string;
  /** voting_end_time is the end time of voting on a proposal. */
  voting_end_time?: string;
  /** metadata is any arbitrary metadata attached to the proposal. */
  metadata?: string;
  /**
   * title is the title of the proposal
   * 
   * Since: cosmos-sdk 0.47
   */
  title?: string;
  /**
   * summary is a short summary of the proposal
   * 
   * Since: cosmos-sdk 0.47
   */
  summary?: string;
  /**
   * Proposer is the address of the proposal sumbitter
   * 
   * Since: cosmos-sdk 0.47
   */
  proposer?: string;
}
export interface ProposalAminoMsg {
  type: "/atomone.gov.v1.Proposal";
  value: ProposalAmino;
}
/** Proposal defines the core field members of a governance proposal. */
export interface ProposalSDKType {
  id: bigint;
  messages: AnySDKType[];
  status: ProposalStatus;
  final_tally_result?: TallyResultSDKType;
  submit_time?: Date;
  deposit_end_time?: Date;
  total_deposit: CoinSDKType[];
  voting_start_time?: Date;
  voting_end_time?: Date;
  metadata: string;
  title: string;
  summary: string;
  proposer: string;
}
/** TallyResult defines a standard tally for a governance proposal. */
export interface TallyResult {
  /** yes_count is the number of yes votes on a proposal. */
  yesCount: string;
  /** abstain_count is the number of abstain votes on a proposal. */
  abstainCount: string;
  /** no_count is the number of no votes on a proposal. */
  noCount: string;
}
export interface TallyResultProtoMsg {
  typeUrl: "/atomone.gov.v1.TallyResult";
  value: Uint8Array;
}
/** TallyResult defines a standard tally for a governance proposal. */
export interface TallyResultAmino {
  /** yes_count is the number of yes votes on a proposal. */
  yes_count?: string;
  /** abstain_count is the number of abstain votes on a proposal. */
  abstain_count?: string;
  /** no_count is the number of no votes on a proposal. */
  no_count?: string;
}
export interface TallyResultAminoMsg {
  type: "/atomone.gov.v1.TallyResult";
  value: TallyResultAmino;
}
/** TallyResult defines a standard tally for a governance proposal. */
export interface TallyResultSDKType {
  yes_count: string;
  abstain_count: string;
  no_count: string;
}
/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 */
export interface Vote {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
  /** voter is the voter address of the proposal. */
  voter: string;
  /** options is the weighted vote options. */
  options: WeightedVoteOption[];
  /** metadata is any  arbitrary metadata to attached to the vote. */
  metadata: string;
}
export interface VoteProtoMsg {
  typeUrl: "/atomone.gov.v1.Vote";
  value: Uint8Array;
}
/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 */
export interface VoteAmino {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id?: string;
  /** voter is the voter address of the proposal. */
  voter?: string;
  /** options is the weighted vote options. */
  options?: WeightedVoteOptionAmino[];
  /** metadata is any  arbitrary metadata to attached to the vote. */
  metadata?: string;
}
export interface VoteAminoMsg {
  type: "/atomone.gov.v1.Vote";
  value: VoteAmino;
}
/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 */
export interface VoteSDKType {
  proposal_id: bigint;
  voter: string;
  options: WeightedVoteOptionSDKType[];
  metadata: string;
}
/** QuorumCheckQueueEntry defines a quorum check queue entry. */
export interface QuorumCheckQueueEntry {
  /**
   * quorum_timeout_time is the time after which quorum checks start happening
   * and voting period is extended if proposal reaches quorum.
   */
  quorumTimeoutTime?: Date;
  /**
   * quorum_check_count is the number of times quorum will be checked.
   * This is a snapshot of the parameter value with the same name when the
   * proposal is initially added to the queue.
   */
  quorumCheckCount: bigint;
  /** quorum_checks_done is the number of quorum checks that have been done. */
  quorumChecksDone: bigint;
}
export interface QuorumCheckQueueEntryProtoMsg {
  typeUrl: "/atomone.gov.v1.QuorumCheckQueueEntry";
  value: Uint8Array;
}
/** QuorumCheckQueueEntry defines a quorum check queue entry. */
export interface QuorumCheckQueueEntryAmino {
  /**
   * quorum_timeout_time is the time after which quorum checks start happening
   * and voting period is extended if proposal reaches quorum.
   */
  quorum_timeout_time?: string;
  /**
   * quorum_check_count is the number of times quorum will be checked.
   * This is a snapshot of the parameter value with the same name when the
   * proposal is initially added to the queue.
   */
  quorum_check_count?: string;
  /** quorum_checks_done is the number of quorum checks that have been done. */
  quorum_checks_done?: string;
}
export interface QuorumCheckQueueEntryAminoMsg {
  type: "/atomone.gov.v1.QuorumCheckQueueEntry";
  value: QuorumCheckQueueEntryAmino;
}
/** QuorumCheckQueueEntry defines a quorum check queue entry. */
export interface QuorumCheckQueueEntrySDKType {
  quorum_timeout_time?: Date;
  quorum_check_count: bigint;
  quorum_checks_done: bigint;
}
/** DepositParams defines the params for deposits on governance proposals. */
export interface DepositParams {
  /** Minimum deposit for a proposal to enter voting period. */
  minDeposit: Coin[];
  /**
   * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
   * months.
   */
  maxDepositPeriod?: Duration;
}
export interface DepositParamsProtoMsg {
  typeUrl: "/atomone.gov.v1.DepositParams";
  value: Uint8Array;
}
/** DepositParams defines the params for deposits on governance proposals. */
export interface DepositParamsAmino {
  /** Minimum deposit for a proposal to enter voting period. */
  min_deposit?: CoinAmino[];
  /**
   * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
   * months.
   */
  max_deposit_period?: DurationAmino;
}
export interface DepositParamsAminoMsg {
  type: "/atomone.gov.v1.DepositParams";
  value: DepositParamsAmino;
}
/** DepositParams defines the params for deposits on governance proposals. */
export interface DepositParamsSDKType {
  min_deposit: CoinSDKType[];
  max_deposit_period?: DurationSDKType;
}
/** VotingParams defines the params for voting on governance proposals. */
export interface VotingParams {
  /** Duration of the voting period. */
  votingPeriod?: Duration;
}
export interface VotingParamsProtoMsg {
  typeUrl: "/atomone.gov.v1.VotingParams";
  value: Uint8Array;
}
/** VotingParams defines the params for voting on governance proposals. */
export interface VotingParamsAmino {
  /** Duration of the voting period. */
  voting_period?: DurationAmino;
}
export interface VotingParamsAminoMsg {
  type: "/atomone.gov.v1.VotingParams";
  value: VotingParamsAmino;
}
/** VotingParams defines the params for voting on governance proposals. */
export interface VotingParamsSDKType {
  voting_period?: DurationSDKType;
}
/** TallyParams defines the params for tallying votes on governance proposals. */
export interface TallyParams {
  /**
   * Minimum percentage of total stake needed to vote for a result to be
   * considered valid.
   */
  quorum: string;
  /** Minimum proportion of Yes votes for proposal to pass. Default value: 2/3. */
  threshold: string;
  /** quorum for constitution amendment proposals */
  constitutionAmendmentQuorum: string;
  /** Minimum proportion of Yes votes for a Constitution Amendment proposal to pass. Default value: 0.9. */
  constitutionAmendmentThreshold: string;
  /** quorum for law proposals */
  lawQuorum: string;
  /** Minimum proportion of Yes votes for a Law proposal to pass. Default value: 0.9. */
  lawThreshold: string;
}
export interface TallyParamsProtoMsg {
  typeUrl: "/atomone.gov.v1.TallyParams";
  value: Uint8Array;
}
/** TallyParams defines the params for tallying votes on governance proposals. */
export interface TallyParamsAmino {
  /**
   * Minimum percentage of total stake needed to vote for a result to be
   * considered valid.
   */
  quorum?: string;
  /** Minimum proportion of Yes votes for proposal to pass. Default value: 2/3. */
  threshold?: string;
  /** quorum for constitution amendment proposals */
  constitution_amendment_quorum?: string;
  /** Minimum proportion of Yes votes for a Constitution Amendment proposal to pass. Default value: 0.9. */
  constitution_amendment_threshold?: string;
  /** quorum for law proposals */
  law_quorum?: string;
  /** Minimum proportion of Yes votes for a Law proposal to pass. Default value: 0.9. */
  law_threshold?: string;
}
export interface TallyParamsAminoMsg {
  type: "/atomone.gov.v1.TallyParams";
  value: TallyParamsAmino;
}
/** TallyParams defines the params for tallying votes on governance proposals. */
export interface TallyParamsSDKType {
  quorum: string;
  threshold: string;
  constitution_amendment_quorum: string;
  constitution_amendment_threshold: string;
  law_quorum: string;
  law_threshold: string;
}
/**
 * Params defines the parameters for the x/gov module.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface Params {
  /** Minimum deposit for a proposal to enter voting period. */
  minDeposit: Coin[];
  /**
   * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
   * months.
   */
  maxDepositPeriod?: Duration;
  /** Duration of the voting period. */
  votingPeriod?: Duration;
  /**
   * Minimum percentage of total stake needed to vote for a result to be
   *  considered valid. Default value: 0.25.
   */
  quorum: string;
  /** Minimum proportion of Yes votes for proposal to pass. Default value: 2/3. */
  threshold: string;
  /** The ratio representing the proportion of the deposit value that must be paid at proposal submission. */
  minInitialDepositRatio: string;
  /** burn deposits if a proposal does not meet quorum */
  burnVoteQuorum: boolean;
  /** burn deposits if the proposal does not enter voting period */
  burnProposalDepositPrevote: boolean;
  /**
   * The ratio representing the proportion of the deposit value minimum that
   * must be met when making a deposit. Default value: 0.01. Meaning that for a
   * chain with a min_deposit of 100stake, a deposit of 1stake would be
   * required.
   * 
   * Since: cosmos-sdk 0.50
   * NOTE: backported from v50 (https://github.com/cosmos/cosmos-sdk/pull/18146)
   */
  minDepositRatio: string;
  /** quorum for constitution amendment proposals */
  constitutionAmendmentQuorum: string;
  /** Minimum proportion of Yes votes for a Constitution Amendment proposal to pass. Default value: 0.9. */
  constitutionAmendmentThreshold: string;
  /** quorum for law proposals */
  lawQuorum: string;
  /** Minimum proportion of Yes votes for a Law proposal to pass. Default value: 0.9. */
  lawThreshold: string;
  /**
   * Duration of time after a proposal enters the voting period, during which quorum
   * must be achieved to not incur in a voting period extension.
   */
  quorumTimeout?: Duration;
  /**
   * Duration that expresses the maximum amount of time by which a proposal voting period
   * can be extended.
   */
  maxVotingPeriodExtension?: Duration;
  /**
   * Number of times a proposal should be checked for quorum after the quorum timeout
   * has elapsed. Used to compute the amount of time in between quorum checks.
   */
  quorumCheckCount: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/atomone.gov.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the x/gov module.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface ParamsAmino {
  /** Minimum deposit for a proposal to enter voting period. */
  min_deposit: CoinAmino[];
  /**
   * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
   * months.
   */
  max_deposit_period?: DurationAmino;
  /** Duration of the voting period. */
  voting_period?: DurationAmino;
  /**
   * Minimum percentage of total stake needed to vote for a result to be
   *  considered valid. Default value: 0.25.
   */
  quorum?: string;
  /** Minimum proportion of Yes votes for proposal to pass. Default value: 2/3. */
  threshold?: string;
  /** The ratio representing the proportion of the deposit value that must be paid at proposal submission. */
  min_initial_deposit_ratio?: string;
  /** burn deposits if a proposal does not meet quorum */
  burn_vote_quorum?: boolean;
  /** burn deposits if the proposal does not enter voting period */
  burn_proposal_deposit_prevote?: boolean;
  /**
   * The ratio representing the proportion of the deposit value minimum that
   * must be met when making a deposit. Default value: 0.01. Meaning that for a
   * chain with a min_deposit of 100stake, a deposit of 1stake would be
   * required.
   * 
   * Since: cosmos-sdk 0.50
   * NOTE: backported from v50 (https://github.com/cosmos/cosmos-sdk/pull/18146)
   */
  min_deposit_ratio?: string;
  /** quorum for constitution amendment proposals */
  constitution_amendment_quorum?: string;
  /** Minimum proportion of Yes votes for a Constitution Amendment proposal to pass. Default value: 0.9. */
  constitution_amendment_threshold?: string;
  /** quorum for law proposals */
  law_quorum?: string;
  /** Minimum proportion of Yes votes for a Law proposal to pass. Default value: 0.9. */
  law_threshold?: string;
  /**
   * Duration of time after a proposal enters the voting period, during which quorum
   * must be achieved to not incur in a voting period extension.
   */
  quorum_timeout?: DurationAmino;
  /**
   * Duration that expresses the maximum amount of time by which a proposal voting period
   * can be extended.
   */
  max_voting_period_extension?: DurationAmino;
  /**
   * Number of times a proposal should be checked for quorum after the quorum timeout
   * has elapsed. Used to compute the amount of time in between quorum checks.
   */
  quorum_check_count?: string;
}
export interface ParamsAminoMsg {
  type: "/atomone.gov.v1.Params";
  value: ParamsAmino;
}
/**
 * Params defines the parameters for the x/gov module.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface ParamsSDKType {
  min_deposit: CoinSDKType[];
  max_deposit_period?: DurationSDKType;
  voting_period?: DurationSDKType;
  quorum: string;
  threshold: string;
  min_initial_deposit_ratio: string;
  burn_vote_quorum: boolean;
  burn_proposal_deposit_prevote: boolean;
  min_deposit_ratio: string;
  constitution_amendment_quorum: string;
  constitution_amendment_threshold: string;
  law_quorum: string;
  law_threshold: string;
  quorum_timeout?: DurationSDKType;
  max_voting_period_extension?: DurationSDKType;
  quorum_check_count: bigint;
}
function createBaseWeightedVoteOption(): WeightedVoteOption {
  return {
    option: 0,
    weight: ""
  };
}
export const WeightedVoteOption = {
  typeUrl: "/atomone.gov.v1.WeightedVoteOption",
  is(o: any): o is WeightedVoteOption {
    return o && (o.$typeUrl === WeightedVoteOption.typeUrl || isSet(o.option) && typeof o.weight === "string");
  },
  isSDK(o: any): o is WeightedVoteOptionSDKType {
    return o && (o.$typeUrl === WeightedVoteOption.typeUrl || isSet(o.option) && typeof o.weight === "string");
  },
  isAmino(o: any): o is WeightedVoteOptionAmino {
    return o && (o.$typeUrl === WeightedVoteOption.typeUrl || isSet(o.option) && typeof o.weight === "string");
  },
  encode(message: WeightedVoteOption, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.option !== 0) {
      writer.uint32(8).int32(message.option);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WeightedVoteOption {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeightedVoteOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.option = reader.int32() as any;
          break;
        case 2:
          message.weight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<WeightedVoteOption>): WeightedVoteOption {
    const message = createBaseWeightedVoteOption();
    message.option = object.option ?? 0;
    message.weight = object.weight ?? "";
    return message;
  },
  fromAmino(object: WeightedVoteOptionAmino): WeightedVoteOption {
    const message = createBaseWeightedVoteOption();
    if (object.option !== undefined && object.option !== null) {
      message.option = object.option;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    }
    return message;
  },
  toAmino(message: WeightedVoteOption): WeightedVoteOptionAmino {
    const obj: any = {};
    obj.option = message.option === 0 ? undefined : message.option;
    obj.weight = message.weight === "" ? undefined : message.weight;
    return obj;
  },
  fromAminoMsg(object: WeightedVoteOptionAminoMsg): WeightedVoteOption {
    return WeightedVoteOption.fromAmino(object.value);
  },
  fromProtoMsg(message: WeightedVoteOptionProtoMsg): WeightedVoteOption {
    return WeightedVoteOption.decode(message.value);
  },
  toProto(message: WeightedVoteOption): Uint8Array {
    return WeightedVoteOption.encode(message).finish();
  },
  toProtoMsg(message: WeightedVoteOption): WeightedVoteOptionProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.WeightedVoteOption",
      value: WeightedVoteOption.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(WeightedVoteOption.typeUrl, WeightedVoteOption);
function createBaseDeposit(): Deposit {
  return {
    proposalId: BigInt(0),
    depositor: "",
    amount: []
  };
}
export const Deposit = {
  typeUrl: "/atomone.gov.v1.Deposit",
  is(o: any): o is Deposit {
    return o && (o.$typeUrl === Deposit.typeUrl || typeof o.proposalId === "bigint" && typeof o.depositor === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])));
  },
  isSDK(o: any): o is DepositSDKType {
    return o && (o.$typeUrl === Deposit.typeUrl || typeof o.proposal_id === "bigint" && typeof o.depositor === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isSDK(o.amount[0])));
  },
  isAmino(o: any): o is DepositAmino {
    return o && (o.$typeUrl === Deposit.typeUrl || typeof o.proposal_id === "bigint" && typeof o.depositor === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isAmino(o.amount[0])));
  },
  encode(message: Deposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Deposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.depositor = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Deposit>): Deposit {
    const message = createBaseDeposit();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.depositor = object.depositor ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DepositAmino): Deposit {
    const message = createBaseDeposit();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Deposit): DepositAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    obj.depositor = message.depositor === "" ? undefined : message.depositor;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: DepositAminoMsg): Deposit {
    return Deposit.fromAmino(object.value);
  },
  fromProtoMsg(message: DepositProtoMsg): Deposit {
    return Deposit.decode(message.value);
  },
  toProto(message: Deposit): Uint8Array {
    return Deposit.encode(message).finish();
  },
  toProtoMsg(message: Deposit): DepositProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.Deposit",
      value: Deposit.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Deposit.typeUrl, Deposit);
function createBaseProposal(): Proposal {
  return {
    id: BigInt(0),
    messages: [],
    status: 0,
    finalTallyResult: undefined,
    submitTime: undefined,
    depositEndTime: undefined,
    totalDeposit: [],
    votingStartTime: undefined,
    votingEndTime: undefined,
    metadata: "",
    title: "",
    summary: "",
    proposer: ""
  };
}
export const Proposal = {
  typeUrl: "/atomone.gov.v1.Proposal",
  is(o: any): o is Proposal {
    return o && (o.$typeUrl === Proposal.typeUrl || typeof o.id === "bigint" && Array.isArray(o.messages) && (!o.messages.length || Any.is(o.messages[0])) && isSet(o.status) && Array.isArray(o.totalDeposit) && (!o.totalDeposit.length || Coin.is(o.totalDeposit[0])) && typeof o.metadata === "string" && typeof o.title === "string" && typeof o.summary === "string" && typeof o.proposer === "string");
  },
  isSDK(o: any): o is ProposalSDKType {
    return o && (o.$typeUrl === Proposal.typeUrl || typeof o.id === "bigint" && Array.isArray(o.messages) && (!o.messages.length || Any.isSDK(o.messages[0])) && isSet(o.status) && Array.isArray(o.total_deposit) && (!o.total_deposit.length || Coin.isSDK(o.total_deposit[0])) && typeof o.metadata === "string" && typeof o.title === "string" && typeof o.summary === "string" && typeof o.proposer === "string");
  },
  isAmino(o: any): o is ProposalAmino {
    return o && (o.$typeUrl === Proposal.typeUrl || typeof o.id === "bigint" && Array.isArray(o.messages) && (!o.messages.length || Any.isAmino(o.messages[0])) && isSet(o.status) && Array.isArray(o.total_deposit) && (!o.total_deposit.length || Coin.isAmino(o.total_deposit[0])) && typeof o.metadata === "string" && typeof o.title === "string" && typeof o.summary === "string" && typeof o.proposer === "string");
  },
  encode(message: Proposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.finalTallyResult !== undefined) {
      TallyResult.encode(message.finalTallyResult, writer.uint32(34).fork()).ldelim();
    }
    if (message.submitTime !== undefined) {
      Timestamp.encode(toTimestamp(message.submitTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.depositEndTime !== undefined) {
      Timestamp.encode(toTimestamp(message.depositEndTime), writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.totalDeposit) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.votingStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.votingStartTime), writer.uint32(66).fork()).ldelim();
    }
    if (message.votingEndTime !== undefined) {
      Timestamp.encode(toTimestamp(message.votingEndTime), writer.uint32(74).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(82).string(message.metadata);
    }
    if (message.title !== "") {
      writer.uint32(90).string(message.title);
    }
    if (message.summary !== "") {
      writer.uint32(98).string(message.summary);
    }
    if (message.proposer !== "") {
      writer.uint32(106).string(message.proposer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Proposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        case 3:
          message.status = reader.int32() as any;
          break;
        case 4:
          message.finalTallyResult = TallyResult.decode(reader, reader.uint32());
          break;
        case 5:
          message.submitTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.depositEndTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.totalDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 8:
          message.votingStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 9:
          message.votingEndTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 10:
          message.metadata = reader.string();
          break;
        case 11:
          message.title = reader.string();
          break;
        case 12:
          message.summary = reader.string();
          break;
        case 13:
          message.proposer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Proposal>): Proposal {
    const message = createBaseProposal();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.messages = object.messages?.map(e => Any.fromPartial(e)) || [];
    message.status = object.status ?? 0;
    message.finalTallyResult = object.finalTallyResult !== undefined && object.finalTallyResult !== null ? TallyResult.fromPartial(object.finalTallyResult) : undefined;
    message.submitTime = object.submitTime ?? undefined;
    message.depositEndTime = object.depositEndTime ?? undefined;
    message.totalDeposit = object.totalDeposit?.map(e => Coin.fromPartial(e)) || [];
    message.votingStartTime = object.votingStartTime ?? undefined;
    message.votingEndTime = object.votingEndTime ?? undefined;
    message.metadata = object.metadata ?? "";
    message.title = object.title ?? "";
    message.summary = object.summary ?? "";
    message.proposer = object.proposer ?? "";
    return message;
  },
  fromAmino(object: ProposalAmino): Proposal {
    const message = createBaseProposal();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    message.messages = object.messages?.map(e => Any.fromAmino(e)) || [];
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.final_tally_result !== undefined && object.final_tally_result !== null) {
      message.finalTallyResult = TallyResult.fromAmino(object.final_tally_result);
    }
    if (object.submit_time !== undefined && object.submit_time !== null) {
      message.submitTime = fromTimestamp(Timestamp.fromAmino(object.submit_time));
    }
    if (object.deposit_end_time !== undefined && object.deposit_end_time !== null) {
      message.depositEndTime = fromTimestamp(Timestamp.fromAmino(object.deposit_end_time));
    }
    message.totalDeposit = object.total_deposit?.map(e => Coin.fromAmino(e)) || [];
    if (object.voting_start_time !== undefined && object.voting_start_time !== null) {
      message.votingStartTime = fromTimestamp(Timestamp.fromAmino(object.voting_start_time));
    }
    if (object.voting_end_time !== undefined && object.voting_end_time !== null) {
      message.votingEndTime = fromTimestamp(Timestamp.fromAmino(object.voting_end_time));
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.summary !== undefined && object.summary !== null) {
      message.summary = object.summary;
    }
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    }
    return message;
  },
  toAmino(message: Proposal): ProposalAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.messages = message.messages;
    }
    obj.status = message.status === 0 ? undefined : message.status;
    obj.final_tally_result = message.finalTallyResult ? TallyResult.toAmino(message.finalTallyResult) : undefined;
    obj.submit_time = message.submitTime ? Timestamp.toAmino(toTimestamp(message.submitTime)) : undefined;
    obj.deposit_end_time = message.depositEndTime ? Timestamp.toAmino(toTimestamp(message.depositEndTime)) : undefined;
    if (message.totalDeposit) {
      obj.total_deposit = message.totalDeposit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_deposit = message.totalDeposit;
    }
    obj.voting_start_time = message.votingStartTime ? Timestamp.toAmino(toTimestamp(message.votingStartTime)) : undefined;
    obj.voting_end_time = message.votingEndTime ? Timestamp.toAmino(toTimestamp(message.votingEndTime)) : undefined;
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    obj.title = message.title === "" ? undefined : message.title;
    obj.summary = message.summary === "" ? undefined : message.summary;
    obj.proposer = message.proposer === "" ? undefined : message.proposer;
    return obj;
  },
  fromAminoMsg(object: ProposalAminoMsg): Proposal {
    return Proposal.fromAmino(object.value);
  },
  fromProtoMsg(message: ProposalProtoMsg): Proposal {
    return Proposal.decode(message.value);
  },
  toProto(message: Proposal): Uint8Array {
    return Proposal.encode(message).finish();
  },
  toProtoMsg(message: Proposal): ProposalProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.Proposal",
      value: Proposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Proposal.typeUrl, Proposal);
function createBaseTallyResult(): TallyResult {
  return {
    yesCount: "",
    abstainCount: "",
    noCount: ""
  };
}
export const TallyResult = {
  typeUrl: "/atomone.gov.v1.TallyResult",
  is(o: any): o is TallyResult {
    return o && (o.$typeUrl === TallyResult.typeUrl || typeof o.yesCount === "string" && typeof o.abstainCount === "string" && typeof o.noCount === "string");
  },
  isSDK(o: any): o is TallyResultSDKType {
    return o && (o.$typeUrl === TallyResult.typeUrl || typeof o.yes_count === "string" && typeof o.abstain_count === "string" && typeof o.no_count === "string");
  },
  isAmino(o: any): o is TallyResultAmino {
    return o && (o.$typeUrl === TallyResult.typeUrl || typeof o.yes_count === "string" && typeof o.abstain_count === "string" && typeof o.no_count === "string");
  },
  encode(message: TallyResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.yesCount !== "") {
      writer.uint32(10).string(message.yesCount);
    }
    if (message.abstainCount !== "") {
      writer.uint32(18).string(message.abstainCount);
    }
    if (message.noCount !== "") {
      writer.uint32(26).string(message.noCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TallyResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTallyResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yesCount = reader.string();
          break;
        case 2:
          message.abstainCount = reader.string();
          break;
        case 3:
          message.noCount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TallyResult>): TallyResult {
    const message = createBaseTallyResult();
    message.yesCount = object.yesCount ?? "";
    message.abstainCount = object.abstainCount ?? "";
    message.noCount = object.noCount ?? "";
    return message;
  },
  fromAmino(object: TallyResultAmino): TallyResult {
    const message = createBaseTallyResult();
    if (object.yes_count !== undefined && object.yes_count !== null) {
      message.yesCount = object.yes_count;
    }
    if (object.abstain_count !== undefined && object.abstain_count !== null) {
      message.abstainCount = object.abstain_count;
    }
    if (object.no_count !== undefined && object.no_count !== null) {
      message.noCount = object.no_count;
    }
    return message;
  },
  toAmino(message: TallyResult): TallyResultAmino {
    const obj: any = {};
    obj.yes_count = message.yesCount === "" ? undefined : message.yesCount;
    obj.abstain_count = message.abstainCount === "" ? undefined : message.abstainCount;
    obj.no_count = message.noCount === "" ? undefined : message.noCount;
    return obj;
  },
  fromAminoMsg(object: TallyResultAminoMsg): TallyResult {
    return TallyResult.fromAmino(object.value);
  },
  fromProtoMsg(message: TallyResultProtoMsg): TallyResult {
    return TallyResult.decode(message.value);
  },
  toProto(message: TallyResult): Uint8Array {
    return TallyResult.encode(message).finish();
  },
  toProtoMsg(message: TallyResult): TallyResultProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.TallyResult",
      value: TallyResult.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TallyResult.typeUrl, TallyResult);
function createBaseVote(): Vote {
  return {
    proposalId: BigInt(0),
    voter: "",
    options: [],
    metadata: ""
  };
}
export const Vote = {
  typeUrl: "/atomone.gov.v1.Vote",
  is(o: any): o is Vote {
    return o && (o.$typeUrl === Vote.typeUrl || typeof o.proposalId === "bigint" && typeof o.voter === "string" && Array.isArray(o.options) && (!o.options.length || WeightedVoteOption.is(o.options[0])) && typeof o.metadata === "string");
  },
  isSDK(o: any): o is VoteSDKType {
    return o && (o.$typeUrl === Vote.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string" && Array.isArray(o.options) && (!o.options.length || WeightedVoteOption.isSDK(o.options[0])) && typeof o.metadata === "string");
  },
  isAmino(o: any): o is VoteAmino {
    return o && (o.$typeUrl === Vote.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string" && Array.isArray(o.options) && (!o.options.length || WeightedVoteOption.isAmino(o.options[0])) && typeof o.metadata === "string");
  },
  encode(message: Vote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    for (const v of message.options) {
      WeightedVoteOption.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(42).string(message.metadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Vote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 4:
          message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
          break;
        case 5:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Vote>): Vote {
    const message = createBaseVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    message.options = object.options?.map(e => WeightedVoteOption.fromPartial(e)) || [];
    message.metadata = object.metadata ?? "";
    return message;
  },
  fromAmino(object: VoteAmino): Vote {
    const message = createBaseVote();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    message.options = object.options?.map(e => WeightedVoteOption.fromAmino(e)) || [];
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    return message;
  },
  toAmino(message: Vote): VoteAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    obj.voter = message.voter === "" ? undefined : message.voter;
    if (message.options) {
      obj.options = message.options.map(e => e ? WeightedVoteOption.toAmino(e) : undefined);
    } else {
      obj.options = message.options;
    }
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    return obj;
  },
  fromAminoMsg(object: VoteAminoMsg): Vote {
    return Vote.fromAmino(object.value);
  },
  fromProtoMsg(message: VoteProtoMsg): Vote {
    return Vote.decode(message.value);
  },
  toProto(message: Vote): Uint8Array {
    return Vote.encode(message).finish();
  },
  toProtoMsg(message: Vote): VoteProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.Vote",
      value: Vote.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Vote.typeUrl, Vote);
function createBaseQuorumCheckQueueEntry(): QuorumCheckQueueEntry {
  return {
    quorumTimeoutTime: undefined,
    quorumCheckCount: BigInt(0),
    quorumChecksDone: BigInt(0)
  };
}
export const QuorumCheckQueueEntry = {
  typeUrl: "/atomone.gov.v1.QuorumCheckQueueEntry",
  is(o: any): o is QuorumCheckQueueEntry {
    return o && (o.$typeUrl === QuorumCheckQueueEntry.typeUrl || typeof o.quorumCheckCount === "bigint" && typeof o.quorumChecksDone === "bigint");
  },
  isSDK(o: any): o is QuorumCheckQueueEntrySDKType {
    return o && (o.$typeUrl === QuorumCheckQueueEntry.typeUrl || typeof o.quorum_check_count === "bigint" && typeof o.quorum_checks_done === "bigint");
  },
  isAmino(o: any): o is QuorumCheckQueueEntryAmino {
    return o && (o.$typeUrl === QuorumCheckQueueEntry.typeUrl || typeof o.quorum_check_count === "bigint" && typeof o.quorum_checks_done === "bigint");
  },
  encode(message: QuorumCheckQueueEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.quorumTimeoutTime !== undefined) {
      Timestamp.encode(toTimestamp(message.quorumTimeoutTime), writer.uint32(10).fork()).ldelim();
    }
    if (message.quorumCheckCount !== BigInt(0)) {
      writer.uint32(16).uint64(message.quorumCheckCount);
    }
    if (message.quorumChecksDone !== BigInt(0)) {
      writer.uint32(24).uint64(message.quorumChecksDone);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuorumCheckQueueEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuorumCheckQueueEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quorumTimeoutTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.quorumCheckCount = reader.uint64();
          break;
        case 3:
          message.quorumChecksDone = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuorumCheckQueueEntry>): QuorumCheckQueueEntry {
    const message = createBaseQuorumCheckQueueEntry();
    message.quorumTimeoutTime = object.quorumTimeoutTime ?? undefined;
    message.quorumCheckCount = object.quorumCheckCount !== undefined && object.quorumCheckCount !== null ? BigInt(object.quorumCheckCount.toString()) : BigInt(0);
    message.quorumChecksDone = object.quorumChecksDone !== undefined && object.quorumChecksDone !== null ? BigInt(object.quorumChecksDone.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QuorumCheckQueueEntryAmino): QuorumCheckQueueEntry {
    const message = createBaseQuorumCheckQueueEntry();
    if (object.quorum_timeout_time !== undefined && object.quorum_timeout_time !== null) {
      message.quorumTimeoutTime = fromTimestamp(Timestamp.fromAmino(object.quorum_timeout_time));
    }
    if (object.quorum_check_count !== undefined && object.quorum_check_count !== null) {
      message.quorumCheckCount = BigInt(object.quorum_check_count);
    }
    if (object.quorum_checks_done !== undefined && object.quorum_checks_done !== null) {
      message.quorumChecksDone = BigInt(object.quorum_checks_done);
    }
    return message;
  },
  toAmino(message: QuorumCheckQueueEntry): QuorumCheckQueueEntryAmino {
    const obj: any = {};
    obj.quorum_timeout_time = message.quorumTimeoutTime ? Timestamp.toAmino(toTimestamp(message.quorumTimeoutTime)) : undefined;
    obj.quorum_check_count = message.quorumCheckCount !== BigInt(0) ? message.quorumCheckCount?.toString() : undefined;
    obj.quorum_checks_done = message.quorumChecksDone !== BigInt(0) ? message.quorumChecksDone?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuorumCheckQueueEntryAminoMsg): QuorumCheckQueueEntry {
    return QuorumCheckQueueEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: QuorumCheckQueueEntryProtoMsg): QuorumCheckQueueEntry {
    return QuorumCheckQueueEntry.decode(message.value);
  },
  toProto(message: QuorumCheckQueueEntry): Uint8Array {
    return QuorumCheckQueueEntry.encode(message).finish();
  },
  toProtoMsg(message: QuorumCheckQueueEntry): QuorumCheckQueueEntryProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QuorumCheckQueueEntry",
      value: QuorumCheckQueueEntry.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuorumCheckQueueEntry.typeUrl, QuorumCheckQueueEntry);
function createBaseDepositParams(): DepositParams {
  return {
    minDeposit: [],
    maxDepositPeriod: undefined
  };
}
export const DepositParams = {
  typeUrl: "/atomone.gov.v1.DepositParams",
  is(o: any): o is DepositParams {
    return o && (o.$typeUrl === DepositParams.typeUrl || Array.isArray(o.minDeposit) && (!o.minDeposit.length || Coin.is(o.minDeposit[0])));
  },
  isSDK(o: any): o is DepositParamsSDKType {
    return o && (o.$typeUrl === DepositParams.typeUrl || Array.isArray(o.min_deposit) && (!o.min_deposit.length || Coin.isSDK(o.min_deposit[0])));
  },
  isAmino(o: any): o is DepositParamsAmino {
    return o && (o.$typeUrl === DepositParams.typeUrl || Array.isArray(o.min_deposit) && (!o.min_deposit.length || Coin.isAmino(o.min_deposit[0])));
  },
  encode(message: DepositParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.minDeposit) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxDepositPeriod !== undefined) {
      Duration.encode(message.maxDepositPeriod, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DepositParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.maxDepositPeriod = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DepositParams>): DepositParams {
    const message = createBaseDepositParams();
    message.minDeposit = object.minDeposit?.map(e => Coin.fromPartial(e)) || [];
    message.maxDepositPeriod = object.maxDepositPeriod !== undefined && object.maxDepositPeriod !== null ? Duration.fromPartial(object.maxDepositPeriod) : undefined;
    return message;
  },
  fromAmino(object: DepositParamsAmino): DepositParams {
    const message = createBaseDepositParams();
    message.minDeposit = object.min_deposit?.map(e => Coin.fromAmino(e)) || [];
    if (object.max_deposit_period !== undefined && object.max_deposit_period !== null) {
      message.maxDepositPeriod = Duration.fromAmino(object.max_deposit_period);
    }
    return message;
  },
  toAmino(message: DepositParams): DepositParamsAmino {
    const obj: any = {};
    if (message.minDeposit) {
      obj.min_deposit = message.minDeposit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.min_deposit = message.minDeposit;
    }
    obj.max_deposit_period = message.maxDepositPeriod ? Duration.toAmino(message.maxDepositPeriod) : undefined;
    return obj;
  },
  fromAminoMsg(object: DepositParamsAminoMsg): DepositParams {
    return DepositParams.fromAmino(object.value);
  },
  fromProtoMsg(message: DepositParamsProtoMsg): DepositParams {
    return DepositParams.decode(message.value);
  },
  toProto(message: DepositParams): Uint8Array {
    return DepositParams.encode(message).finish();
  },
  toProtoMsg(message: DepositParams): DepositParamsProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.DepositParams",
      value: DepositParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DepositParams.typeUrl, DepositParams);
function createBaseVotingParams(): VotingParams {
  return {
    votingPeriod: undefined
  };
}
export const VotingParams = {
  typeUrl: "/atomone.gov.v1.VotingParams",
  is(o: any): o is VotingParams {
    return o && o.$typeUrl === VotingParams.typeUrl;
  },
  isSDK(o: any): o is VotingParamsSDKType {
    return o && o.$typeUrl === VotingParams.typeUrl;
  },
  isAmino(o: any): o is VotingParamsAmino {
    return o && o.$typeUrl === VotingParams.typeUrl;
  },
  encode(message: VotingParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.votingPeriod !== undefined) {
      Duration.encode(message.votingPeriod, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VotingParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVotingParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votingPeriod = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<VotingParams>): VotingParams {
    const message = createBaseVotingParams();
    message.votingPeriod = object.votingPeriod !== undefined && object.votingPeriod !== null ? Duration.fromPartial(object.votingPeriod) : undefined;
    return message;
  },
  fromAmino(object: VotingParamsAmino): VotingParams {
    const message = createBaseVotingParams();
    if (object.voting_period !== undefined && object.voting_period !== null) {
      message.votingPeriod = Duration.fromAmino(object.voting_period);
    }
    return message;
  },
  toAmino(message: VotingParams): VotingParamsAmino {
    const obj: any = {};
    obj.voting_period = message.votingPeriod ? Duration.toAmino(message.votingPeriod) : undefined;
    return obj;
  },
  fromAminoMsg(object: VotingParamsAminoMsg): VotingParams {
    return VotingParams.fromAmino(object.value);
  },
  fromProtoMsg(message: VotingParamsProtoMsg): VotingParams {
    return VotingParams.decode(message.value);
  },
  toProto(message: VotingParams): Uint8Array {
    return VotingParams.encode(message).finish();
  },
  toProtoMsg(message: VotingParams): VotingParamsProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.VotingParams",
      value: VotingParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(VotingParams.typeUrl, VotingParams);
function createBaseTallyParams(): TallyParams {
  return {
    quorum: "",
    threshold: "",
    constitutionAmendmentQuorum: "",
    constitutionAmendmentThreshold: "",
    lawQuorum: "",
    lawThreshold: ""
  };
}
export const TallyParams = {
  typeUrl: "/atomone.gov.v1.TallyParams",
  is(o: any): o is TallyParams {
    return o && (o.$typeUrl === TallyParams.typeUrl || typeof o.quorum === "string" && typeof o.threshold === "string" && typeof o.constitutionAmendmentQuorum === "string" && typeof o.constitutionAmendmentThreshold === "string" && typeof o.lawQuorum === "string" && typeof o.lawThreshold === "string");
  },
  isSDK(o: any): o is TallyParamsSDKType {
    return o && (o.$typeUrl === TallyParams.typeUrl || typeof o.quorum === "string" && typeof o.threshold === "string" && typeof o.constitution_amendment_quorum === "string" && typeof o.constitution_amendment_threshold === "string" && typeof o.law_quorum === "string" && typeof o.law_threshold === "string");
  },
  isAmino(o: any): o is TallyParamsAmino {
    return o && (o.$typeUrl === TallyParams.typeUrl || typeof o.quorum === "string" && typeof o.threshold === "string" && typeof o.constitution_amendment_quorum === "string" && typeof o.constitution_amendment_threshold === "string" && typeof o.law_quorum === "string" && typeof o.law_threshold === "string");
  },
  encode(message: TallyParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.quorum !== "") {
      writer.uint32(10).string(message.quorum);
    }
    if (message.threshold !== "") {
      writer.uint32(18).string(message.threshold);
    }
    if (message.constitutionAmendmentQuorum !== "") {
      writer.uint32(26).string(message.constitutionAmendmentQuorum);
    }
    if (message.constitutionAmendmentThreshold !== "") {
      writer.uint32(34).string(message.constitutionAmendmentThreshold);
    }
    if (message.lawQuorum !== "") {
      writer.uint32(42).string(message.lawQuorum);
    }
    if (message.lawThreshold !== "") {
      writer.uint32(50).string(message.lawThreshold);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TallyParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTallyParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quorum = reader.string();
          break;
        case 2:
          message.threshold = reader.string();
          break;
        case 3:
          message.constitutionAmendmentQuorum = reader.string();
          break;
        case 4:
          message.constitutionAmendmentThreshold = reader.string();
          break;
        case 5:
          message.lawQuorum = reader.string();
          break;
        case 6:
          message.lawThreshold = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TallyParams>): TallyParams {
    const message = createBaseTallyParams();
    message.quorum = object.quorum ?? "";
    message.threshold = object.threshold ?? "";
    message.constitutionAmendmentQuorum = object.constitutionAmendmentQuorum ?? "";
    message.constitutionAmendmentThreshold = object.constitutionAmendmentThreshold ?? "";
    message.lawQuorum = object.lawQuorum ?? "";
    message.lawThreshold = object.lawThreshold ?? "";
    return message;
  },
  fromAmino(object: TallyParamsAmino): TallyParams {
    const message = createBaseTallyParams();
    if (object.quorum !== undefined && object.quorum !== null) {
      message.quorum = object.quorum;
    }
    if (object.threshold !== undefined && object.threshold !== null) {
      message.threshold = object.threshold;
    }
    if (object.constitution_amendment_quorum !== undefined && object.constitution_amendment_quorum !== null) {
      message.constitutionAmendmentQuorum = object.constitution_amendment_quorum;
    }
    if (object.constitution_amendment_threshold !== undefined && object.constitution_amendment_threshold !== null) {
      message.constitutionAmendmentThreshold = object.constitution_amendment_threshold;
    }
    if (object.law_quorum !== undefined && object.law_quorum !== null) {
      message.lawQuorum = object.law_quorum;
    }
    if (object.law_threshold !== undefined && object.law_threshold !== null) {
      message.lawThreshold = object.law_threshold;
    }
    return message;
  },
  toAmino(message: TallyParams): TallyParamsAmino {
    const obj: any = {};
    obj.quorum = message.quorum === "" ? undefined : message.quorum;
    obj.threshold = message.threshold === "" ? undefined : message.threshold;
    obj.constitution_amendment_quorum = message.constitutionAmendmentQuorum === "" ? undefined : message.constitutionAmendmentQuorum;
    obj.constitution_amendment_threshold = message.constitutionAmendmentThreshold === "" ? undefined : message.constitutionAmendmentThreshold;
    obj.law_quorum = message.lawQuorum === "" ? undefined : message.lawQuorum;
    obj.law_threshold = message.lawThreshold === "" ? undefined : message.lawThreshold;
    return obj;
  },
  fromAminoMsg(object: TallyParamsAminoMsg): TallyParams {
    return TallyParams.fromAmino(object.value);
  },
  fromProtoMsg(message: TallyParamsProtoMsg): TallyParams {
    return TallyParams.decode(message.value);
  },
  toProto(message: TallyParams): Uint8Array {
    return TallyParams.encode(message).finish();
  },
  toProtoMsg(message: TallyParams): TallyParamsProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.TallyParams",
      value: TallyParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TallyParams.typeUrl, TallyParams);
function createBaseParams(): Params {
  return {
    minDeposit: [],
    maxDepositPeriod: undefined,
    votingPeriod: undefined,
    quorum: "",
    threshold: "",
    minInitialDepositRatio: "",
    burnVoteQuorum: false,
    burnProposalDepositPrevote: false,
    minDepositRatio: "",
    constitutionAmendmentQuorum: "",
    constitutionAmendmentThreshold: "",
    lawQuorum: "",
    lawThreshold: "",
    quorumTimeout: undefined,
    maxVotingPeriodExtension: undefined,
    quorumCheckCount: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/atomone.gov.v1.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.minDeposit) && (!o.minDeposit.length || Coin.is(o.minDeposit[0])) && typeof o.quorum === "string" && typeof o.threshold === "string" && typeof o.minInitialDepositRatio === "string" && typeof o.burnVoteQuorum === "boolean" && typeof o.burnProposalDepositPrevote === "boolean" && typeof o.minDepositRatio === "string" && typeof o.constitutionAmendmentQuorum === "string" && typeof o.constitutionAmendmentThreshold === "string" && typeof o.lawQuorum === "string" && typeof o.lawThreshold === "string" && typeof o.quorumCheckCount === "bigint");
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.min_deposit) && (!o.min_deposit.length || Coin.isSDK(o.min_deposit[0])) && typeof o.quorum === "string" && typeof o.threshold === "string" && typeof o.min_initial_deposit_ratio === "string" && typeof o.burn_vote_quorum === "boolean" && typeof o.burn_proposal_deposit_prevote === "boolean" && typeof o.min_deposit_ratio === "string" && typeof o.constitution_amendment_quorum === "string" && typeof o.constitution_amendment_threshold === "string" && typeof o.law_quorum === "string" && typeof o.law_threshold === "string" && typeof o.quorum_check_count === "bigint");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.min_deposit) && (!o.min_deposit.length || Coin.isAmino(o.min_deposit[0])) && typeof o.quorum === "string" && typeof o.threshold === "string" && typeof o.min_initial_deposit_ratio === "string" && typeof o.burn_vote_quorum === "boolean" && typeof o.burn_proposal_deposit_prevote === "boolean" && typeof o.min_deposit_ratio === "string" && typeof o.constitution_amendment_quorum === "string" && typeof o.constitution_amendment_threshold === "string" && typeof o.law_quorum === "string" && typeof o.law_threshold === "string" && typeof o.quorum_check_count === "bigint");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.minDeposit) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxDepositPeriod !== undefined) {
      Duration.encode(message.maxDepositPeriod, writer.uint32(18).fork()).ldelim();
    }
    if (message.votingPeriod !== undefined) {
      Duration.encode(message.votingPeriod, writer.uint32(26).fork()).ldelim();
    }
    if (message.quorum !== "") {
      writer.uint32(34).string(message.quorum);
    }
    if (message.threshold !== "") {
      writer.uint32(42).string(message.threshold);
    }
    if (message.minInitialDepositRatio !== "") {
      writer.uint32(58).string(message.minInitialDepositRatio);
    }
    if (message.burnVoteQuorum === true) {
      writer.uint32(104).bool(message.burnVoteQuorum);
    }
    if (message.burnProposalDepositPrevote === true) {
      writer.uint32(112).bool(message.burnProposalDepositPrevote);
    }
    if (message.minDepositRatio !== "") {
      writer.uint32(122).string(message.minDepositRatio);
    }
    if (message.constitutionAmendmentQuorum !== "") {
      writer.uint32(130).string(message.constitutionAmendmentQuorum);
    }
    if (message.constitutionAmendmentThreshold !== "") {
      writer.uint32(138).string(message.constitutionAmendmentThreshold);
    }
    if (message.lawQuorum !== "") {
      writer.uint32(146).string(message.lawQuorum);
    }
    if (message.lawThreshold !== "") {
      writer.uint32(154).string(message.lawThreshold);
    }
    if (message.quorumTimeout !== undefined) {
      Duration.encode(message.quorumTimeout, writer.uint32(162).fork()).ldelim();
    }
    if (message.maxVotingPeriodExtension !== undefined) {
      Duration.encode(message.maxVotingPeriodExtension, writer.uint32(170).fork()).ldelim();
    }
    if (message.quorumCheckCount !== BigInt(0)) {
      writer.uint32(176).uint64(message.quorumCheckCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.maxDepositPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.votingPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.quorum = reader.string();
          break;
        case 5:
          message.threshold = reader.string();
          break;
        case 7:
          message.minInitialDepositRatio = reader.string();
          break;
        case 13:
          message.burnVoteQuorum = reader.bool();
          break;
        case 14:
          message.burnProposalDepositPrevote = reader.bool();
          break;
        case 15:
          message.minDepositRatio = reader.string();
          break;
        case 16:
          message.constitutionAmendmentQuorum = reader.string();
          break;
        case 17:
          message.constitutionAmendmentThreshold = reader.string();
          break;
        case 18:
          message.lawQuorum = reader.string();
          break;
        case 19:
          message.lawThreshold = reader.string();
          break;
        case 20:
          message.quorumTimeout = Duration.decode(reader, reader.uint32());
          break;
        case 21:
          message.maxVotingPeriodExtension = Duration.decode(reader, reader.uint32());
          break;
        case 22:
          message.quorumCheckCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.minDeposit = object.minDeposit?.map(e => Coin.fromPartial(e)) || [];
    message.maxDepositPeriod = object.maxDepositPeriod !== undefined && object.maxDepositPeriod !== null ? Duration.fromPartial(object.maxDepositPeriod) : undefined;
    message.votingPeriod = object.votingPeriod !== undefined && object.votingPeriod !== null ? Duration.fromPartial(object.votingPeriod) : undefined;
    message.quorum = object.quorum ?? "";
    message.threshold = object.threshold ?? "";
    message.minInitialDepositRatio = object.minInitialDepositRatio ?? "";
    message.burnVoteQuorum = object.burnVoteQuorum ?? false;
    message.burnProposalDepositPrevote = object.burnProposalDepositPrevote ?? false;
    message.minDepositRatio = object.minDepositRatio ?? "";
    message.constitutionAmendmentQuorum = object.constitutionAmendmentQuorum ?? "";
    message.constitutionAmendmentThreshold = object.constitutionAmendmentThreshold ?? "";
    message.lawQuorum = object.lawQuorum ?? "";
    message.lawThreshold = object.lawThreshold ?? "";
    message.quorumTimeout = object.quorumTimeout !== undefined && object.quorumTimeout !== null ? Duration.fromPartial(object.quorumTimeout) : undefined;
    message.maxVotingPeriodExtension = object.maxVotingPeriodExtension !== undefined && object.maxVotingPeriodExtension !== null ? Duration.fromPartial(object.maxVotingPeriodExtension) : undefined;
    message.quorumCheckCount = object.quorumCheckCount !== undefined && object.quorumCheckCount !== null ? BigInt(object.quorumCheckCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.minDeposit = object.min_deposit?.map(e => Coin.fromAmino(e)) || [];
    if (object.max_deposit_period !== undefined && object.max_deposit_period !== null) {
      message.maxDepositPeriod = Duration.fromAmino(object.max_deposit_period);
    }
    if (object.voting_period !== undefined && object.voting_period !== null) {
      message.votingPeriod = Duration.fromAmino(object.voting_period);
    }
    if (object.quorum !== undefined && object.quorum !== null) {
      message.quorum = object.quorum;
    }
    if (object.threshold !== undefined && object.threshold !== null) {
      message.threshold = object.threshold;
    }
    if (object.min_initial_deposit_ratio !== undefined && object.min_initial_deposit_ratio !== null) {
      message.minInitialDepositRatio = object.min_initial_deposit_ratio;
    }
    if (object.burn_vote_quorum !== undefined && object.burn_vote_quorum !== null) {
      message.burnVoteQuorum = object.burn_vote_quorum;
    }
    if (object.burn_proposal_deposit_prevote !== undefined && object.burn_proposal_deposit_prevote !== null) {
      message.burnProposalDepositPrevote = object.burn_proposal_deposit_prevote;
    }
    if (object.min_deposit_ratio !== undefined && object.min_deposit_ratio !== null) {
      message.minDepositRatio = object.min_deposit_ratio;
    }
    if (object.constitution_amendment_quorum !== undefined && object.constitution_amendment_quorum !== null) {
      message.constitutionAmendmentQuorum = object.constitution_amendment_quorum;
    }
    if (object.constitution_amendment_threshold !== undefined && object.constitution_amendment_threshold !== null) {
      message.constitutionAmendmentThreshold = object.constitution_amendment_threshold;
    }
    if (object.law_quorum !== undefined && object.law_quorum !== null) {
      message.lawQuorum = object.law_quorum;
    }
    if (object.law_threshold !== undefined && object.law_threshold !== null) {
      message.lawThreshold = object.law_threshold;
    }
    if (object.quorum_timeout !== undefined && object.quorum_timeout !== null) {
      message.quorumTimeout = Duration.fromAmino(object.quorum_timeout);
    }
    if (object.max_voting_period_extension !== undefined && object.max_voting_period_extension !== null) {
      message.maxVotingPeriodExtension = Duration.fromAmino(object.max_voting_period_extension);
    }
    if (object.quorum_check_count !== undefined && object.quorum_check_count !== null) {
      message.quorumCheckCount = BigInt(object.quorum_check_count);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.minDeposit) {
      obj.min_deposit = message.minDeposit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.min_deposit = message.minDeposit;
    }
    obj.max_deposit_period = message.maxDepositPeriod ? Duration.toAmino(message.maxDepositPeriod) : undefined;
    obj.voting_period = message.votingPeriod ? Duration.toAmino(message.votingPeriod) : undefined;
    obj.quorum = message.quorum === "" ? undefined : message.quorum;
    obj.threshold = message.threshold === "" ? undefined : message.threshold;
    obj.min_initial_deposit_ratio = message.minInitialDepositRatio === "" ? undefined : message.minInitialDepositRatio;
    obj.burn_vote_quorum = message.burnVoteQuorum === false ? undefined : message.burnVoteQuorum;
    obj.burn_proposal_deposit_prevote = message.burnProposalDepositPrevote === false ? undefined : message.burnProposalDepositPrevote;
    obj.min_deposit_ratio = message.minDepositRatio === "" ? undefined : message.minDepositRatio;
    obj.constitution_amendment_quorum = message.constitutionAmendmentQuorum === "" ? undefined : message.constitutionAmendmentQuorum;
    obj.constitution_amendment_threshold = message.constitutionAmendmentThreshold === "" ? undefined : message.constitutionAmendmentThreshold;
    obj.law_quorum = message.lawQuorum === "" ? undefined : message.lawQuorum;
    obj.law_threshold = message.lawThreshold === "" ? undefined : message.lawThreshold;
    obj.quorum_timeout = message.quorumTimeout ? Duration.toAmino(message.quorumTimeout) : undefined;
    obj.max_voting_period_extension = message.maxVotingPeriodExtension ? Duration.toAmino(message.maxVotingPeriodExtension) : undefined;
    obj.quorum_check_count = message.quorumCheckCount !== BigInt(0) ? message.quorumCheckCount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);