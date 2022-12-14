<!-- SPDX-License-Identifier: GPL-3.0-only -->
<script>
	import {
		Anchor,
		Button,
		Container,
		Text,
		Center,
		Stack,
		Group,
		Space,
		TextInput,
		Image,
		Divider,
		Loader,
		Modal,
		useSvelteUITheme
	} from '@svelteuidev/core';
	import { Pencil1, MagnifyingGlass, Star, Avatar } from 'radix-icons-svelte';
	import { onMount } from 'svelte';
	import SEO from '../components/seo.svelte';

	let popularList = [
		{
			judul: 'Algoritme',
			slug: 'algoritme'
		},
		{
			judul: 'JAM Stack',
			slug: 'jam-stack'
		},
		{
			judul: 'SAFE Stack',
			slug: 'safe-stack'
		}
	];

	let searchField = '';

	let invalidSearchField = false;

	let openContribGuide = false;

	let searching = false;

	let contributorList = [];

	const closeContribGuide = () => {
		openContribGuide = false;
	};

	import { goto } from '$app/navigation';
	const theme = useSvelteUITheme();

	const getEnsiklopediaContributorList = () => {
		fetch('https://api.github.com/repos/komputapedia/ensiklopedia/contributors?anon=1')
			.then((res) => res.json())
			.then((v) => {
				contributorList = v.map((e) => {
					return {
						avatar: e.avatar_url,
						profile: e.html_url
					};
				});
			});
	};

	onMount(() => {
		getEnsiklopediaContributorList();
	});
</script>

<Modal
	opened={openContribGuide}
	on:close={closeContribGuide}
	title="Pindah halaman"
	overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark900 : theme.colors.gray200}
	overlayOpacity={0.55}
	overlayBlur={3}
>
	<Text>Kamu akan dipindahkan ke alamat : <b>https://github.com/komputapedia/ensiklopedia</b></Text>
	<Stack py="xl">
		<Button variant="light" href="https://github.com/komputapedia/ensiklopedia">
			<b>Lanjutkan</b>
		</Button>
		<Button variant="gradient" href="/cara-kontribusi">
			<b>Bagaimana caranya ikut berkontribusi?</b>
		</Button>
	</Stack>
</Modal>

<SEO
	title="Komputapedia - Ensiklopedia Ilmu Komputasi Berbahasa Indonesia"
	description="Ensiklopedia Ilmu Komputasi Berbahasa Indonesia"
	article={false}
	author="edelsora"
	keywords={['algoritme', 'komputasi', 'ensiklopedia']}
/>

<Container>
	<!-- Hero -->
	<Container py="xl">
		<Space />
		<Center>
			<Stack>
				<Text
					weight="bold"
					variant="text"
					align="center"
					color="dark"
					lineClamp={2}
					inline={false}
					override={{ fontSize: '2em', lineHeight: '1.5', fontFamily: 'Space Grotesk' }}
					root="p"
				>
					Ensiklopedia Ilmu Komputasi
					<br /> Terbuka Bahasa Indonesia
				</Text>
				<Container size="xs">
					<Text
						weight="semibold"
						size="md"
						variant="text"
						align="center"
						inline={false}
						override={{
							color: 'var(--svelteui-colors-gray700)'
						}}
					>
						Sebuah inisiatif untuk menyediakan ensiklopedia ilmu komputasi berbahasa Indonesia yang
						terbuka dan gotong royong.
					</Text>
					<Space h="xl" />
				</Container>
				<section
					on:keydown={(e) => {
						switch (e.key) {
							case 'Enter':
								e.preventDefault();
								if (searchField.length == 0) {
									invalidSearchField = true;
								} else {
									invalidSearchField = false;
									searching = true;
									goto('/cari/' + searchField);
								}
								break;
							default:
								invalidSearchField = false;
								break;
						}
					}}
				>
					<TextInput
						id="searchBar"
						bind:value={searchField}
						size="sm"
						override={{
							'font-size': '1em'
						}}
						placeholder="Cari apa yacc ... (e.g Algoritme Quicksort, Kalkulus Lambda)"
						error={invalidSearchField ? 'Isi dulu bosquuu' : ''}
						root="input"
					>
						<svelte:fragment slot="rightSection">
							{#if searching}
								<Loader color="blue" size="xs" />
							{/if}
						</svelte:fragment>
					</TextInput>
				</section>
				<Group align="center" override={{ 'justify-content': 'center' }}>
					<Button
						override={{ margin: '1em' }}
						mx="auto"
						variant="gradient"
						size="md"
						ripple={true}
						loading={searching}
						on:click={() => {
							if (searchField.length == 0) {
								invalidSearchField = true;
							} else {
								invalidSearchField = false;
								searching = true;
								goto('/cari/' + searchField);
							}
						}}
					>
						<MagnifyingGlass size={16} slot="leftIcon" />
						<b> Cari</b>
					</Button>
					<Button
						override={{ margin: '1em' }}
						mx="auto"
						variant="light"
						size="md"
						ripple
						on:click={() => (openContribGuide = true)}
					>
						<Pencil1 size={16} slot="leftIcon" />
						<b> Buat Kontribusi</b>
					</Button>
				</Group>
			</Stack>
		</Center>
	</Container>

	<!-- Popular Pedia -->
	<Container py="xl">
		<Stack>
			<Space h={11} />
			<Text weight="bold" size="xl" root="h2">
				<Star mx={3} /> Pencarian Populer</Text
			>
			<Space h={6} />
			{#if popularList.length == 0}
				<Text size="xl" weight="semibold" root="">Belum ada yang populer sejauh ini.</Text>
			{:else}
				{#each popularList as p}
					<Anchor href={'/indeks/' + p.slug} override={{ 'text-decoration': 'none !important' }}>
						<Text size="xl" weight="medium" root="" override={{ fontFamily: 'Space Grotesk' }}
							>{p.judul}</Text
						>
						<Divider />
					</Anchor>
				{/each}
			{/if}
		</Stack>
	</Container>

	<!-- FAQ-->
	<Container>
		<Space h={11} />
		<Text weight="bold" size="xl" root="h2">
			<Avatar mx={3} />
			Kontributor {contributorList.length == 0
				? ''
				: contributorList.length < 50
				? '(' + contributorList.length + ')'
				: '(50+)'}
		</Text>
		<Space h={6} />
		{#if contributorList.length == 0}
			<Text>Sedang memuat daftar kontributor</Text>
		{:else}
			<Group>
				{#each contributorList as contributor}
					<Anchor href={contributor.profile}>
						<img
							src={contributor.avatar}
							width="50"
							style="border-radius: 100%"
							defer
							alt={contributor.login}
						/>
					</Anchor>
				{/each}
			</Group>
		{/if}
	</Container>
</Container>
