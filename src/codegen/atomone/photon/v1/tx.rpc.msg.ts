import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgMintPhoton, MsgMintPhotonResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** MintPhoton defines a method to burn atone and mint photons. */
  mintPhoton(request: MsgMintPhoton): Promise<MsgMintPhotonResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/photon
   * module parameters. The authority is defined in the keeper.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.mintPhoton = this.mintPhoton.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  mintPhoton(request: MsgMintPhoton): Promise<MsgMintPhotonResponse> {
    const data = MsgMintPhoton.encode(request).finish();
    const promise = this.rpc.request("atomone.photon.v1.Msg", "MintPhoton", data);
    return promise.then(data => MsgMintPhotonResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("atomone.photon.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}