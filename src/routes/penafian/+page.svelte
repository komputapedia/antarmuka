<!-- SPDX-License-Identifier: GPL-3.0-only -->
<script>
	import { Container, Text, TypographyProvider } from '@svelteuidev/core';
	import SEO from '../../components/seo.svelte';
</script>

<svelte:head>
	<title>Cara Kontribusi - Komputapedia</title>
</svelte:head>

<SEO
	title="Penafian - Komputapedia"
	description="Penafian isi dari Komputapedia"
	article={false}
	author="Komputapedia"
	keywords={['penafian', 'ensiklopedia']}
/>

<Container size="xs">
	<TypographyProvider>
		<h1>Penafian</h1>

		<p>
			Jika Anda memerlukan informasi lebih lanjut atau memiliki pertanyaan tentang penafian situs
			Anda, jangan ragu untuk menghubungi kami melalui diskusi di <a
				href="https://github.com/orgs/komputapedia/discussions"
				>https://github.com/orgs/komputapedia/discussions</a
			>.
		</p>

		<h2>Penafian untuk Komputapedia</h2>

		<p>
			Semua informasi di situs web ini - https://komputapedia.web.id - dipublikasikan dengan itikad
			baik dan untuk tujuan informasi umum saja. Komputapedia tidak memberikan jaminan apa pun
			tentang kelengkapan, keandalan, dan keakuratan informasi ini. Segala tindakan yang Anda ambil
			atas informasi yang Anda temukan di situs web ini (Komputapedia), sepenuhnya merupakan risiko
			Anda sendiri. Komputapedia tidak akan bertanggung jawab atas kerugian dan/atau kerusakan
			sehubungan dengan penggunaan situs web kami.
		</p>

		<p>
			Dari situs web kami, Anda dapat mengunjungi situs web lain dengan mengikuti hyperlink ke situs
			eksternal tersebut. Meskipun kami berusaha untuk hanya menyediakan tautan berkualitas ke situs
			web yang bermanfaat dan etis, kami tidak memilikinya kontrol atas konten dan sifat situs-situs
			tersebut. Tautan ini ke situs web lain tidak menyiratkan rekomendasi untuk semua konten yang
			ditemukan di situs ini. Pemilik dan konten situs dapat berubah tanpa pemberitahuan dan dapat
			terjadi sebelum kami memiliki kesempatan untuk menghapus tautan yang mungkin ada pergi
			'buruk'.
		</p>

		<p>
			Perlu diketahui juga bahwa ketika Anda meninggalkan situs web kami, situs lain mungkin
			memiliki privasi yang berbeda kebijakan dan persyaratan yang berada di luar kendali kami.
			Pastikan untuk memeriksa Kebijakan Privasi situs-situs ini serta "Persyaratan Layanan" mereka
			sebelum terlibat dalam bisnis apa pun atau mengunggah informasi apapun.
		</p>

		<h2>Pesetujuan</h2>

		<p>
			Dengan menggunakan situs web kami, Anda dengan ini menyetujui penafian kami dan menyetujui
			persyaratannya.
		</p>

		<h2>Pembaharuan</h2>

		<p>
			Jika kami memperbarui, mengubah, atau membuat perubahan apa pun pada dokumen ini, perubahan
			itu akan terjadi diposting secara mencolok di sini.
		</p>
	</TypographyProvider>
</Container>
