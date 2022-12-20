import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    const mdModules = import.meta.glob('../../content/**/index.md');
	const ensiklopedia = await Promise.all(
		Object.keys(mdModules).map(async (path) => {
			var slug = path.split('/').at(-2);
			const { metadata } = await mdModules[path]();
			const { judul, kategori, tagar, sinonim } = metadata;
            if(slug == undefined){
                slug = ""
            }
			return { judul, kategori, tagar, sinonim, slug };
		})
	);
    return {
        ensiklopedia
    };
};