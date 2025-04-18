import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType, TokenizeShareRecord, TokenizeShareRecordAmino, TokenizeShareRecordSDKType, TokenizeShareRecordReward, TokenizeShareRecordRewardAmino, TokenizeShareRecordRewardSDKType } from "./liquid";
import { Coin, CoinAmino, CoinSDKType, DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QueryTokenizeShareRecordByIdRequest is request type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdRequest {
  id: bigint;
}
export interface QueryTokenizeShareRecordByIdRequestProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByIdRequest";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordByIdRequest is request type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdRequestAmino {
  id?: string;
}
export interface QueryTokenizeShareRecordByIdRequestAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByIdRequest";
  value: QueryTokenizeShareRecordByIdRequestAmino;
}
/**
 * QueryTokenizeShareRecordByIdRequest is request type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdRequestSDKType {
  id: bigint;
}
/**
 * QueryTokenizeShareRecordByIdRequest is response type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdResponse {
  record: TokenizeShareRecord;
}
export interface QueryTokenizeShareRecordByIdResponseProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByIdResponse";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordByIdRequest is response type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdResponseAmino {
  record?: TokenizeShareRecordAmino;
}
export interface QueryTokenizeShareRecordByIdResponseAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByIdResponse";
  value: QueryTokenizeShareRecordByIdResponseAmino;
}
/**
 * QueryTokenizeShareRecordByIdRequest is response type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdResponseSDKType {
  record: TokenizeShareRecordSDKType;
}
/**
 * QueryTokenizeShareRecordByDenomRequest is request type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomRequest {
  denom: string;
}
export interface QueryTokenizeShareRecordByDenomRequestProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByDenomRequest";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordByDenomRequest is request type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomRequestAmino {
  denom?: string;
}
export interface QueryTokenizeShareRecordByDenomRequestAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByDenomRequest";
  value: QueryTokenizeShareRecordByDenomRequestAmino;
}
/**
 * QueryTokenizeShareRecordByDenomRequest is request type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomRequestSDKType {
  denom: string;
}
/**
 * QueryTokenizeShareRecordByDenomResponse is response type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomResponse {
  record: TokenizeShareRecord;
}
export interface QueryTokenizeShareRecordByDenomResponseProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByDenomResponse";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordByDenomResponse is response type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomResponseAmino {
  record?: TokenizeShareRecordAmino;
}
export interface QueryTokenizeShareRecordByDenomResponseAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByDenomResponse";
  value: QueryTokenizeShareRecordByDenomResponseAmino;
}
/**
 * QueryTokenizeShareRecordByDenomResponse is response type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomResponseSDKType {
  record: TokenizeShareRecordSDKType;
}
/**
 * QueryTokenizeShareRecordsOwnedRequest is request type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedRequest {
  owner: string;
}
export interface QueryTokenizeShareRecordsOwnedRequestProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordsOwnedRequest";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordsOwnedRequest is request type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedRequestAmino {
  owner?: string;
}
export interface QueryTokenizeShareRecordsOwnedRequestAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordsOwnedRequest";
  value: QueryTokenizeShareRecordsOwnedRequestAmino;
}
/**
 * QueryTokenizeShareRecordsOwnedRequest is request type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedRequestSDKType {
  owner: string;
}
/**
 * QueryTokenizeShareRecordsOwnedResponse is response type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedResponse {
  records: TokenizeShareRecord[];
}
export interface QueryTokenizeShareRecordsOwnedResponseProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordsOwnedResponse";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordsOwnedResponse is response type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedResponseAmino {
  records?: TokenizeShareRecordAmino[];
}
export interface QueryTokenizeShareRecordsOwnedResponseAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordsOwnedResponse";
  value: QueryTokenizeShareRecordsOwnedResponseAmino;
}
/**
 * QueryTokenizeShareRecordsOwnedResponse is response type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedResponseSDKType {
  records: TokenizeShareRecordSDKType[];
}
/**
 * QueryAllTokenizeShareRecordsRequest is request type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryAllTokenizeShareRecordsRequestProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryAllTokenizeShareRecordsRequest";
  value: Uint8Array;
}
/**
 * QueryAllTokenizeShareRecordsRequest is request type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryAllTokenizeShareRecordsRequestAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryAllTokenizeShareRecordsRequest";
  value: QueryAllTokenizeShareRecordsRequestAmino;
}
/**
 * QueryAllTokenizeShareRecordsRequest is request type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * QueryAllTokenizeShareRecordsResponse is response type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsResponse {
  records: TokenizeShareRecord[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryAllTokenizeShareRecordsResponseProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryAllTokenizeShareRecordsResponse";
  value: Uint8Array;
}
/**
 * QueryAllTokenizeShareRecordsResponse is response type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsResponseAmino {
  records?: TokenizeShareRecordAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryAllTokenizeShareRecordsResponseAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryAllTokenizeShareRecordsResponse";
  value: QueryAllTokenizeShareRecordsResponseAmino;
}
/**
 * QueryAllTokenizeShareRecordsResponse is response type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsResponseSDKType {
  records: TokenizeShareRecordSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryLastTokenizeShareRecordIdRequest is request type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdRequest {}
export interface QueryLastTokenizeShareRecordIdRequestProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryLastTokenizeShareRecordIdRequest";
  value: Uint8Array;
}
/**
 * QueryLastTokenizeShareRecordIdRequest is request type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdRequestAmino {}
export interface QueryLastTokenizeShareRecordIdRequestAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryLastTokenizeShareRecordIdRequest";
  value: QueryLastTokenizeShareRecordIdRequestAmino;
}
/**
 * QueryLastTokenizeShareRecordIdRequest is request type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdRequestSDKType {}
/**
 * QueryLastTokenizeShareRecordIdResponse is response type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdResponse {
  id: bigint;
}
export interface QueryLastTokenizeShareRecordIdResponseProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryLastTokenizeShareRecordIdResponse";
  value: Uint8Array;
}
/**
 * QueryLastTokenizeShareRecordIdResponse is response type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdResponseAmino {
  id?: string;
}
export interface QueryLastTokenizeShareRecordIdResponseAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryLastTokenizeShareRecordIdResponse";
  value: QueryLastTokenizeShareRecordIdResponseAmino;
}
/**
 * QueryLastTokenizeShareRecordIdResponse is response type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdResponseSDKType {
  id: bigint;
}
/**
 * QueryTotalTokenizeSharedAssetsRequest is request type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsRequest {}
export interface QueryTotalTokenizeSharedAssetsRequestProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryTotalTokenizeSharedAssetsRequest";
  value: Uint8Array;
}
/**
 * QueryTotalTokenizeSharedAssetsRequest is request type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsRequestAmino {}
export interface QueryTotalTokenizeSharedAssetsRequestAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryTotalTokenizeSharedAssetsRequest";
  value: QueryTotalTokenizeSharedAssetsRequestAmino;
}
/**
 * QueryTotalTokenizeSharedAssetsRequest is request type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsRequestSDKType {}
/**
 * QueryTotalTokenizeSharedAssetsResponse is response type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsResponse {
  value: Coin;
}
export interface QueryTotalTokenizeSharedAssetsResponseProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryTotalTokenizeSharedAssetsResponse";
  value: Uint8Array;
}
/**
 * QueryTotalTokenizeSharedAssetsResponse is response type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsResponseAmino {
  value?: CoinAmino;
}
export interface QueryTotalTokenizeSharedAssetsResponseAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryTotalTokenizeSharedAssetsResponse";
  value: QueryTotalTokenizeSharedAssetsResponseAmino;
}
/**
 * QueryTotalTokenizeSharedAssetsResponse is response type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsResponseSDKType {
  value: CoinSDKType;
}
/**
 * QueryTotalLiquidStakedRequest is request type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStaked {}
export interface QueryTotalLiquidStakedProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryTotalLiquidStaked";
  value: Uint8Array;
}
/**
 * QueryTotalLiquidStakedRequest is request type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStakedAmino {}
export interface QueryTotalLiquidStakedAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryTotalLiquidStaked";
  value: QueryTotalLiquidStakedAmino;
}
/**
 * QueryTotalLiquidStakedRequest is request type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStakedSDKType {}
/**
 * QueryTotalLiquidStakedResponse is response type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStakedResponse {
  tokens: string;
}
export interface QueryTotalLiquidStakedResponseProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryTotalLiquidStakedResponse";
  value: Uint8Array;
}
/**
 * QueryTotalLiquidStakedResponse is response type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStakedResponseAmino {
  tokens?: string;
}
export interface QueryTotalLiquidStakedResponseAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryTotalLiquidStakedResponse";
  value: QueryTotalLiquidStakedResponseAmino;
}
/**
 * QueryTotalLiquidStakedResponse is response type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStakedResponseSDKType {
  tokens: string;
}
/**
 * QueryTokenizeShareLockInfo queries the tokenize share lock information
 * associated with given account
 */
