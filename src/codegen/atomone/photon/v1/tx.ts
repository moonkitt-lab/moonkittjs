import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./photon";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** MsgMintPhoton defines an sdk.Msg for burning atone and minting photons. */
export interface MsgMintPhoton {
  toAddress: string;
  amount: Coin;
}
export interface MsgMintPhotonProtoMsg {
  typeUrl: "/atomone.photon.v1.MsgMintPhoton";
  value: Uint8Array;
}
/** MsgMintPhoton defines an sdk.Msg for burning atone and minting photons. */
export interface MsgMintPhotonAmino {
  to_address?: string;
  amount: CoinAmino;
}
export interface MsgMintPhotonAminoMsg {
  type: "atomone/photon/v1/MsgMintPhoton";
  value: MsgMintPhotonAmino;
}
/** MsgMintPhoton defines an sdk.Msg for burning atone and minting photons. */
export interface MsgMintPhotonSDKType {
  to_address: string;
  amount: CoinSDKType;
}
export interface MsgMintPhotonResponse {
  minted: Coin;
  /** conversion_rate represents the factor used to convert atone to photon. */
  conversionRate: string;
}
export interface MsgMintPhotonResponseProtoMsg {
  typeUrl: "/atomone.photon.v1.MsgMintPhotonResponse";
  value: Uint8Array;
}
export interface MsgMintPhotonResponseAmino {
  minted: CoinAmino;
  /** conversion_rate represents the factor used to convert atone to photon. */
  conversion_rate?: string;
}
export interface MsgMintPhotonResponseAminoMsg {
  type: "/atomone.photon.v1.MsgMintPhotonResponse";
  value: MsgMintPhotonResponseAmino;
}
export interface MsgMintPhotonResponseSDKType {
  minted: CoinSDKType;
  conversion_rate: string;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /**
   * params defines the x/gov parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/atomone.photon.v1.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority?: string;
  /**
   * params defines the x/gov parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "atomone/x/photon/v1/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/atomone.photon.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/atomone.photon.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgMintPhoton(): MsgMintPhoton {
  return {
    toAddress: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgMintPhoton = {
  typeUrl: "/atomone.photon.v1.MsgMintPhoton",
  aminoType: "atomone/photon/v1/MsgMintPhoton",
  is(o: any): o is MsgMintPhoton {
    return o && (o.$typeUrl === MsgMintPhoton.typeUrl || typeof o.toAddress === "string" && Coin.is(o.amount));
  },
  isSDK(o: any): o is MsgMintPhotonSDKType {
    return o && (o.$typeUrl === MsgMintPhoton.typeUrl || typeof o.to_address === "string" && Coin.isSDK(o.amount));
  },
  isAmino(o: any): o is MsgMintPhotonAmino {
    return o && (o.$typeUrl === MsgMintPhoton.typeUrl || typeof o.to_address === "string" && Coin.isAmino(o.amount));
  },
  encode(message: MsgMintPhoton, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.toAddress !== "") {
      writer.uint32(10).string(message.toAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMintPhoton {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintPhoton();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.toAddress = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgMintPhoton>): MsgMintPhoton {
    const message = createBaseMsgMintPhoton();
    message.toAddress = object.toAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgMintPhotonAmino): MsgMintPhoton {
    const message = createBaseMsgMintPhoton();
    if (object.to_address !== undefined && object.to_address !== null) {
      message.toAddress = object.to_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgMintPhoton): MsgMintPhotonAmino {
    const obj: any = {};
    obj.to_address = message.toAddress === "" ? undefined : message.toAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgMintPhotonAminoMsg): MsgMintPhoton {
    return MsgMintPhoton.fromAmino(object.value);
  },
  toAminoMsg(message: MsgMintPhoton): MsgMintPhotonAminoMsg {
    return {
      type: "atomone/photon/v1/MsgMintPhoton",
      value: MsgMintPhoton.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgMintPhotonProtoMsg): MsgMintPhoton {
    return MsgMintPhoton.decode(message.value);
  },
  toProto(message: MsgMintPhoton): Uint8Array {
    return MsgMintPhoton.encode(message).finish();
  },
  toProtoMsg(message: MsgMintPhoton): MsgMintPhotonProtoMsg {
    return {
      typeUrl: "/atomone.photon.v1.MsgMintPhoton",
      value: MsgMintPhoton.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgMintPhoton.typeUrl, MsgMintPhoton);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgMintPhoton.aminoType, MsgMintPhoton.typeUrl);
function createBaseMsgMintPhotonResponse(): MsgMintPhotonResponse {
  return {
    minted: Coin.fromPartial({}),
    conversionRate: ""
  };
}
export const MsgMintPhotonResponse = {
  typeUrl: "/atomone.photon.v1.MsgMintPhotonResponse",
  is(o: any): o is MsgMintPhotonResponse {
    return o && (o.$typeUrl === MsgMintPhotonResponse.typeUrl || Coin.is(o.minted) && typeof o.conversionRate === "string");
  },
  isSDK(o: any): o is MsgMintPhotonResponseSDKType {
    return o && (o.$typeUrl === MsgMintPhotonResponse.typeUrl || Coin.isSDK(o.minted) && typeof o.conversion_rate === "string");
  },
  isAmino(o: any): o is MsgMintPhotonResponseAmino {
    return o && (o.$typeUrl === MsgMintPhotonResponse.typeUrl || Coin.isAmino(o.minted) && typeof o.conversion_rate === "string");
  },
  encode(message: MsgMintPhotonResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minted !== undefined) {
      Coin.encode(message.minted, writer.uint32(10).fork()).ldelim();
    }
    if (message.conversionRate !== "") {
      writer.uint32(18).string(message.conversionRate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMintPhotonResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintPhotonResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minted = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.conversionRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgMintPhotonResponse>): MsgMintPhotonResponse {
    const message = createBaseMsgMintPhotonResponse();
    message.minted = object.minted !== undefined && object.minted !== null ? Coin.fromPartial(object.minted) : undefined;
    message.conversionRate = object.conversionRate ?? "";
    return message;
  },
  fromAmino(object: MsgMintPhotonResponseAmino): MsgMintPhotonResponse {
    const message = createBaseMsgMintPhotonResponse();
    if (object.minted !== undefined && object.minted !== null) {
      message.minted = Coin.fromAmino(object.minted);
    }
    if (object.conversion_rate !== undefined && object.conversion_rate !== null) {
      message.conversionRate = object.conversion_rate;
    }
    return message;
  },
  toAmino(message: MsgMintPhotonResponse): MsgMintPhotonResponseAmino {
    const obj: any = {};
    obj.minted = message.minted ? Coin.toAmino(message.minted) : Coin.toAmino(Coin.fromPartial({}));
    obj.conversion_rate = message.conversionRate === "" ? undefined : message.conversionRate;
    return obj;
  },
  fromAminoMsg(object: MsgMintPhotonResponseAminoMsg): MsgMintPhotonResponse {
    return MsgMintPhotonResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintPhotonResponseProtoMsg): MsgMintPhotonResponse {
    return MsgMintPhotonResponse.decode(message.value);
  },
  toProto(message: MsgMintPhotonResponse): Uint8Array {
    return MsgMintPhotonResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMintPhotonResponse): MsgMintPhotonResponseProtoMsg {
    return {
      typeUrl: "/atomone.photon.v1.MsgMintPhotonResponse",
      value: MsgMintPhotonResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgMintPhotonResponse.typeUrl, MsgMintPhotonResponse);
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/atomone.photon.v1.MsgUpdateParams",
  aminoType: "atomone/x/photon/v1/MsgUpdateParams",
  is(o: any): o is MsgUpdateParams {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.is(o.params));
  },
  isSDK(o: any): o is MsgUpdateParamsSDKType {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isSDK(o.params));
  },
  isAmino(o: any): o is MsgUpdateParamsAmino {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isAmino(o.params));
  },
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "atomone/x/photon/v1/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/atomone.photon.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParams.typeUrl, MsgUpdateParams);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateParams.aminoType, MsgUpdateParams.typeUrl);
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/atomone.photon.v1.MsgUpdateParamsResponse",
  is(o: any): o is MsgUpdateParamsResponse {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateParamsResponseSDKType {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateParamsResponseAmino {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/atomone.photon.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);