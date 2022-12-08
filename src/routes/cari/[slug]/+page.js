/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	return {
		slug: params.slug
	};
}