export interface QueryTokenizeShareLockInfo {
  address: string;
}
export interface QueryTokenizeShareLockInfoProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareLockInfo";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareLockInfo queries the tokenize share lock information
 * associated with given account
 */
export interface QueryTokenizeShareLockInfoAmino {
  address?: string;
}
export interface QueryTokenizeShareLockInfoAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryTokenizeShareLockInfo";
  value: QueryTokenizeShareLockInfoAmino;
}
/**
 * QueryTokenizeShareLockInfo queries the tokenize share lock information
 * associated with given account
 */
export interface QueryTokenizeShareLockInfoSDKType {
  address: string;
}
/**
 * QueryTokenizeShareLockInfoResponse is the response from the
 * QueryTokenizeShareLockInfo query
 */
export interface QueryTokenizeShareLockInfoResponse {
  status: string;
  expirationTime: string;
}
export interface QueryTokenizeShareLockInfoResponseProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareLockInfoResponse";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareLockInfoResponse is the response from the
 * QueryTokenizeShareLockInfo query
 */
export interface QueryTokenizeShareLockInfoResponseAmino {
  status?: string;
  expiration_time?: string;
}
export interface QueryTokenizeShareLockInfoResponseAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryTokenizeShareLockInfoResponse";
  value: QueryTokenizeShareLockInfoResponseAmino;
}
/**
 * QueryTokenizeShareLockInfoResponse is the response from the
 * QueryTokenizeShareLockInfo query
 */
export interface QueryTokenizeShareLockInfoResponseSDKType {
  status: string;
  expiration_time: string;
}
/**
 * QueryTokenizeShareRecordRewardRequest is the request type for the
 * Query/TokenizeShareRecordReward RPC method.
 */
export interface QueryTokenizeShareRecordRewardRequest {
  ownerAddress: string;
}
export interface QueryTokenizeShareRecordRewardRequestProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordRewardRequest";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordRewardRequest is the request type for the
 * Query/TokenizeShareRecordReward RPC method.
 */
export interface QueryTokenizeShareRecordRewardRequestAmino {
  owner_address?: string;
}
export interface QueryTokenizeShareRecordRewardRequestAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordRewardRequest";
  value: QueryTokenizeShareRecordRewardRequestAmino;
}
/**
 * QueryTokenizeShareRecordRewardRequest is the request type for the
 * Query/TokenizeShareRecordReward RPC method.
 */
export interface QueryTokenizeShareRecordRewardRequestSDKType {
  owner_address: string;
}
/**
 * QueryTokenizeShareRecordRewardResponse is the response type for the
 * Query/TokenizeShareRecordReward RPC method.
 */
