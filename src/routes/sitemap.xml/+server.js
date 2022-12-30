// SPDX-License-Identifier: GPL-3.0-only
import { getEncyclopedia } from '../../lib/get-encyclopedia';

export const GET = async function get() {
	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml'
	};

	const encyclopedias = await getEncyclopedia();
	const website = 'https://www.komputapedia.web.id';

	let resMeta = {
		headers,
		body: `<?xml version="1.0" encoding="UTF-8" ?>
      <urlset
        xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="https://www.w3.org/1999/xhtml"
        xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
      >
      <url>
      <loc>${website}</loc>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
    </url>
    ${encyclopedias
			.map(
				(post) =>
					`
    <url>
      <loc>${website}/indeks/${post.slug}</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>
    `
			)
			.join('')}
      </urlset>`
	};

	return new Response(resMeta.body, { headers });
};
