import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** Params defines the parameters for the x/photon module. */
export interface Params {
  /** Allow to mint photon or not */
  mintDisabled: boolean;
  /**
   * tx_fee_exceptions holds the msg type urls that are allowed to use some
   * different tx fee coins than photon.
   * A wildcard "*" can be used to allow all transactions to use any fee denom.
   */
  txFeeExceptions: string[];
}
export interface ParamsProtoMsg {
  typeUrl: "/atomone.photon.v1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the x/photon module. */
export interface ParamsAmino {
  /** Allow to mint photon or not */
  mint_disabled?: boolean;
  /**
   * tx_fee_exceptions holds the msg type urls that are allowed to use some
   * different tx fee coins than photon.
   * A wildcard "*" can be used to allow all transactions to use any fee denom.
   */
  tx_fee_exceptions?: string[];
}
export interface ParamsAminoMsg {
  type: "/atomone.photon.v1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the x/photon module. */
export interface ParamsSDKType {
  mint_disabled: boolean;
  tx_fee_exceptions: string[];
}
function createBaseParams(): Params {
  return {
    mintDisabled: false,
    txFeeExceptions: []
  };
}
export const Params = {
  typeUrl: "/atomone.photon.v1.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.mintDisabled === "boolean" && Array.isArray(o.txFeeExceptions) && (!o.txFeeExceptions.length || typeof o.txFeeExceptions[0] === "string"));
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.mint_disabled === "boolean" && Array.isArray(o.tx_fee_exceptions) && (!o.tx_fee_exceptions.length || typeof o.tx_fee_exceptions[0] === "string"));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.mint_disabled === "boolean" && Array.isArray(o.tx_fee_exceptions) && (!o.tx_fee_exceptions.length || typeof o.tx_fee_exceptions[0] === "string"));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mintDisabled === true) {
      writer.uint32(8).bool(message.mintDisabled);
    }
    for (const v of message.txFeeExceptions) {
      writer.uint32(18).string(v!);
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
          message.mintDisabled = reader.bool();
          break;
        case 2:
          message.txFeeExceptions.push(reader.string());
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
    message.mintDisabled = object.mintDisabled ?? false;
    message.txFeeExceptions = object.txFeeExceptions?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.mint_disabled !== undefined && object.mint_disabled !== null) {
      message.mintDisabled = object.mint_disabled;
    }
    message.txFeeExceptions = object.tx_fee_exceptions?.map(e => e) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.mint_disabled = message.mintDisabled === false ? undefined : message.mintDisabled;
    if (message.txFeeExceptions) {
      obj.tx_fee_exceptions = message.txFeeExceptions.map(e => e);
    } else {
      obj.tx_fee_exceptions = message.txFeeExceptions;
    }
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
      typeUrl: "/atomone.photon.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);