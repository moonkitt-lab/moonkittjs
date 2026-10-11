import { PageRequest, PageResponse } from '../src/codegen/cosmos/base/query/v1beta1/pagination';
import { TokenizeShareRecord } from '../src/codegen/gaia/liquid/v1beta1/liquid';
import {
  QueryAllTokenizeShareRecordsRequest,
  QueryAllTokenizeShareRecordsResponse,
  QueryLiquidValidatorRequest,
  QueryLiquidValidatorResponse,
  QueryLiquidValidatorsRequest,
  QueryParamsResponse,
  QueryTokenizeShareRecordByDenomRequest,
  QueryTokenizeShareRecordByIdRequest,
  QueryTokenizeShareRecordByIdResponse,
  QueryTokenizeShareRecordRewardRequest,
  QueryTokenizeShareRecordRewardResponse,
  QueryTokenizeShareRecordsOwnedRequest,
  QueryTokenizeShareRecordsOwnedResponse
} from '../src/codegen/gaia/liquid/v1beta1/query';
import { QueryClientImpl } from '../src/codegen/gaia/liquid/v1beta1/query.rpc.Query';
import {
  MsgRedeemTokensForShares,
  MsgRedeemTokensForSharesResponse,
  MsgTokenizeShares,
  MsgTokenizeSharesResponse,
  MsgTransferTokenizeShareRecord
} from '../src/codegen/gaia/liquid/v1beta1/tx';

const delegator = 'cosmos186kazdd3kvgy6g8l9k7vvwjf3ndyxlcj5pe5ct';
const validator = 'cosmosvaloper14v7cjccl5rd6twxgzff8yg7gm0w4wwyz7ktdep';

const record: TokenizeShareRecord = {
  id: 447n,
  owner: delegator,
  moduleAccount: 'tokenizeshare_447',
  validator
};
const pageRequest: PageRequest = {
  key: new Uint8Array([1, 2, 3]),
  offset: 0n,
  limit: 100n,
  countTotal: true,
  reverse: false
};
const pageResponse: PageResponse = { nextKey: new Uint8Array([4, 5]), total: 222n };

// encode -> decode must give back the same object
const roundTrip = <T>(
  codec: { encode(m: T): { finish(): Uint8Array }; decode(b: Uint8Array): T },
  message: T
) => expect(codec.decode(codec.encode(message).finish())).toEqual(message);

describe('gaia.liquid.v1beta1 messages', () => {
  it('round-trips MsgTokenizeShares', () => {
    expect(MsgTokenizeShares.typeUrl).toBe('/gaia.liquid.v1beta1.MsgTokenizeShares');
    roundTrip(MsgTokenizeShares, {
      delegatorAddress: delegator,
      validatorAddress: validator,
      amount: { denom: 'uatom', amount: '1000000' },
      tokenizedShareOwner: delegator
    });
    roundTrip(MsgTokenizeSharesResponse, {
      amount: { denom: `${validator}/447`, amount: '1000000' }
    });
  });

  it('round-trips MsgRedeemTokensForShares', () => {
    expect(MsgRedeemTokensForShares.typeUrl).toBe('/gaia.liquid.v1beta1.MsgRedeemTokensForShares');
    roundTrip(MsgRedeemTokensForShares, {
      delegatorAddress: delegator,
      amount: { denom: `${validator}/447`, amount: '1000000' }
    });
    roundTrip(MsgRedeemTokensForSharesResponse, { amount: { denom: 'uatom', amount: '1000000' } });
  });

  it('round-trips MsgTransferTokenizeShareRecord', () => {
    roundTrip(MsgTransferTokenizeShareRecord, {
      tokenizeShareRecordId: 447n,
      sender: delegator,
      newOwner: 'cosmos13vc5khk6a0rwvaa9rtxfgytaw6s553ekthathp'
    });
  });

  it('converts MsgTokenizeShares to amino and back', () => {
    const message: MsgTokenizeShares = {
      delegatorAddress: delegator,
      validatorAddress: validator,
      amount: { denom: 'uatom', amount: '1000000' },
      tokenizedShareOwner: delegator
    };
    const amino = MsgTokenizeShares.toAminoMsg(message);
    expect(amino.type).toBe('gaia/MsgTokenizeShares');
    expect(amino.value).toEqual({
      delegator_address: delegator,
      validator_address: validator,
      amount: { denom: 'uatom', amount: '1000000' },
      tokenized_share_owner: delegator
    });
    expect(MsgTokenizeShares.fromAminoMsg(amino)).toEqual(message);
  });
});

describe('gaia.liquid.v1beta1 queries', () => {
  it('encodes requests to the expected wire format', () => {
    // field 1 (varint) = 5
    expect(QueryTokenizeShareRecordByIdRequest.encode({ id: 5n }).finish()).toEqual(
      new Uint8Array([0x08, 0x05])
    );
    // field 1 (length-delimited) = "ab"
    expect(QueryTokenizeShareRecordByDenomRequest.encode({ denom: 'ab' }).finish()).toEqual(
      new Uint8Array([0x0a, 0x02, 0x61, 0x62])
    );
  });

  it('round-trips the record queries', () => {
    roundTrip(QueryTokenizeShareRecordByIdRequest, { id: 447n });
    roundTrip(QueryTokenizeShareRecordByIdResponse, { record });
    roundTrip(QueryTokenizeShareRecordByDenomRequest, { denom: `${validator}/447` });
    roundTrip(QueryTokenizeShareRecordsOwnedRequest, { owner: delegator });
    roundTrip(QueryTokenizeShareRecordsOwnedResponse, { records: [record, { ...record, id: 448n }] });
    roundTrip(QueryAllTokenizeShareRecordsRequest, { pagination: pageRequest });
    roundTrip(QueryAllTokenizeShareRecordsResponse, { records: [record], pagination: pageResponse });
  });

  it('round-trips the reward, validator and params queries', () => {
    roundTrip(QueryTokenizeShareRecordRewardRequest, { ownerAddress: delegator });
    roundTrip(QueryTokenizeShareRecordRewardResponse, {
      rewards: [{ recordId: 447n, reward: [{ denom: 'uatom', amount: '12.5' }] }],
      total: [{ denom: 'uatom', amount: '12.5' }]
    });
    roundTrip(QueryLiquidValidatorRequest, { validatorAddr: validator });
    roundTrip(QueryLiquidValidatorResponse, {
      liquidValidator: { operatorAddress: validator, liquidShares: '505054874' }
    });
    roundTrip(QueryLiquidValidatorsRequest, { pagination: pageRequest });
    roundTrip(QueryParamsResponse, {
      params: { globalLiquidStakingCap: '0.25', validatorLiquidStakingCap: '1' }
    });
  });

  it('queries through an Rpc transport with the gRPC service and method names', async () => {
    const calls: { service: string; method: string; data: Uint8Array }[] = [];
    const client = new QueryClientImpl({
      request: async (service, method, data) => {
        calls.push({ service, method, data });
        return QueryTokenizeShareRecordByIdResponse.encode({ record }).finish();
      }
    });

    const response = await client.tokenizeShareRecordById({ id: 447n });

    expect(response.record).toEqual(record);
    expect(calls).toHaveLength(1);
    expect(calls[0].service).toBe('gaia.liquid.v1beta1.Query');
    expect(calls[0].method).toBe('TokenizeShareRecordById');
    expect(QueryTokenizeShareRecordByIdRequest.decode(calls[0].data)).toEqual({ id: 447n });
  });
});
