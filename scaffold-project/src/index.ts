import { createCarbonToken } from './carbon-token.js';
import { createBondNft } from './bond-nft.js';

const main = async () => {
  console.log('Running ANGE MVP flow...');
  await createCarbonToken();
  await createBondNft();
  console.log('Done.');
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
