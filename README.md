# ANGE Project

**Project Name:  Asset Network for Green Economy (ANGE)**  
Website: https://www.veritas-ange.com  
X: https://x.com/veritas_ange

![ANGE-Logo](./ange%20project/portal/screenshots/ANGE-Logo.jpg)

ANGE is a climate finance infrastructure platform built on Solana that enables the tokenisation, issuance, and trading of climate-linked real-world assets (RWAs). The project focuses on modernising carbon markets by transforming future carbon credit generation into liquid, internet-native financial instruments.

The core innovation of ANGE is the creation of “Bond NFTs” — tokenised climate bonds that represent claims on future carbon credit output from verified climate projects. Through this model, climate project developers can access upfront capital before carbon credits are issued, while investors gain transparent and tradable exposure to climate assets.

ANGE combines:
- Tokenised climate bond issuance
- Carbon credit distribution infrastructure
- Secondary trading markets for liquidity
- On-chain settlement and transparency
- Scalable Solana-based financial infrastructure

The platform addresses major inefficiencies in traditional climate finance, including:

- Limited access to early-stage project funding
- Illiquid and fragmented carbon markets
- High transaction and settlement costs
- Lack of transparency in carbon asset ownership and distribution

By leveraging Solana’s high throughput, low transaction costs, and fast settlement capabilities, ANGE aims to build scalable infrastructure for global climate capital markets.

Key Features include: 
- Bond NFT issuance backed by future carbon generation
- Tokenised carbon asset distribution
- Secondary marketplace for climate-linked RWAs
- Low-cost, high-speed settlement on Solana
- Transparent on-chain ownership and trading
- Modular infrastructure for climate finance applications

ANGE aims to create a globally accessible climate finance network that connects capital markets with real-world environmental impact. The long-term goal is to unlock liquidity for climate projects worldwide while enabling broader participation in sustainable investment opportunities through blockchain-native infrastructure.

## Project Owner

**Project Owner: Veritas Ventures Trust (VVT)**  
Trustee: Veritas Tech Pty. Ltd.  
Website: https://www.veritas-tech.org

![VVT-Logo](./ange%20project/portal/screenshots/VVT-Logo.jpg)

Founded in Australia with an Asia-Pacific focus - Veritas Tech exists to create a sustainable future, as a truly trusted, respected, and independent global emerging tech company. ​Veritas Tech (Veritas Tech Pty. Ltd.), in its capacity as Trustee of the Veritas Ventures Trust, advances the vision and engineering of Emerging Technologies - including Artificial Intelligence, Blockchain/DLT, and the Internet of Things - to build a Sustainable Future.

---

## Slide 1 — Project Introduction

![1-Title](./ange%20project/portal/screenshots/1-Title.jpg)

ANGE (Asset Network for Green Economy) is building a digital climate-finance infrastructure layer that connects real-world climate projects to internet-native capital markets. The model is designed to make project financing more efficient and outcome distribution more transparent by moving issuance, settlement, and value allocation onto programmable rails.

This introduction highlights three strategic themes:
- **Tokenized climate financing instruments** that convert project-linked rights into digitally transferable assets.
- **On-chain carbon value representation** that allows verified climate outcomes to be distributed with transparency and auditability.
- **Infrastructure-first architecture** focused on reusable market rails, not just a single application use case.

The result is a foundation intended to serve developers, institutions, and digital investors inside one coherent market framework.

---

## Slide 2 — Problem Statement

![2-Problem1](./ange%20project/portal/screenshots/2-Problem1.jpg)
![3-Problem2](./ange%20project/portal/screenshots/3-Problem2.jpg)

Traditional climate finance remains operationally fragmented. The pitch surfaces four recurring constraints:
- **Slow capital movement** from commitment to project deployment.
- **High structuring and intermediation costs** that reduce effective funding efficiency.
- **Limited tradability** during multi-year project execution cycles.
- **Restricted access pathways** for global investors who want transparent exposure.

These frictions produce stakeholder-specific impacts:
1. **Project developers** face slower growth because capital is expensive and delayed.
2. **Investors** lack flexible entry/exit options and reliable price discovery.
3. **Climate markets** struggle to scale because asset creation and market distribution are weakly connected.

In short, climate assets are valuable but the current route from project activity to investable market product is too slow and too costly.

---

## Slide 3 — Solution: Two Connected Markets

![4-Market](./ange%20project/portal/screenshots/4-Market.jpg)
![5-Bond](./ange%20project/portal/screenshots/5-Bond.jpg)

ANGE proposes a two-market system that connects project financing and outcome distribution:

### 1) Primary Market — Carbon Credit / Token Market
- Projects complete verification and generate carbon-linked outputs.
- Verified outputs are tokenized into transferable digital units.
- Distribution can occur via native and external market channels to broaden demand access.

### 2) Secondary Market — Bond NFT Trading Market
- Projects issue **Bond NFTs** representing fractional economic rights tied to future distribution streams.
- These units can trade during execution, before full lifecycle completion.
- Continuous trading introduces liquidity and price signals throughout project maturity.

This architecture enables earlier funding for developers while preserving optionality and risk management tools for investors.

---

## Slide 4 — Use Case & MVP Flow

![6-Process](./ange%20project/portal/screenshots/6-Process.jpg)
![7-Example](./ange%20project/portal/screenshots/7-Example.jpg)

