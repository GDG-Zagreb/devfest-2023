const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/gallery/2025');
const outputDir = path.join(__dirname, '../public/gallery/2025');

// Get all JPG files
const files = fs.readdirSync(inputDir).filter(file =>
    file.toLowerCase().endsWith('.jpg')
);

console.log(`Found ${files.length} JPG images to convert...`);

async function optimizeImages() {
    for (const file of files) {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(outputDir, file.replace(/\.jpg$/i, '.webp'));

        try {
            await sharp(inputPath)
                .webp({ quality: 85 })
                .toFile(outputPath);

            const inputStats = fs.statSync(inputPath);
            const outputStats = fs.statSync(outputPath);
            const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(2);

            console.log(`✓ ${file} -> ${path.basename(outputPath)} (${reduction}% smaller)`);
        } catch (error) {
            console.error(`✗ Error converting ${file}:`, error.message);
        }
    }

    console.log('\n✓ Image optimization complete!');
}

optimizeImages();
