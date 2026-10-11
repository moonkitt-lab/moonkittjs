import { cosmos, gaia, gaiaAminoConverters, gaiaProtoRegistry } from '../src';

it('exposes the bundled namespaces', () => {
  expect(typeof gaia.ClientFactory.createRPCQueryClient).toBe('function');
  expect(typeof cosmos.ClientFactory.createRPCQueryClient).toBe('function');
  expect(cosmos.bank.v1beta1.MsgSend.typeUrl).toBe('/cosmos.bank.v1beta1.MsgSend');
});

it('registers the gaia liquid messages for signing', () => {
  const typeUrls = gaiaProtoRegistry.map(([typeUrl]) => typeUrl);
  expect(typeUrls).toEqual(
    expect.arrayContaining([
      '/gaia.liquid.v1beta1.MsgTokenizeShares',
      '/gaia.liquid.v1beta1.MsgRedeemTokensForShares',
      '/gaia.liquid.v1beta1.MsgTransferTokenizeShareRecord'
    ])
  );
  expect(gaiaAminoConverters['/gaia.liquid.v1beta1.MsgTokenizeShares'].aminoType).toBe(
    'gaia/MsgTokenizeShares'
  );
});
