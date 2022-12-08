<!-- SPDX-License-Identifier: GPL-3.0-only -->
<script>
	import {
		Button,
		Container,
		Text,
		Center,
		Stack,
		Group,
		Space,
		Input,
		Divider,
		InputWrapper
	} from '@svelteuidev/core';
	import { MagnifyingGlass, Star } from 'radix-icons-svelte';

	let popularList = ['Algoritme', 'Turing Complete', 'Teori Bahasa dan Otomata'];

	let searchField = '';

	import { goto } from '$app/navigation';
</script>

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
					override={{ fontSize: '2em', lineHeight: '1.5' }}
					root="p"
				>
					Ensiklopedia Ilmu Komputasi
					<br /> Terbuka Bahasa Indonesia
				</Text>
				<Container override size="xs">
					<Text
						weight="semibold"
						size="md"
						variant="text"
						align="center"
						color="gray"
						inline={false}
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
								goto('/cari/' + searchField);
								break;
						}
					}}
				>
					<InputWrapper label="">
						<Input
							bind:value={searchField}
							size="xs"
							placeholder="Cari apa yacc ... (e.g Algoritme Quicksort, Kalkulus Lambda)"
						/>
					</InputWrapper>
				</section>
				<Group align="center" override={{ 'justify-content': 'center' }}>
					<Button override={{ margin: '1em' }} mx="auto" variant="gradient" size="md" ripple>
						<MagnifyingGlass size={16} slot="leftIcon" />
						<b> Cari</b>
					</Button>
					<Button override={{ margin: '1em' }} mx="auto" variant="light" size="md" ripple>
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
			<Text weight="bold" size="xl" root="h2"><Star mx={3} /> Pencarian Populer</Text>
			<Space h={6} />

			{#each popularList as p}
				<Text size="xl" weight="semibold" root="">{p}</Text>
				<Divider />
			{/each}
		</Stack>
	</Container>

	<!-- FAQ-->
	<Container />
</Container>
