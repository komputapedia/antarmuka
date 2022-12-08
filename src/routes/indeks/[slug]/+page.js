// SPDX-License-Identifier: GPL-3.0-only
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`../../../content/${params.slug}/index.md`);
		const { judul, kategori, tagar } = post.metadata;
		const content = post.default;

		return {
			content,
			judul,
			kategori,
			tagar
		};
	} catch (e) {
		throw error(404, 'Not found');
	}
}
