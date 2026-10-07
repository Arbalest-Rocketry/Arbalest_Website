import fs from "fs";
import path from "path";
import sharp from "sharp";

const inDir = "public/members";
const outDir = "public/members-opt";

// 1080 is fine; if you want *guaranteed fast*, set this to 768
const MAX = 1080;

// 70–80 is a good range. Lower = smaller files.
const QUALITY = 75;

fs.mkdirSync(outDir, { recursive: true });

const okExt = new Set([".jpg", ".jpeg", ".png", ".webp"]);

for (const file of fs.readdirSync(inDir)) {
  const ext = path.extname(file).toLowerCase();
  if (!okExt.has(ext)) continue;

  const input = path.join(inDir, file);
  const base = path.basename(file, ext);
  const output = path.join(outDir, `${base}.webp`);

  await sharp(input)
    .rotate()
    .resize({ width: MAX, height: MAX, fit: "inside", withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(output);

  const inSize = fs.statSync(input).size / 1024;
  const outSize = fs.statSync(output).size / 1024;
  console.log(`${file}: ${inSize.toFixed(0)} KB -> ${outSize.toFixed(0)} KB`);
}
