from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

steps = [
    ("1) Initial Purchase", "Buys 5 NFTs at $1,000 each", "Total Investment: $5,000"),
    ("2) After 6 Months", "Market price rises as project nears carbon issuance", "Market Price: $1,200 / NFT"),
    ("3) Partial Exit", "Sells 3 NFTs on secondary market at $1,200 each", "Locked Profit: $600"),
    ("4) Keeps 2 NFTs", "Continues receiving future carbon-token distributions", "NFTs Held: 2"),
    ("5) Over 2 Years", "Receives $1,500 equivalent carbon tokens per NFT", "Total Carbon Value: $3,000")
]

out = Path('portal/screenshots')
out.mkdir(parents=True, exist_ok=True)

for i, (title, body, metric) in enumerate(steps, start=1):
    img = Image.new('RGB', (1280, 720), '#0b1320')
    d = ImageDraw.Draw(img)
    d.rectangle((40, 40, 1240, 680), fill='#14243d', outline='#284060', width=3)
    d.text((80, 90), 'ANGE Investor Journey', fill='#95f9e3')
    d.text((80, 170), title, fill='white')
    d.text((80, 280), body, fill='#b9d7ff')
    d.text((80, 390), metric, fill='#40c845')
    d.text((80, 620), f'Step {i}/5', fill='#0a56b5')
    img.save(out / f'step{i}.png')