export interface QueryTokenizeShareRecordRewardResponse {
  /** rewards defines all the rewards accrued by a delegator. */
  rewards: TokenizeShareRecordReward[];
  /** total defines the sum of all the rewards. */
  total: DecCoin[];
}
export interface QueryTokenizeShareRecordRewardResponseProtoMsg {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordRewardResponse";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordRewardResponse is the response type for the
 * Query/TokenizeShareRecordReward RPC method.
 */
export interface QueryTokenizeShareRecordRewardResponseAmino {
  /** rewards defines all the rewards accrued by a delegator. */
  rewards?: TokenizeShareRecordRewardAmino[];
  /** total defines the sum of all the rewards. */
  total?: DecCoinAmino[];
}
export interface QueryTokenizeShareRecordRewardResponseAminoMsg {
  type: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordRewardResponse";
  value: QueryTokenizeShareRecordRewardResponseAmino;
}
/**
 * QueryTokenizeShareRecordRewardResponse is the response type for the
 * Query/TokenizeShareRecordReward RPC method.
 */
export interface QueryTokenizeShareRecordRewardResponseSDKType {
  rewards: TokenizeShareRecordRewardSDKType[];
  total: DecCoinSDKType[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/gaia.liquid.v1beta1.QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/gaia.liquid.v1beta1.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryTokenizeShareRecordByIdRequest(): QueryTokenizeShareRecordByIdRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryTokenizeShareRecordByIdRequest = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByIdRequest",
  is(o: any): o is QueryTokenizeShareRecordByIdRequest {
    return o && (o.$typeUrl === QueryTokenizeShareRecordByIdRequest.typeUrl || typeof o.id === "bigint");
  },
  isSDK(o: any): o is QueryTokenizeShareRecordByIdRequestSDKType {
    return o && (o.$typeUrl === QueryTokenizeShareRecordByIdRequest.typeUrl || typeof o.id === "bigint");
  },
  isAmino(o: any): o is QueryTokenizeShareRecordByIdRequestAmino {
    return o && (o.$typeUrl === QueryTokenizeShareRecordByIdRequest.typeUrl || typeof o.id === "bigint");
  },
  encode(message: QueryTokenizeShareRecordByIdRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareRecordByIdRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordByIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTokenizeShareRecordByIdRequest>): QueryTokenizeShareRecordByIdRequest {
    const message = createBaseQueryTokenizeShareRecordByIdRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordByIdRequestAmino): QueryTokenizeShareRecordByIdRequest {
    const message = createBaseQueryTokenizeShareRecordByIdRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryTokenizeShareRecordByIdRequest): QueryTokenizeShareRecordByIdRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordByIdRequestAminoMsg): QueryTokenizeShareRecordByIdRequest {
    return QueryTokenizeShareRecordByIdRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenizeShareRecordByIdRequestProtoMsg): QueryTokenizeShareRecordByIdRequest {
    return QueryTokenizeShareRecordByIdRequest.decode(message.value);
  },
  toProto(message: QueryTokenizeShareRecordByIdRequest): Uint8Array {
    return QueryTokenizeShareRecordByIdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordByIdRequest): QueryTokenizeShareRecordByIdRequestProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByIdRequest",
      value: QueryTokenizeShareRecordByIdRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTokenizeShareRecordByIdRequest.typeUrl, QueryTokenizeShareRecordByIdRequest);
function createBaseQueryTokenizeShareRecordByIdResponse(): QueryTokenizeShareRecordByIdResponse {
  return {
    record: TokenizeShareRecord.fromPartial({})
  };
}
export const QueryTokenizeShareRecordByIdResponse = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByIdResponse",
  is(o: any): o is QueryTokenizeShareRecordByIdResponse {
    return o && (o.$typeUrl === QueryTokenizeShareRecordByIdResponse.typeUrl || TokenizeShareRecord.is(o.record));
  },
  isSDK(o: any): o is QueryTokenizeShareRecordByIdResponseSDKType {
    return o && (o.$typeUrl === QueryTokenizeShareRecordByIdResponse.typeUrl || TokenizeShareRecord.isSDK(o.record));
  },
  isAmino(o: any): o is QueryTokenizeShareRecordByIdResponseAmino {
    return o && (o.$typeUrl === QueryTokenizeShareRecordByIdResponse.typeUrl || TokenizeShareRecord.isAmino(o.record));
  },
  encode(message: QueryTokenizeShareRecordByIdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.record !== undefined) {
      TokenizeShareRecord.encode(message.record, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareRecordByIdResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordByIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.record = TokenizeShareRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTokenizeShareRecordByIdResponse>): QueryTokenizeShareRecordByIdResponse {
    const message = createBaseQueryTokenizeShareRecordByIdResponse();
    message.record = object.record !== undefined && object.record !== null ? TokenizeShareRecord.fromPartial(object.record) : undefined;
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordByIdResponseAmino): QueryTokenizeShareRecordByIdResponse {
    const message = createBaseQueryTokenizeShareRecordByIdResponse();
    if (object.record !== undefined && object.record !== null) {
      message.record = TokenizeShareRecord.fromAmino(object.record);
    }
    return message;
  },
  toAmino(message: QueryTokenizeShareRecordByIdResponse): QueryTokenizeShareRecordByIdResponseAmino {
    const obj: any = {};
    obj.record = message.record ? TokenizeShareRecord.toAmino(message.record) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordByIdResponseAminoMsg): QueryTokenizeShareRecordByIdResponse {
    return QueryTokenizeShareRecordByIdResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenizeShareRecordByIdResponseProtoMsg): QueryTokenizeShareRecordByIdResponse {
    return QueryTokenizeShareRecordByIdResponse.decode(message.value);
  },
  toProto(message: QueryTokenizeShareRecordByIdResponse): Uint8Array {
    return QueryTokenizeShareRecordByIdResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordByIdResponse): QueryTokenizeShareRecordByIdResponseProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByIdResponse",
      value: QueryTokenizeShareRecordByIdResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTokenizeShareRecordByIdResponse.typeUrl, QueryTokenizeShareRecordByIdResponse);
function createBaseQueryTokenizeShareRecordByDenomRequest(): QueryTokenizeShareRecordByDenomRequest {
  return {
    denom: ""
  };
}
export const QueryTokenizeShareRecordByDenomRequest = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByDenomRequest",
  is(o: any): o is QueryTokenizeShareRecordByDenomRequest {
    return o && (o.$typeUrl === QueryTokenizeShareRecordByDenomRequest.typeUrl || typeof o.denom === "string");
  },
  isSDK(o: any): o is QueryTokenizeShareRecordByDenomRequestSDKType {
    return o && (o.$typeUrl === QueryTokenizeShareRecordByDenomRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryTokenizeShareRecordByDenomRequestAmino {
    return o && (o.$typeUrl === QueryTokenizeShareRecordByDenomRequest.typeUrl || typeof o.denom === "string");
  },
  encode(message: QueryTokenizeShareRecordByDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareRecordByDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordByDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTokenizeShareRecordByDenomRequest>): QueryTokenizeShareRecordByDenomRequest {
    const message = createBaseQueryTokenizeShareRecordByDenomRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordByDenomRequestAmino): QueryTokenizeShareRecordByDenomRequest {
    const message = createBaseQueryTokenizeShareRecordByDenomRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryTokenizeShareRecordByDenomRequest): QueryTokenizeShareRecordByDenomRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordByDenomRequestAminoMsg): QueryTokenizeShareRecordByDenomRequest {
    return QueryTokenizeShareRecordByDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenizeShareRecordByDenomRequestProtoMsg): QueryTokenizeShareRecordByDenomRequest {
    return QueryTokenizeShareRecordByDenomRequest.decode(message.value);
  },
  toProto(message: QueryTokenizeShareRecordByDenomRequest): Uint8Array {
    return QueryTokenizeShareRecordByDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordByDenomRequest): QueryTokenizeShareRecordByDenomRequestProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByDenomRequest",
      value: QueryTokenizeShareRecordByDenomRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTokenizeShareRecordByDenomRequest.typeUrl, QueryTokenizeShareRecordByDenomRequest);
function createBaseQueryTokenizeShareRecordByDenomResponse(): QueryTokenizeShareRecordByDenomResponse {
  return {
    record: TokenizeShareRecord.fromPartial({})
  };
}
export const QueryTokenizeShareRecordByDenomResponse = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByDenomResponse",
  is(o: any): o is QueryTokenizeShareRecordByDenomResponse {
    return o && (o.$typeUrl === QueryTokenizeShareRecordByDenomResponse.typeUrl || TokenizeShareRecord.is(o.record));
  },
  isSDK(o: any): o is QueryTokenizeShareRecordByDenomResponseSDKType {
    return o && (o.$typeUrl === QueryTokenizeShareRecordByDenomResponse.typeUrl || TokenizeShareRecord.isSDK(o.record));
  },
  isAmino(o: any): o is QueryTokenizeShareRecordByDenomResponseAmino {
    return o && (o.$typeUrl === QueryTokenizeShareRecordByDenomResponse.typeUrl || TokenizeShareRecord.isAmino(o.record));
  },
  encode(message: QueryTokenizeShareRecordByDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.record !== undefined) {
      TokenizeShareRecord.encode(message.record, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareRecordByDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordByDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.record = TokenizeShareRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTokenizeShareRecordByDenomResponse>): QueryTokenizeShareRecordByDenomResponse {
    const message = createBaseQueryTokenizeShareRecordByDenomResponse();
    message.record = object.record !== undefined && object.record !== null ? TokenizeShareRecord.fromPartial(object.record) : undefined;
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordByDenomResponseAmino): QueryTokenizeShareRecordByDenomResponse {
    const message = createBaseQueryTokenizeShareRecordByDenomResponse();
    if (object.record !== undefined && object.record !== null) {
      message.record = TokenizeShareRecord.fromAmino(object.record);
    }
    return message;
  },
  toAmino(message: QueryTokenizeShareRecordByDenomResponse): QueryTokenizeShareRecordByDenomResponseAmino {
    const obj: any = {};
    obj.record = message.record ? TokenizeShareRecord.toAmino(message.record) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordByDenomResponseAminoMsg): QueryTokenizeShareRecordByDenomResponse {
    return QueryTokenizeShareRecordByDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenizeShareRecordByDenomResponseProtoMsg): QueryTokenizeShareRecordByDenomResponse {
    return QueryTokenizeShareRecordByDenomResponse.decode(message.value);
  },
  toProto(message: QueryTokenizeShareRecordByDenomResponse): Uint8Array {
    return QueryTokenizeShareRecordByDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordByDenomResponse): QueryTokenizeShareRecordByDenomResponseProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordByDenomResponse",
      value: QueryTokenizeShareRecordByDenomResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTokenizeShareRecordByDenomResponse.typeUrl, QueryTokenizeShareRecordByDenomResponse);
function createBaseQueryTokenizeShareRecordsOwnedRequest(): QueryTokenizeShareRecordsOwnedRequest {
  return {
    owner: ""
  };
}
export const QueryTokenizeShareRecordsOwnedRequest = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordsOwnedRequest",
  is(o: any): o is QueryTokenizeShareRecordsOwnedRequest {
    return o && (o.$typeUrl === QueryTokenizeShareRecordsOwnedRequest.typeUrl || typeof o.owner === "string");
  },
  isSDK(o: any): o is QueryTokenizeShareRecordsOwnedRequestSDKType {
    return o && (o.$typeUrl === QueryTokenizeShareRecordsOwnedRequest.typeUrl || typeof o.owner === "string");
  },
  isAmino(o: any): o is QueryTokenizeShareRecordsOwnedRequestAmino {
    return o && (o.$typeUrl === QueryTokenizeShareRecordsOwnedRequest.typeUrl || typeof o.owner === "string");
  },
  encode(message: QueryTokenizeShareRecordsOwnedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareRecordsOwnedRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordsOwnedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTokenizeShareRecordsOwnedRequest>): QueryTokenizeShareRecordsOwnedRequest {
    const message = createBaseQueryTokenizeShareRecordsOwnedRequest();
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordsOwnedRequestAmino): QueryTokenizeShareRecordsOwnedRequest {
    const message = createBaseQueryTokenizeShareRecordsOwnedRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: QueryTokenizeShareRecordsOwnedRequest): QueryTokenizeShareRecordsOwnedRequestAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordsOwnedRequestAminoMsg): QueryTokenizeShareRecordsOwnedRequest {
    return QueryTokenizeShareRecordsOwnedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenizeShareRecordsOwnedRequestProtoMsg): QueryTokenizeShareRecordsOwnedRequest {
    return QueryTokenizeShareRecordsOwnedRequest.decode(message.value);
  },
  toProto(message: QueryTokenizeShareRecordsOwnedRequest): Uint8Array {
    return QueryTokenizeShareRecordsOwnedRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordsOwnedRequest): QueryTokenizeShareRecordsOwnedRequestProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordsOwnedRequest",
      value: QueryTokenizeShareRecordsOwnedRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTokenizeShareRecordsOwnedRequest.typeUrl, QueryTokenizeShareRecordsOwnedRequest);
