import { describe, it, expect, beforeEach } from 'vitest';
import { JSDOM } from 'jsdom';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const html = fs.readFileSync(path.resolve('portal/index.html'), 'utf-8');
const js = fs.readFileSync(path.resolve('portal/main.js'), 'utf-8');

const boot = () => {
  const dom = new JSDOM(html, { url: 'http://localhost/' });
  const { window } = dom;
  const context = vm.createContext(window);
  vm.runInContext(js, context);
  return window.document;
};

describe('portal simulation', () => {
  let document;

  beforeEach(() => {
    document = boot();
  });

  it('renders issuance summary', () => {
    const text = document.getElementById('issuance').textContent;
    expect(text).toContain('100 Bond NFTs');
    expect(text).toContain('$100,000');
  });

  it('calculates investor funding and share', () => {
    document.getElementById('investorNfts').value = '25';
    document.getElementById('fundBtn').click();
    const result = document.getElementById('fundResult').textContent;
    expect(result).toContain('$25,000');
    expect(result).toContain('25.00%');
  });

  it('calculates 24-month token distribution', () => {
    document.getElementById('investorNfts').value = '10';
    document.getElementById('fundBtn').click();
    document.getElementById('totalCredits').value = '50000';
    document.getElementById('distBtn').click();
    const dist = document.getElementById('distribution').textContent;
    expect(dist).toContain('5,000 ANGE');
    expect(dist).toContain('208.33 ANGE / month');
  });
});
