import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { createNft, mplTokenMetadata } from '@metaplex-foundation/mpl-token-metadata';
import { createSignerFromKeypair, generateSigner, keypairIdentity, percentAmount } from '@metaplex-foundation/umi';
import { fromWeb3JsKeypair } from '@metaplex-foundation/umi-web3js-adapters';
import { DRY_RUN, keypairFromEnv, RPC_URL } from './config.js';

export const createBondNft = async (): Promise<void> => {
  const authority = keypairFromEnv();

  if (DRY_RUN) {
    console.log('[DRY_RUN] Would mint ANGEBOND climate bond NFT linked to future carbon generation.');
    return;
  }

  const umi = createUmi(RPC_URL).use(mplTokenMetadata());

  const umiKeypair = fromWeb3JsKeypair(authority);
  const signer = createSignerFromKeypair(umi, umiKeypair);
  umi.use(keypairIdentity(umiKeypair));

  const mint = generateSigner(umi);
  await createNft(umi, {
    mint,
    authority: signer,
    name: 'ANGE Climate Bond #1',
    symbol: 'ANGEBOND',
    uri: 'https://example.com/ange/bond-1-metadata.json',
    sellerFeeBasisPoints: percentAmount(0),
    isMutable: true
  }).sendAndConfirm(umi);

  console.log('Bond NFT mint:', mint.publicKey);
};
