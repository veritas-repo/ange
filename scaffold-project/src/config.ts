import dotenv from 'dotenv';
import { Keypair, PublicKey } from '@solana/web3.js';

dotenv.config();

export const RPC_URL = process.env.SOLANA_RPC_URL ?? 'https://api.devnet.solana.com';

export const keypairFromEnv = (): Keypair => {
  const raw = process.env.WALLET_SECRET_KEY;
  if (!raw) throw new Error('Missing WALLET_SECRET_KEY in .env');
  const secret = Uint8Array.from(JSON.parse(raw) as number[]);
  return Keypair.fromSecretKey(secret);
};

export const toPubkey = (value: string): PublicKey => new PublicKey(value);
