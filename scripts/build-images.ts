import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const source = path.resolve('assets/source/julia.jpeg');
const outputDir = path.resolve('public/images');
const widths = [480, 768, 1152] as const;

await mkdir(outputDir, { recursive: true });

await Promise.all(
  widths.flatMap((width) => {
    const image = sharp(source).rotate().resize({
      width,
      withoutEnlargement: true,
    });

    return [
      image.clone().webp({ quality: 82 }).toFile(path.join(outputDir, `julia-${width}.webp`)),
      image
        .clone()
        .jpeg({ mozjpeg: true, quality: 84 })
        .toFile(path.join(outputDir, `julia-${width}.jpeg`)),
    ];
  }),
);

console.log(`Generated responsive Julia images in ${path.relative(process.cwd(), outputDir)}`);
