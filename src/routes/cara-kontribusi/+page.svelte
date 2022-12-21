<!-- SPDX-License-Identifier: GPL-3.0-only -->
<script>
	import { Container, Text, TypographyProvider } from '@svelteuidev/core';
	import SEO from '../../components/seo.svelte';
</script>

<svelte:head>
	<title>Cara Kontribusi - Komputapedia</title>
</svelte:head>

<SEO
	title="Cara Kontribusi - Komputapedia"
	description="Cara ikut bergotong royong bersama Komputapedia"
	article={true}
	author="Komputapedia"
	keywords={['kontribusi', 'ensiklopedia']}
/>

<Container size="xs">
	<TypographyProvider>
		<h1>Cara ikut berkontribusi</h1>

		<p>
			Terima kasih sudah menyempatkan niat untuk berkontribusi. Komputapedia tidak dibangun
			sendirian oleh inisiator tetapi secara bergotong royong termoderasi. Kamu bisa ikut serta
			membangun dengan memberikan usaha, waktu dan pikiran untuk mendorong komputapedia menjadi
			lebih baik dari sebelumnya.
		</p>

		<p>
			Komputapedia diperantarakan melalui GitHub, maka perlu memiliki akun GitHub untuk melakukan
			kontribusi ke ensiklopedia. Kontribusi yang kamu bisa lakukan yaitu:
		</p>

		<ul>
			<li>Menambahkan halaman ensiklopedia baru.</li>
			<li>Memperbaiki, Menambahkan dan Menyusun halaman ensiklopedia.</li>
			<li>
				Melaporkan masalah bila ada bug dan halaman ensiklopedia yang bermasalah atau menyimpang.
			</li>
		</ul>

		<p>
			Panduan selengkapnya untuk kontribusi entri ensiklopedia bisa kunjungi <a
				href="https://github.com/komputapedia/ensiklopedia/blob/main/CONTRIBUTE.md"
				alt="tautan panduan halaman kontribusi">halaman kontribusi</a
			>.
		</p>

		<p>
			Jika kamu memiliki kemampuan pemrogramaan dan ingin berkontribusi ke basis kode Komputapedia,
			maka kamu bisa berkontribusi dengan:
		</p>

		<ul>
			<li>Mengajukan atau menambahkan fitur.</li>
			<li>Memperbaiki issue yang ada di Antarmuka atau basis kode Komputapedia yang lain.</li>
			<li>
				Melakukan pengujian kualitas, penambahan unit uji, dan perbaikan kualitas kode pada basis
				kode yang ada.
			</li>
		</ul>

		<p>
			<a href="https://github.com/komputapedia/antarmuka/">Repositori halaman antarmuka</a>.
		</p>

		<p>
			Kontribusi secara moneter sedang tidak tersedia. Kontribusi semacam ini akan dimanfaatkan
			untuk membayar keperluan infrastruktur dan kepengurusan halaman ensiklopedia.
		</p>
	</TypographyProvider>
</Container>
