import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryConversionRateRequest, QueryConversionRateResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.conversionRate = this.conversionRate.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `atomone/photon/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* ConversionRate queries the photon's conversion rate */
  async conversionRate(_params: QueryConversionRateRequest = {}): Promise<QueryConversionRateResponseSDKType> {
    const endpoint = `atomone/photon/v1/conversion_rate`;
    return await this.req.get<QueryConversionRateResponseSDKType>(endpoint);
  }
}