function createBaseQueryTokenizeShareRecordsOwnedResponse(): QueryTokenizeShareRecordsOwnedResponse {
  return {
    records: []
  };
}
export const QueryTokenizeShareRecordsOwnedResponse = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordsOwnedResponse",
  is(o: any): o is QueryTokenizeShareRecordsOwnedResponse {
    return o && (o.$typeUrl === QueryTokenizeShareRecordsOwnedResponse.typeUrl || Array.isArray(o.records) && (!o.records.length || TokenizeShareRecord.is(o.records[0])));
  },
  isSDK(o: any): o is QueryTokenizeShareRecordsOwnedResponseSDKType {
    return o && (o.$typeUrl === QueryTokenizeShareRecordsOwnedResponse.typeUrl || Array.isArray(o.records) && (!o.records.length || TokenizeShareRecord.isSDK(o.records[0])));
  },
  isAmino(o: any): o is QueryTokenizeShareRecordsOwnedResponseAmino {
    return o && (o.$typeUrl === QueryTokenizeShareRecordsOwnedResponse.typeUrl || Array.isArray(o.records) && (!o.records.length || TokenizeShareRecord.isAmino(o.records[0])));
  },
  encode(message: QueryTokenizeShareRecordsOwnedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.records) {
      TokenizeShareRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareRecordsOwnedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordsOwnedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.records.push(TokenizeShareRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTokenizeShareRecordsOwnedResponse>): QueryTokenizeShareRecordsOwnedResponse {
    const message = createBaseQueryTokenizeShareRecordsOwnedResponse();
    message.records = object.records?.map(e => TokenizeShareRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordsOwnedResponseAmino): QueryTokenizeShareRecordsOwnedResponse {
    const message = createBaseQueryTokenizeShareRecordsOwnedResponse();
    message.records = object.records?.map(e => TokenizeShareRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTokenizeShareRecordsOwnedResponse): QueryTokenizeShareRecordsOwnedResponseAmino {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map(e => e ? TokenizeShareRecord.toAmino(e) : undefined);
    } else {
      obj.records = message.records;
    }
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordsOwnedResponseAminoMsg): QueryTokenizeShareRecordsOwnedResponse {
    return QueryTokenizeShareRecordsOwnedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenizeShareRecordsOwnedResponseProtoMsg): QueryTokenizeShareRecordsOwnedResponse {
    return QueryTokenizeShareRecordsOwnedResponse.decode(message.value);
  },
  toProto(message: QueryTokenizeShareRecordsOwnedResponse): Uint8Array {
    return QueryTokenizeShareRecordsOwnedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordsOwnedResponse): QueryTokenizeShareRecordsOwnedResponseProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordsOwnedResponse",
      value: QueryTokenizeShareRecordsOwnedResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTokenizeShareRecordsOwnedResponse.typeUrl, QueryTokenizeShareRecordsOwnedResponse);
function createBaseQueryAllTokenizeShareRecordsRequest(): QueryAllTokenizeShareRecordsRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllTokenizeShareRecordsRequest = {
  typeUrl: "/gaia.liquid.v1beta1.QueryAllTokenizeShareRecordsRequest",
  is(o: any): o is QueryAllTokenizeShareRecordsRequest {
    return o && o.$typeUrl === QueryAllTokenizeShareRecordsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllTokenizeShareRecordsRequestSDKType {
    return o && o.$typeUrl === QueryAllTokenizeShareRecordsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllTokenizeShareRecordsRequestAmino {
    return o && o.$typeUrl === QueryAllTokenizeShareRecordsRequest.typeUrl;
  },
  encode(message: QueryAllTokenizeShareRecordsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTokenizeShareRecordsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTokenizeShareRecordsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllTokenizeShareRecordsRequest>): QueryAllTokenizeShareRecordsRequest {
    const message = createBaseQueryAllTokenizeShareRecordsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTokenizeShareRecordsRequestAmino): QueryAllTokenizeShareRecordsRequest {
    const message = createBaseQueryAllTokenizeShareRecordsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTokenizeShareRecordsRequest): QueryAllTokenizeShareRecordsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTokenizeShareRecordsRequestAminoMsg): QueryAllTokenizeShareRecordsRequest {
    return QueryAllTokenizeShareRecordsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTokenizeShareRecordsRequestProtoMsg): QueryAllTokenizeShareRecordsRequest {
    return QueryAllTokenizeShareRecordsRequest.decode(message.value);
  },
  toProto(message: QueryAllTokenizeShareRecordsRequest): Uint8Array {
    return QueryAllTokenizeShareRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTokenizeShareRecordsRequest): QueryAllTokenizeShareRecordsRequestProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryAllTokenizeShareRecordsRequest",
      value: QueryAllTokenizeShareRecordsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllTokenizeShareRecordsRequest.typeUrl, QueryAllTokenizeShareRecordsRequest);
function createBaseQueryAllTokenizeShareRecordsResponse(): QueryAllTokenizeShareRecordsResponse {
  return {
    records: [],
    pagination: undefined
  };
}
export const QueryAllTokenizeShareRecordsResponse = {
  typeUrl: "/gaia.liquid.v1beta1.QueryAllTokenizeShareRecordsResponse",
  is(o: any): o is QueryAllTokenizeShareRecordsResponse {
    return o && (o.$typeUrl === QueryAllTokenizeShareRecordsResponse.typeUrl || Array.isArray(o.records) && (!o.records.length || TokenizeShareRecord.is(o.records[0])));
  },
  isSDK(o: any): o is QueryAllTokenizeShareRecordsResponseSDKType {
    return o && (o.$typeUrl === QueryAllTokenizeShareRecordsResponse.typeUrl || Array.isArray(o.records) && (!o.records.length || TokenizeShareRecord.isSDK(o.records[0])));
  },
  isAmino(o: any): o is QueryAllTokenizeShareRecordsResponseAmino {
    return o && (o.$typeUrl === QueryAllTokenizeShareRecordsResponse.typeUrl || Array.isArray(o.records) && (!o.records.length || TokenizeShareRecord.isAmino(o.records[0])));
  },
  encode(message: QueryAllTokenizeShareRecordsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.records) {
      TokenizeShareRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTokenizeShareRecordsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTokenizeShareRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.records.push(TokenizeShareRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllTokenizeShareRecordsResponse>): QueryAllTokenizeShareRecordsResponse {
    const message = createBaseQueryAllTokenizeShareRecordsResponse();
    message.records = object.records?.map(e => TokenizeShareRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTokenizeShareRecordsResponseAmino): QueryAllTokenizeShareRecordsResponse {
    const message = createBaseQueryAllTokenizeShareRecordsResponse();
    message.records = object.records?.map(e => TokenizeShareRecord.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTokenizeShareRecordsResponse): QueryAllTokenizeShareRecordsResponseAmino {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map(e => e ? TokenizeShareRecord.toAmino(e) : undefined);
    } else {
      obj.records = message.records;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTokenizeShareRecordsResponseAminoMsg): QueryAllTokenizeShareRecordsResponse {
    return QueryAllTokenizeShareRecordsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTokenizeShareRecordsResponseProtoMsg): QueryAllTokenizeShareRecordsResponse {
    return QueryAllTokenizeShareRecordsResponse.decode(message.value);
  },
  toProto(message: QueryAllTokenizeShareRecordsResponse): Uint8Array {
    return QueryAllTokenizeShareRecordsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTokenizeShareRecordsResponse): QueryAllTokenizeShareRecordsResponseProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryAllTokenizeShareRecordsResponse",
      value: QueryAllTokenizeShareRecordsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllTokenizeShareRecordsResponse.typeUrl, QueryAllTokenizeShareRecordsResponse);
function createBaseQueryLastTokenizeShareRecordIdRequest(): QueryLastTokenizeShareRecordIdRequest {
  return {};
}
export const QueryLastTokenizeShareRecordIdRequest = {
  typeUrl: "/gaia.liquid.v1beta1.QueryLastTokenizeShareRecordIdRequest",
  is(o: any): o is QueryLastTokenizeShareRecordIdRequest {
    return o && o.$typeUrl === QueryLastTokenizeShareRecordIdRequest.typeUrl;
  },
  isSDK(o: any): o is QueryLastTokenizeShareRecordIdRequestSDKType {
    return o && o.$typeUrl === QueryLastTokenizeShareRecordIdRequest.typeUrl;
  },
  isAmino(o: any): o is QueryLastTokenizeShareRecordIdRequestAmino {
    return o && o.$typeUrl === QueryLastTokenizeShareRecordIdRequest.typeUrl;
  },
  encode(_: QueryLastTokenizeShareRecordIdRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLastTokenizeShareRecordIdRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastTokenizeShareRecordIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryLastTokenizeShareRecordIdRequest>): QueryLastTokenizeShareRecordIdRequest {
    const message = createBaseQueryLastTokenizeShareRecordIdRequest();
    return message;
  },
  fromAmino(_: QueryLastTokenizeShareRecordIdRequestAmino): QueryLastTokenizeShareRecordIdRequest {
    const message = createBaseQueryLastTokenizeShareRecordIdRequest();
    return message;
  },
  toAmino(_: QueryLastTokenizeShareRecordIdRequest): QueryLastTokenizeShareRecordIdRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryLastTokenizeShareRecordIdRequestAminoMsg): QueryLastTokenizeShareRecordIdRequest {
    return QueryLastTokenizeShareRecordIdRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastTokenizeShareRecordIdRequestProtoMsg): QueryLastTokenizeShareRecordIdRequest {
    return QueryLastTokenizeShareRecordIdRequest.decode(message.value);
  },
  toProto(message: QueryLastTokenizeShareRecordIdRequest): Uint8Array {
    return QueryLastTokenizeShareRecordIdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLastTokenizeShareRecordIdRequest): QueryLastTokenizeShareRecordIdRequestProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryLastTokenizeShareRecordIdRequest",
      value: QueryLastTokenizeShareRecordIdRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryLastTokenizeShareRecordIdRequest.typeUrl, QueryLastTokenizeShareRecordIdRequest);
function createBaseQueryLastTokenizeShareRecordIdResponse(): QueryLastTokenizeShareRecordIdResponse {
  return {
    id: BigInt(0)
  };
}
export const QueryLastTokenizeShareRecordIdResponse = {
  typeUrl: "/gaia.liquid.v1beta1.QueryLastTokenizeShareRecordIdResponse",
  is(o: any): o is QueryLastTokenizeShareRecordIdResponse {
    return o && (o.$typeUrl === QueryLastTokenizeShareRecordIdResponse.typeUrl || typeof o.id === "bigint");
  },
  isSDK(o: any): o is QueryLastTokenizeShareRecordIdResponseSDKType {
    return o && (o.$typeUrl === QueryLastTokenizeShareRecordIdResponse.typeUrl || typeof o.id === "bigint");
  },
  isAmino(o: any): o is QueryLastTokenizeShareRecordIdResponseAmino {
    return o && (o.$typeUrl === QueryLastTokenizeShareRecordIdResponse.typeUrl || typeof o.id === "bigint");
  },
  encode(message: QueryLastTokenizeShareRecordIdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLastTokenizeShareRecordIdResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastTokenizeShareRecordIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLastTokenizeShareRecordIdResponse>): QueryLastTokenizeShareRecordIdResponse {
    const message = createBaseQueryLastTokenizeShareRecordIdResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryLastTokenizeShareRecordIdResponseAmino): QueryLastTokenizeShareRecordIdResponse {
    const message = createBaseQueryLastTokenizeShareRecordIdResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryLastTokenizeShareRecordIdResponse): QueryLastTokenizeShareRecordIdResponseAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLastTokenizeShareRecordIdResponseAminoMsg): QueryLastTokenizeShareRecordIdResponse {
    return QueryLastTokenizeShareRecordIdResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastTokenizeShareRecordIdResponseProtoMsg): QueryLastTokenizeShareRecordIdResponse {
    return QueryLastTokenizeShareRecordIdResponse.decode(message.value);
  },
  toProto(message: QueryLastTokenizeShareRecordIdResponse): Uint8Array {
    return QueryLastTokenizeShareRecordIdResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLastTokenizeShareRecordIdResponse): QueryLastTokenizeShareRecordIdResponseProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryLastTokenizeShareRecordIdResponse",
      value: QueryLastTokenizeShareRecordIdResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryLastTokenizeShareRecordIdResponse.typeUrl, QueryLastTokenizeShareRecordIdResponse);
function createBaseQueryTotalTokenizeSharedAssetsRequest(): QueryTotalTokenizeSharedAssetsRequest {
  return {};
}
export const QueryTotalTokenizeSharedAssetsRequest = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTotalTokenizeSharedAssetsRequest",
  is(o: any): o is QueryTotalTokenizeSharedAssetsRequest {
    return o && o.$typeUrl === QueryTotalTokenizeSharedAssetsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryTotalTokenizeSharedAssetsRequestSDKType {
    return o && o.$typeUrl === QueryTotalTokenizeSharedAssetsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryTotalTokenizeSharedAssetsRequestAmino {
    return o && o.$typeUrl === QueryTotalTokenizeSharedAssetsRequest.typeUrl;
  },
  encode(_: QueryTotalTokenizeSharedAssetsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalTokenizeSharedAssetsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalTokenizeSharedAssetsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryTotalTokenizeSharedAssetsRequest>): QueryTotalTokenizeSharedAssetsRequest {
    const message = createBaseQueryTotalTokenizeSharedAssetsRequest();
    return message;
  },
  fromAmino(_: QueryTotalTokenizeSharedAssetsRequestAmino): QueryTotalTokenizeSharedAssetsRequest {
    const message = createBaseQueryTotalTokenizeSharedAssetsRequest();
    return message;
  },
  toAmino(_: QueryTotalTokenizeSharedAssetsRequest): QueryTotalTokenizeSharedAssetsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTotalTokenizeSharedAssetsRequestAminoMsg): QueryTotalTokenizeSharedAssetsRequest {
    return QueryTotalTokenizeSharedAssetsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalTokenizeSharedAssetsRequestProtoMsg): QueryTotalTokenizeSharedAssetsRequest {
    return QueryTotalTokenizeSharedAssetsRequest.decode(message.value);
  },
  toProto(message: QueryTotalTokenizeSharedAssetsRequest): Uint8Array {
    return QueryTotalTokenizeSharedAssetsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalTokenizeSharedAssetsRequest): QueryTotalTokenizeSharedAssetsRequestProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTotalTokenizeSharedAssetsRequest",
      value: QueryTotalTokenizeSharedAssetsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTotalTokenizeSharedAssetsRequest.typeUrl, QueryTotalTokenizeSharedAssetsRequest);
function createBaseQueryTotalTokenizeSharedAssetsResponse(): QueryTotalTokenizeSharedAssetsResponse {
  return {
    value: Coin.fromPartial({})
  };
}
export const QueryTotalTokenizeSharedAssetsResponse = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTotalTokenizeSharedAssetsResponse",
  is(o: any): o is QueryTotalTokenizeSharedAssetsResponse {
    return o && (o.$typeUrl === QueryTotalTokenizeSharedAssetsResponse.typeUrl || Coin.is(o.value));
  },
  isSDK(o: any): o is QueryTotalTokenizeSharedAssetsResponseSDKType {
    return o && (o.$typeUrl === QueryTotalTokenizeSharedAssetsResponse.typeUrl || Coin.isSDK(o.value));
  },
  isAmino(o: any): o is QueryTotalTokenizeSharedAssetsResponseAmino {
    return o && (o.$typeUrl === QueryTotalTokenizeSharedAssetsResponse.typeUrl || Coin.isAmino(o.value));
  },
  encode(message: QueryTotalTokenizeSharedAssetsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.value !== undefined) {
      Coin.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalTokenizeSharedAssetsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalTokenizeSharedAssetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTotalTokenizeSharedAssetsResponse>): QueryTotalTokenizeSharedAssetsResponse {
    const message = createBaseQueryTotalTokenizeSharedAssetsResponse();
    message.value = object.value !== undefined && object.value !== null ? Coin.fromPartial(object.value) : undefined;
    return message;
  },
  fromAmino(object: QueryTotalTokenizeSharedAssetsResponseAmino): QueryTotalTokenizeSharedAssetsResponse {
    const message = createBaseQueryTotalTokenizeSharedAssetsResponse();
    if (object.value !== undefined && object.value !== null) {
      message.value = Coin.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: QueryTotalTokenizeSharedAssetsResponse): QueryTotalTokenizeSharedAssetsResponseAmino {
    const obj: any = {};
    obj.value = message.value ? Coin.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTotalTokenizeSharedAssetsResponseAminoMsg): QueryTotalTokenizeSharedAssetsResponse {
    return QueryTotalTokenizeSharedAssetsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalTokenizeSharedAssetsResponseProtoMsg): QueryTotalTokenizeSharedAssetsResponse {
    return QueryTotalTokenizeSharedAssetsResponse.decode(message.value);
  },
  toProto(message: QueryTotalTokenizeSharedAssetsResponse): Uint8Array {
    return QueryTotalTokenizeSharedAssetsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalTokenizeSharedAssetsResponse): QueryTotalTokenizeSharedAssetsResponseProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTotalTokenizeSharedAssetsResponse",
      value: QueryTotalTokenizeSharedAssetsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTotalTokenizeSharedAssetsResponse.typeUrl, QueryTotalTokenizeSharedAssetsResponse);
function createBaseQueryTotalLiquidStaked(): QueryTotalLiquidStaked {
  return {};
}
export const QueryTotalLiquidStaked = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTotalLiquidStaked",
  is(o: any): o is QueryTotalLiquidStaked {
    return o && o.$typeUrl === QueryTotalLiquidStaked.typeUrl;
  },
  isSDK(o: any): o is QueryTotalLiquidStakedSDKType {
    return o && o.$typeUrl === QueryTotalLiquidStaked.typeUrl;
  },
  isAmino(o: any): o is QueryTotalLiquidStakedAmino {
    return o && o.$typeUrl === QueryTotalLiquidStaked.typeUrl;
  },
  encode(_: QueryTotalLiquidStaked, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalLiquidStaked {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLiquidStaked();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryTotalLiquidStaked>): QueryTotalLiquidStaked {
    const message = createBaseQueryTotalLiquidStaked();
    return message;
  },
  fromAmino(_: QueryTotalLiquidStakedAmino): QueryTotalLiquidStaked {
    const message = createBaseQueryTotalLiquidStaked();
    return message;
  },
  toAmino(_: QueryTotalLiquidStaked): QueryTotalLiquidStakedAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTotalLiquidStakedAminoMsg): QueryTotalLiquidStaked {
    return QueryTotalLiquidStaked.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalLiquidStakedProtoMsg): QueryTotalLiquidStaked {
    return QueryTotalLiquidStaked.decode(message.value);
  },
  toProto(message: QueryTotalLiquidStaked): Uint8Array {
    return QueryTotalLiquidStaked.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalLiquidStaked): QueryTotalLiquidStakedProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTotalLiquidStaked",
      value: QueryTotalLiquidStaked.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTotalLiquidStaked.typeUrl, QueryTotalLiquidStaked);
function createBaseQueryTotalLiquidStakedResponse(): QueryTotalLiquidStakedResponse {
  return {
    tokens: ""
  };
}
export const QueryTotalLiquidStakedResponse = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTotalLiquidStakedResponse",
  is(o: any): o is QueryTotalLiquidStakedResponse {
    return o && (o.$typeUrl === QueryTotalLiquidStakedResponse.typeUrl || typeof o.tokens === "string");
  },
  isSDK(o: any): o is QueryTotalLiquidStakedResponseSDKType {
    return o && (o.$typeUrl === QueryTotalLiquidStakedResponse.typeUrl || typeof o.tokens === "string");
  },
  isAmino(o: any): o is QueryTotalLiquidStakedResponseAmino {
    return o && (o.$typeUrl === QueryTotalLiquidStakedResponse.typeUrl || typeof o.tokens === "string");
  },
  encode(message: QueryTotalLiquidStakedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokens !== "") {
      writer.uint32(10).string(message.tokens);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalLiquidStakedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLiquidStakedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokens = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTotalLiquidStakedResponse>): QueryTotalLiquidStakedResponse {
    const message = createBaseQueryTotalLiquidStakedResponse();
    message.tokens = object.tokens ?? "";
    return message;
  },
  fromAmino(object: QueryTotalLiquidStakedResponseAmino): QueryTotalLiquidStakedResponse {
    const message = createBaseQueryTotalLiquidStakedResponse();
    if (object.tokens !== undefined && object.tokens !== null) {
      message.tokens = object.tokens;
    }
    return message;
  },
  toAmino(message: QueryTotalLiquidStakedResponse): QueryTotalLiquidStakedResponseAmino {
    const obj: any = {};
    obj.tokens = message.tokens === "" ? undefined : message.tokens;
    return obj;
  },
  fromAminoMsg(object: QueryTotalLiquidStakedResponseAminoMsg): QueryTotalLiquidStakedResponse {
    return QueryTotalLiquidStakedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalLiquidStakedResponseProtoMsg): QueryTotalLiquidStakedResponse {
    return QueryTotalLiquidStakedResponse.decode(message.value);
  },
  toProto(message: QueryTotalLiquidStakedResponse): Uint8Array {
    return QueryTotalLiquidStakedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalLiquidStakedResponse): QueryTotalLiquidStakedResponseProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTotalLiquidStakedResponse",
      value: QueryTotalLiquidStakedResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTotalLiquidStakedResponse.typeUrl, QueryTotalLiquidStakedResponse);
function createBaseQueryTokenizeShareLockInfo(): QueryTokenizeShareLockInfo {
  return {
    address: ""
  };
}
export const QueryTokenizeShareLockInfo = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareLockInfo",
  is(o: any): o is QueryTokenizeShareLockInfo {
    return o && (o.$typeUrl === QueryTokenizeShareLockInfo.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is QueryTokenizeShareLockInfoSDKType {
    return o && (o.$typeUrl === QueryTokenizeShareLockInfo.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryTokenizeShareLockInfoAmino {
    return o && (o.$typeUrl === QueryTokenizeShareLockInfo.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryTokenizeShareLockInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareLockInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareLockInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTokenizeShareLockInfo>): QueryTokenizeShareLockInfo {
    const message = createBaseQueryTokenizeShareLockInfo();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryTokenizeShareLockInfoAmino): QueryTokenizeShareLockInfo {
    const message = createBaseQueryTokenizeShareLockInfo();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryTokenizeShareLockInfo): QueryTokenizeShareLockInfoAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareLockInfoAminoMsg): QueryTokenizeShareLockInfo {
    return QueryTokenizeShareLockInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenizeShareLockInfoProtoMsg): QueryTokenizeShareLockInfo {
    return QueryTokenizeShareLockInfo.decode(message.value);
  },
  toProto(message: QueryTokenizeShareLockInfo): Uint8Array {
    return QueryTokenizeShareLockInfo.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareLockInfo): QueryTokenizeShareLockInfoProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareLockInfo",
      value: QueryTokenizeShareLockInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTokenizeShareLockInfo.typeUrl, QueryTokenizeShareLockInfo);
function createBaseQueryTokenizeShareLockInfoResponse(): QueryTokenizeShareLockInfoResponse {
  return {
    status: "",
    expirationTime: ""
  };
}
export const QueryTokenizeShareLockInfoResponse = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareLockInfoResponse",
  is(o: any): o is QueryTokenizeShareLockInfoResponse {
    return o && (o.$typeUrl === QueryTokenizeShareLockInfoResponse.typeUrl || typeof o.status === "string" && typeof o.expirationTime === "string");
  },
  isSDK(o: any): o is QueryTokenizeShareLockInfoResponseSDKType {
    return o && (o.$typeUrl === QueryTokenizeShareLockInfoResponse.typeUrl || typeof o.status === "string" && typeof o.expiration_time === "string");
  },
  isAmino(o: any): o is QueryTokenizeShareLockInfoResponseAmino {
    return o && (o.$typeUrl === QueryTokenizeShareLockInfoResponse.typeUrl || typeof o.status === "string" && typeof o.expiration_time === "string");
  },
  encode(message: QueryTokenizeShareLockInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    if (message.expirationTime !== "") {
      writer.uint32(18).string(message.expirationTime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareLockInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareLockInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        case 2:
          message.expirationTime = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTokenizeShareLockInfoResponse>): QueryTokenizeShareLockInfoResponse {
    const message = createBaseQueryTokenizeShareLockInfoResponse();
    message.status = object.status ?? "";
    message.expirationTime = object.expirationTime ?? "";
    return message;
  },
  fromAmino(object: QueryTokenizeShareLockInfoResponseAmino): QueryTokenizeShareLockInfoResponse {
    const message = createBaseQueryTokenizeShareLockInfoResponse();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.expiration_time !== undefined && object.expiration_time !== null) {
      message.expirationTime = object.expiration_time;
    }
    return message;
  },
  toAmino(message: QueryTokenizeShareLockInfoResponse): QueryTokenizeShareLockInfoResponseAmino {
    const obj: any = {};
    obj.status = message.status === "" ? undefined : message.status;
    obj.expiration_time = message.expirationTime === "" ? undefined : message.expirationTime;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareLockInfoResponseAminoMsg): QueryTokenizeShareLockInfoResponse {
    return QueryTokenizeShareLockInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenizeShareLockInfoResponseProtoMsg): QueryTokenizeShareLockInfoResponse {
    return QueryTokenizeShareLockInfoResponse.decode(message.value);
  },
  toProto(message: QueryTokenizeShareLockInfoResponse): Uint8Array {
    return QueryTokenizeShareLockInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareLockInfoResponse): QueryTokenizeShareLockInfoResponseProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareLockInfoResponse",
      value: QueryTokenizeShareLockInfoResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTokenizeShareLockInfoResponse.typeUrl, QueryTokenizeShareLockInfoResponse);
function createBaseQueryTokenizeShareRecordRewardRequest(): QueryTokenizeShareRecordRewardRequest {
  return {
    ownerAddress: ""
  };
}
export const QueryTokenizeShareRecordRewardRequest = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordRewardRequest",
  is(o: any): o is QueryTokenizeShareRecordRewardRequest {
    return o && (o.$typeUrl === QueryTokenizeShareRecordRewardRequest.typeUrl || typeof o.ownerAddress === "string");
  },
  isSDK(o: any): o is QueryTokenizeShareRecordRewardRequestSDKType {
    return o && (o.$typeUrl === QueryTokenizeShareRecordRewardRequest.typeUrl || typeof o.owner_address === "string");
  },
  isAmino(o: any): o is QueryTokenizeShareRecordRewardRequestAmino {
    return o && (o.$typeUrl === QueryTokenizeShareRecordRewardRequest.typeUrl || typeof o.owner_address === "string");
  },
  encode(message: QueryTokenizeShareRecordRewardRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareRecordRewardRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordRewardRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTokenizeShareRecordRewardRequest>): QueryTokenizeShareRecordRewardRequest {
    const message = createBaseQueryTokenizeShareRecordRewardRequest();
    message.ownerAddress = object.ownerAddress ?? "";
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordRewardRequestAmino): QueryTokenizeShareRecordRewardRequest {
    const message = createBaseQueryTokenizeShareRecordRewardRequest();
    if (object.owner_address !== undefined && object.owner_address !== null) {
      message.ownerAddress = object.owner_address;
    }
    return message;
  },
  toAmino(message: QueryTokenizeShareRecordRewardRequest): QueryTokenizeShareRecordRewardRequestAmino {
    const obj: any = {};
    obj.owner_address = message.ownerAddress === "" ? undefined : message.ownerAddress;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordRewardRequestAminoMsg): QueryTokenizeShareRecordRewardRequest {
    return QueryTokenizeShareRecordRewardRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenizeShareRecordRewardRequestProtoMsg): QueryTokenizeShareRecordRewardRequest {
    return QueryTokenizeShareRecordRewardRequest.decode(message.value);
  },
  toProto(message: QueryTokenizeShareRecordRewardRequest): Uint8Array {
    return QueryTokenizeShareRecordRewardRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordRewardRequest): QueryTokenizeShareRecordRewardRequestProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordRewardRequest",
      value: QueryTokenizeShareRecordRewardRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTokenizeShareRecordRewardRequest.typeUrl, QueryTokenizeShareRecordRewardRequest);
function createBaseQueryTokenizeShareRecordRewardResponse(): QueryTokenizeShareRecordRewardResponse {
  return {
    rewards: [],
    total: []
  };
}
export const QueryTokenizeShareRecordRewardResponse = {
  typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordRewardResponse",
  is(o: any): o is QueryTokenizeShareRecordRewardResponse {
    return o && (o.$typeUrl === QueryTokenizeShareRecordRewardResponse.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || TokenizeShareRecordReward.is(o.rewards[0])) && Array.isArray(o.total) && (!o.total.length || DecCoin.is(o.total[0])));
  },
  isSDK(o: any): o is QueryTokenizeShareRecordRewardResponseSDKType {
    return o && (o.$typeUrl === QueryTokenizeShareRecordRewardResponse.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || TokenizeShareRecordReward.isSDK(o.rewards[0])) && Array.isArray(o.total) && (!o.total.length || DecCoin.isSDK(o.total[0])));
  },
  isAmino(o: any): o is QueryTokenizeShareRecordRewardResponseAmino {
    return o && (o.$typeUrl === QueryTokenizeShareRecordRewardResponse.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || TokenizeShareRecordReward.isAmino(o.rewards[0])) && Array.isArray(o.total) && (!o.total.length || DecCoin.isAmino(o.total[0])));
  },
  encode(message: QueryTokenizeShareRecordRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rewards) {
      TokenizeShareRecordReward.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.total) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenizeShareRecordRewardResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(TokenizeShareRecordReward.decode(reader, reader.uint32()));
          break;
        case 2:
          message.total.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTokenizeShareRecordRewardResponse>): QueryTokenizeShareRecordRewardResponse {
    const message = createBaseQueryTokenizeShareRecordRewardResponse();
    message.rewards = object.rewards?.map(e => TokenizeShareRecordReward.fromPartial(e)) || [];
    message.total = object.total?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordRewardResponseAmino): QueryTokenizeShareRecordRewardResponse {
    const message = createBaseQueryTokenizeShareRecordRewardResponse();
    message.rewards = object.rewards?.map(e => TokenizeShareRecordReward.fromAmino(e)) || [];
    message.total = object.total?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTokenizeShareRecordRewardResponse): QueryTokenizeShareRecordRewardResponseAmino {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? TokenizeShareRecordReward.toAmino(e) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
    if (message.total) {
      obj.total = message.total.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.total = message.total;
    }
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordRewardResponseAminoMsg): QueryTokenizeShareRecordRewardResponse {
    return QueryTokenizeShareRecordRewardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenizeShareRecordRewardResponseProtoMsg): QueryTokenizeShareRecordRewardResponse {
    return QueryTokenizeShareRecordRewardResponse.decode(message.value);
  },
  toProto(message: QueryTokenizeShareRecordRewardResponse): Uint8Array {
    return QueryTokenizeShareRecordRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordRewardResponse): QueryTokenizeShareRecordRewardResponseProtoMsg {
    return {
      typeUrl: "/gaia.liquid.v1beta1.QueryTokenizeShareRecordRewardResponse",
      value: QueryTokenizeShareRecordRewardResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTokenizeShareRecordRewardResponse.typeUrl, QueryTokenizeShareRecordRewardResponse);