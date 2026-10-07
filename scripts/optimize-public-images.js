import fs from "fs";
import path from "path";
import fg from "fast-glob";
import sharp from "sharp";

const IN_ROOT = "public";
const OUT_ROOT = "public-opt";

// Resize rule: keep original size if already small; cap big ones.
const MAX_W = 1920;       // for general site images; set 1080 if you want more aggressive
const QUALITY_WEBP = 75;

fs.mkdirSync(OUT_ROOT, { recursive: true });

const files = await fg([
  `${IN_ROOT}/**/*.{jpg,jpeg,png}`,
  `!${IN_ROOT}/**/favicon*`,      // optional exclusions
  `!${IN_ROOT}/**/icons/**`,      // optional
]);

let savedKBTotal = 0;

for (const file of files) {
  const rel = path.relative(IN_ROOT, file);              // e.g. "hero/banner.jpg"
  const ext = path.extname(file).toLowerCase();
  const base = path.basename(file, ext);
  const outDir = path.join(OUT_ROOT, path.dirname(rel));
  fs.mkdirSync(outDir, { recursive: true });

  // Output as WebP with same relative path
  const outPath = path.join(outDir, `${base}.webp`);

  const inputStat = fs.statSync(file);
  const inputKB = inputStat.size / 1024;

  await sharp(file)
    .rotate()
    .resize({ width: MAX_W, withoutEnlargement: true })
    .webp({ quality: QUALITY_WEBP })
    .toFile(outPath);

  const outputKB = fs.statSync(outPath).size / 1024;
  const savedKB = Math.max(0, inputKB - outputKB);
  savedKBTotal += savedKB;

  console.log(`${rel}: ${inputKB.toFixed(0)} KB -> ${outputKB.toFixed(0)} KB`);
}

console.log(`\n✅ Total saved ~ ${(savedKBTotal / 1024).toFixed(2)} MB`);
console.log(`\nNext: update your image paths from /xxx.jpg to /public-opt/xxx.webp OR copy outputs into /public.`);
