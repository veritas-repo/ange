import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { createNft, mplTokenMetadata } from '@metaplex-foundation/mpl-token-metadata';
import { createSignerFromKeypair, generateSigner, keypairIdentity, percentAmount } from '@metaplex-foundation/umi';
import { fromWeb3JsKeypair } from '@metaplex-foundation/umi-web3js-adapters';
import { keypairFromEnv, RPC_URL } from './config.js';

/** MVP: Mints a Bond NFT that represents financing rights tied to future carbon generation. */
export const createBondNft = async (): Promise<void> => {
  const authority = keypairFromEnv();
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

if (import.meta.url.endsWith(process.argv[1])) {
  createBondNft().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}
