<!-- SPDX-License-Identifier: GPL-3.0-only -->
<script>
	export let data;
	import { onMount } from 'svelte';
	import { Divider, Text, Space, Stack, Container, Anchor, Skeleton } from '@svelteuidev/core';
	import { searchStorable } from '../../../stores/searchIndex';
	import Fuse from 'fuse.js';

	let result = [];
	let isLoading = true;

	onMount(async () => {
		window
			.fetch(`/dex.json`)
			.then((res) => res.json())
			.then((e) => {
				if (data.slug) {
					const options = {
						includeScore: true,
						// Search in `author` and in `tags` array
						keys: ['judul', 'sinonim']
					};

					const search = new Fuse(e, options);

					result = search.search(data.slug);
				}
			})
			.finally(() => {
				isLoading = false;
			});
	});
</script>

<Container size="md" py="xl">
	{#if isLoading}
		<Text weight="bold" size="xl">Hasil pencarian dari {data.slug}</Text>
		<Space h={16} />
		<Skeleton height={12} radius="xl" override={{ marginTop: '8px' }} />
		<Divider />
		<Skeleton height={12} radius="xl" override={{ marginTop: '8px' }} />
		<Divider />
		<Skeleton height={12} radius="xl" override={{ marginTop: '8px' }} />
		<Divider />
		<Skeleton height={12} radius="xl" override={{ marginTop: '8px' }} />
		<Divider />
		<Skeleton height={12} radius="xl" override={{ marginTop: '8px' }} />
		<Divider />
		<Skeleton height={12} radius="xl" override={{ marginTop: '8px' }} />
	{:else}
		<section>
			<Stack>
				<Text weight="bold" size="xl">Hasil pencarian dari {data.slug}</Text>
				<Space h={16} />
				{#if result.length > 0}
					{#each result as r}
						<Anchor href={'/indeks/' + r.item.slug} override={{ 'text-decoration': 'none' }}>
							<Text>
								{r.item.judul}
							</Text>
							<Divider />
						</Anchor>
					{/each}
				{:else}
					<Text color="red">Pencarian tidak menemukan hasil yang sesuai</Text>
				{/if}
			</Stack>
		</section>
	{/if}
</Container>
