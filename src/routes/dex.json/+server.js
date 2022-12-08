// SPDX-License-Identifier: GPL-3.0-only

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ url }) => {
	const mdModules = import.meta.glob('../../content/**/index.md');
	const posts = await Promise.all(
		Object.keys(mdModules).map(async (path) => {
			const slug = path.split('/').at(-2);
			const { metadata } = await mdModules[path]();
			const { judul, kategori, tagar, sinonim } = metadata;
			return { judul, kategori, tagar, sinonim, slug };
		})
	);

	return new Response(String(JSON.stringify(posts)));
};
