// SPDX-License-Identifier: GPL-3.0-only
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	return {
		slug: params.slug
	};
}
