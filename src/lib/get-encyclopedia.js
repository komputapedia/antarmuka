import { accessSync } from "fs";

// SPDX-License-Identifier: GPL-3.0-only
export async function getEncyclopedia() {
	const entries = Object.entries(import.meta.glob('../content/**/index.md',{"eager": true})).map(([path, post]) => {
			return {
				slug: path.split('/').at(-2),
				metadata: post.metadata
			};
		});

	return entries;
}
