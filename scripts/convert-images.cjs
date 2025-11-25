'use strict';
const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

const repoRoot = process.cwd();
const imagesDir = path.join(repoRoot, 'src', 'assets', 'Project Overview');

const sources = [
  'MyPC.png',
  'WebToolz.png',
  'Linny.png'
];

const sizes = [400, 800, 1200];
const quality = 85;

async function convertOne(srcFile) {
  const srcPath = path.join(imagesDir, srcFile);
  if (!fs.existsSync(srcPath)) {
    console.error(`Source not found: ${srcPath}`);
    return [];
  }

  const baseName = path.parse(srcFile).name;
  const outputs = [];

  for (const w of sizes) {
    const webpOut = path.join(imagesDir, `${baseName}-${w}.webp`);
    const avifOut = path.join(imagesDir, `${baseName}-${w}.avif`);

    try {
      await sharp(srcPath)
        .resize({ width: w })
        .webp({ quality })
        .toFile(webpOut);
      outputs.push(webpOut);
    } catch (err) {
      console.error(`Failed to create ${webpOut}:`, err.message || err);
    }

    try {
      await sharp(srcPath)
        .resize({ width: w })
        .avif({ quality })
        .toFile(avifOut);
      outputs.push(avifOut);
    } catch (err) {
      console.error(`Failed to create ${avifOut}:`, err.message || err);
    }
  }

  return outputs;
}

(async function main(){
  try {
    const created = [];
    for (const s of sources) {
      console.log('Converting', s);
      const outs = await convertOne(s);
      created.push(...outs);
    }

    console.log('\nCreated files:');
    for (const f of created) console.log(' -', path.relative(repoRoot, f));

    console.log('\nDone.');
  } catch (err) {
    console.error('Error during conversion:', err);
    process.exit(1);
  }
})();
