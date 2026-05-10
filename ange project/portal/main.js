const TOTAL_BOND_USD = 100000;
const TOTAL_NFTS = 100;
const FACE_VALUE = 1000;
const MONTHS = 24;

const issuance = document.getElementById('issuance');
issuance.textContent = `Issued ${TOTAL_NFTS} Bond NFTs × $${FACE_VALUE} = $${TOTAL_BOND_USD.toLocaleString()}.`;

let investorNfts = 10;

document.getElementById('fundBtn').addEventListener('click', () => {
  investorNfts = Number(document.getElementById('investorNfts').value);
  const invested = investorNfts * FACE_VALUE;
  const sharePct = (investorNfts / TOTAL_NFTS) * 100;
  document.getElementById('fundResult').textContent =
    `Investor funds $${invested.toLocaleString()} for ${investorNfts} NFTs (${sharePct.toFixed(2)}% project claim).`;
});

document.getElementById('distBtn').addEventListener('click', () => {
  const totalCredits = Number(document.getElementById('totalCredits').value);
  const investorCreditsTotal = (investorNfts / TOTAL_NFTS) * totalCredits;
  const monthly = investorCreditsTotal / MONTHS;

  document.getElementById('distribution').innerHTML = `
    <p>Total tokenised credits: <strong>${totalCredits.toLocaleString()} ANGE</strong></p>
    <p>Investor total entitlement (2 years): <strong>${investorCreditsTotal.toLocaleString()} ANGE</strong></p>
    <p>Monthly release over ${MONTHS} months: <strong>${monthly.toFixed(2)} ANGE / month</strong></p>
  `;
});

document.getElementById('tradeBtn').addEventListener('click', () => {
  const price = Number(document.getElementById('secondaryPrice').value);
  const initial = investorNfts * FACE_VALUE;
  const sale = investorNfts * price;
  const pnl = sale - initial;
  const roi = (pnl / initial) * 100;

  document.getElementById('tradeResult').textContent =
    `Selling ${investorNfts} NFTs at $${price.toLocaleString()} returns $${sale.toLocaleString()} (${pnl >= 0 ? 'profit' : 'loss'}: $${pnl.toLocaleString()}, ROI ${roi.toFixed(2)}%).`;
});