### MVP flow screenshots (from `portal/screenshots`)
![MVP Flow Step 1](./ange%20project/portal/screenshots/step1.svg)
![MVP Flow Step 2](./ange%20project/portal/screenshots/step2.svg)
![MVP Flow Step 3](./ange%20project/portal/screenshots/step3.svg)
![MVP Flow Step 4](./ange%20project/portal/screenshots/step4.svg)
![MVP Flow Step 5](./ange%20project/portal/screenshots/step5.svg)

## MVP scope

- **Carbon Token (`$ANGE`)**
  - SPL token with Metaplex metadata.
  - Represents tokenized verified carbon credits generated by the project.

- **Bond NFT (`ANGEBOND`)**
  - Metaplex NFT representing a climate bond.
  - Represents financing claim on future carbon generation.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create environment file:
   ```bash
   cp .env.example .env
   ```
3. Set:
   - `SOLANA_RPC_URL` (Devnet for MVP)
   - `WALLET_SECRET_KEY` (JSON array of wallet secret key bytes)

For local smoke testing without sending transactions, set `DRY_RUN=true` (wallet is optional in this mode).

## Run

- Create only carbon token:
  ```bash
  npm run dev:carbon
  ```
- Create only bond NFT:
  ```bash
  npm run dev:bond
  ```
- Run end-to-end MVP flow:
  ```bash
  npm run start
  ```

## Notes

- Metadata URIs are placeholders and should point to immutable metadata (e.g., Arweave/IPFS) in production.
- Add verification/oracle logic for carbon-credit provenance in the next phase.


## Quick test

```bash
DRY_RUN=true npm run start
```


## Website portal demo

Open `portal/index.html` in a browser to run the 6-step financing + tokenisation simulation.

## Carbon Sequestration Farm NFT-Bond MVP (Proposed)

This MVP can be implemented as a **project-specific financing pool** where NFTs are used as digitally tradable bond units and carbon tokens are streamed to holders as verifiable sequestration outcomes are minted.

### 1) Project setup

- A farm project is created with:
  - project ID and legal entity details,
  - target raise,
  - issuance size,
  - expected sequestration period,
  - payout policy from generated carbon tokens.

### 2) Example issuance model

If the project wants to raise **$100,000**:

- Total NFTs issued: **1,000 Bond NFTs**
- Price per NFT: **$100**
- Each NFT represents:
  - financing participation (bond-like claim),
  - pro-rata right to receive carbon tokens as they are created.

### 3) Subscription and custody

- Investors buy Bond NFTs in the primary sale.
- Funds are routed to a project treasury wallet (or escrow for stronger controls).
- Each NFT has immutable metadata describing economic rights and risk disclosures.

### 4) Carbon issuance and distribution

- As farm sequestration is verified (e.g., monthly/quarterly), carbon tokens are minted to the project distribution account.
- Carbon tokens are distributed to current NFT holders using a snapshot-based pro-rata method:
  - holder share = `NFTs held / total NFTs`.
- Distribution can be push-based (program sends tokens) or claim-based (holders claim).

### 5) Secondary market behavior

- Bond NFTs remain freely transferable/tradable.
- New holders become eligible for future carbon-token distributions after transfer finality.
- This gives liquidity before full project completion, while preserving ongoing upside.

### 6) Minimal on-chain components for MVP

- **Carbon token mint** (`$ANGE` or project-specific mint)
- **Bond NFT collection** (1,000 NFTs for this example)
- **Project state account** (raise target, issuance size, schedule)
- **Distribution logic** (snapshot + pro-rata allocation)
- **Simple compliance controls** (pause, admin roles, disclosure links)

### 7) Off-chain services needed in MVP

- Verification data pipeline (ingest approved sequestration records)
- Distribution scheduler (trigger payouts per epoch)
- Investor portal for:
  - subscription status,
  - wallet holdings,
  - carbon tokens received,
  - distribution history.

### 8) Core risks to disclose

- Verification and issuance timing risk
- Policy/regulatory treatment of tokenized environmental assets
- Market liquidity risk for NFT trading
- Smart-contract and operational risk

### 9) Suggested MVP success metrics

- % of raise completed (target: 100%)
- Number of unique NFT holders
- Time from verification event to token distribution
- Secondary trading activity (volume/holders)
- On-time distribution rate

The MVP demonstrates a practical lifecycle:
1. A climate project requests upfront financing.
2. Bond issuance is split into tradable NFT units.
3. Investors supply capital through primary participation.
4. The project executes and generates verified carbon output.
5. Carbon value is tokenized and distributed under predefined allocation rules.
6. Bond NFTs remain tradable, enabling secondary liquidity before final distribution completion.

The use case shows a blended return structure where investors can combine interim liquidity events with ongoing exposure to future project-linked distributions.

---

## Slide 5 — Why Solana

![8-Solana](./ange%20project/portal/screenshots/8-Solana.jpg)

ANGE positions Solana as a fit-for-purpose execution layer for climate-finance markets:
- **High throughput** supports frequent issuance and trading operations.
- **Low transaction costs** make smaller ticket participation economically viable.
- **Fast settlement** improves operational responsiveness for global participants.
- **Open accessibility** helps bridge traditional capital pools and internet-native investors.

These properties allow ANGE to scale market activity without compromising affordability or user reach.

---

## Vision

![9-Vision](./ange%20project/portal/screenshots/9-Vision.jpg)

ANGE’s long-term vision is to become core infrastructure for tokenized climate finance by enabling:
- **Global project funding access** through programmable digital instruments.
- **Transparent and liquid participation** across institutional and retail-adjacent channels.
- **Interoperable market rails** that connect project output, tokenized value, and investor distribution.

By aligning financing mechanics with transparent on-chain processes, ANGE seeks to expand both climate impact capacity and investable market depth.
