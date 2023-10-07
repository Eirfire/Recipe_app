import fs from 'fs';
import path from 'path';
import { globby } from 'globby';
import prettier from 'prettier';

async function generate() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc');
  const now = new Date().toISOString();
  // const filePath = path.resolve('./public');
  // console.log(filePath);
  // const files = fs.readdirSync(filePath).filter((file) => {
  //   return file.endsWith('.xml') && file.startsWith('sitemap-');
  // });

  const sitemap = `
  <sitmapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
      <loc>http://meally.com.au/sitemap-static.xml</loc>
      <lastmod>${now}</lastmod>
  </sitemap>
  <sitemap>
      <loc>http://meally.com.au/sitemap-recipes.xml</loc>
      <lastmod>${now}</lastmod>
  </sitemap>
  <sitemap>
      <loc>http://meally.com.au/sitemap-users.xml</loc>
      <lastmod>${now}</lastmod>
  </sitemap>
</sitmapindex>
  `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  fs.writeFileSync('./public/sitemap.xml', formatted);
}

async function generateStatic() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc');
  const pages = await globby([
    'app/*.js',
    'app/*.tsx',
    'app/*.ts',
    'app/*.tsx',
    'data/**/*.mdx',
    '!data/*.mdx',
    '!app/_*.js',
    '!app/api',
    '!app/404.tsx',
  ]);

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map((page) => {
            const path = page
              .replace('pages', '')
              .replace('data', '')
              .replace('.js', '')
              .replace('.jsx', '')
              .replace('.ts', '')
              .replace('.tsx', '')
              .replace('.mdx', '');
            const route = path === '/index' ? '' : path;

            return `
              <url>
                  <loc>${`https://meally.com.au${route}`}</loc>
                  <changefreq>weekly</changefreq>
              </url>
            `;
          })
          .join('')}
    </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  // eslint-disable-next-line no-sync
  fs.writeFileSync('public/sitemap-static.xml', formatted);
}

generate();
generateStatic();
