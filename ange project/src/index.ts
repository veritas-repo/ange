import { createCarbonToken } from './carbon-token.js';
import { createBondNft } from './bond-nft.js';
import { DRY_RUN } from './config.js';

const main = async () => {
  if (DRY_RUN) {
    console.log('Running ANGE MVP flow in DRY_RUN mode (no chain transactions).');
  } else {
    console.log('Running ANGE MVP flow on Solana.');
  }

  await createCarbonToken();
  await createBondNft();
  console.log('Done.');
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
