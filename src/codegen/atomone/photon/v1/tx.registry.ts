//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgMintPhoton, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/atomone.photon.v1.MsgMintPhoton", MsgMintPhoton], ["/atomone.photon.v1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    mintPhoton(value: MsgMintPhoton) {
      return {
        typeUrl: "/atomone.photon.v1.MsgMintPhoton",
        value: MsgMintPhoton.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/atomone.photon.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    mintPhoton(value: MsgMintPhoton) {
      return {
        typeUrl: "/atomone.photon.v1.MsgMintPhoton",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/atomone.photon.v1.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    mintPhoton(value: MsgMintPhoton) {
      return {
        typeUrl: "/atomone.photon.v1.MsgMintPhoton",
        value: MsgMintPhoton.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/atomone.photon.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};