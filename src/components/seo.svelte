<script>
    /**
	 * @type {string | null | undefined}
	 */
     export let title;
    /**
	 * @type {string | null | undefined}
	 */
     export let description;
    /**
	 * @type {boolean}
	 */
     export let article;

     /**
	 * @type {string | null | undefined}
	 */
      export let author;

     /**
	 * @type {string[]}
	 */
      export let keywords;
</script>

<svelte:head>
    <title>{title}</title>
    <meta charset="UTF-8">
    <meta name="keywords" content={keywords ? keywords.join(",") : "komputasi, algoritme" }>
    <meta name="author" content={author ? author : "Komputapedia"}>
    <meta name="description" content={description ? description : "Ensiklopedia Ilmu Komputasi Berbahasa Indonesia"}> <!-- ˜150 chars -->
    <meta property="og:title" content={title ? title: "Komputapedia"}>
    <meta property="og:description" content={description ? description : "Ensiklopedia Ilmu Komputasi Berbahasa Indonesia"}> <!-- ˜300 chars -->
    <meta property="og:site_name" content="Komputapedia">
    <meta property="og:locale" content="id_ID">
    <meta property="og:type" content={article ? "article" : "website"}>
    <meta property="og:url" content="https://komputapedia.web.id">
    <meta property="og:image" content="https://komputpadia.web.id/cover-og.png">
</svelte:head>