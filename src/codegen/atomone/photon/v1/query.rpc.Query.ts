import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryConversionRateRequest, QueryConversionRateResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** ConversionRate queries the photon's conversion rate */
  conversionRate(request?: QueryConversionRateRequest): Promise<QueryConversionRateResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.conversionRate = this.conversionRate.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("atomone.photon.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  conversionRate(request: QueryConversionRateRequest = {}): Promise<QueryConversionRateResponse> {
    const data = QueryConversionRateRequest.encode(request).finish();
    const promise = this.rpc.request("atomone.photon.v1.Query", "ConversionRate", data);
    return promise.then(data => QueryConversionRateResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    conversionRate(request?: QueryConversionRateRequest): Promise<QueryConversionRateResponse> {
      return queryService.conversionRate(request);
    }
  };
};