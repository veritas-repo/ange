import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { createFungible, mintV1, mplTokenMetadata, TokenStandard } from '@metaplex-foundation/mpl-token-metadata';
import { createSignerFromKeypair, generateSigner, keypairIdentity, percentAmount, publicKey } from '@metaplex-foundation/umi';
import { fromWeb3JsKeypair } from '@metaplex-foundation/umi-web3js-adapters';
import { DRY_RUN, keypairFromEnv, RPC_URL } from './config.js';

export const createCarbonToken = async (): Promise<void> => {
  const authority = keypairFromEnv();

  if (DRY_RUN) {
    console.log('[DRY_RUN] Would create $ANGE fungible mint with carbon-credit metadata and mint initial supply.');
    return;
  }

  const umi = createUmi(RPC_URL).use(mplTokenMetadata());
  const umiKeypair = fromWeb3JsKeypair(authority);
  const signer = createSignerFromKeypair(umi, umiKeypair);
  umi.use(keypairIdentity(umiKeypair));

  const mint = generateSigner(umi);

  await createFungible(umi, {
    mint,
    authority: signer,
    name: 'ANGE Carbon Credit',
    symbol: 'ANGE',
    uri: 'https://example.com/ange/carbon-metadata.json',
    sellerFeeBasisPoints: percentAmount(0),
    decimals: 6
  }).sendAndConfirm(umi);

  await mintV1(umi, {
    mint: mint.publicKey,
    authority: signer,
    amount: 1_000,
    tokenOwner: publicKey(authority.publicKey.toBase58()),
    tokenStandard: TokenStandard.Fungible
  }).sendAndConfirm(umi);

  console.log('Carbon token mint:', mint.publicKey);
};
