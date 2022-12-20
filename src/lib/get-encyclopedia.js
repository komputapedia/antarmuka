// SPDX-License-Identifier: GPL-3.0-only 
export async function getEncyclopedia() {
	const entries = await Object.entries(import.meta.glob('../content/**/index.md'))
		// get post metadata
		.map(([path, post]) => {
			return {
				slug: path.split('/').at(-2),
				meta: post.metadata
			};
		})
		// sort by date
		.sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));

	return entries;
}
