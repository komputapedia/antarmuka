<script>
	export let data;
	import { onMount } from 'svelte';
	import { Divider, Text, Space, Stack, Container } from '@svelteuidev/core';

	let result = [];
	let isLoading = true;

	onMount(async () => {
		const res = await fetch(`/dex.json`);
		if (data.slug) {
			result = (await res.json()).filter((e) => e.judul.toLowerCase() == data.slug.toLowerCase());
		}
		isLoading = false;
	});
</script>

<Container size="md" py="xl">
	{#if isLoading}
		<p>Loading...</p>
	{:else}
		<section>
			<Stack>
				<Text weight="bold" size="xl">Hasil pencarian dari {data.slug}</Text>
				<Space h={3} />
				{#if result.length > 0}
					{#each result as r}
						<Text>
							{r.judul}
						</Text>
						<Divider />
					{/each}
				{:else}
					<Text color="red">Pencarian tidak menemukan hasil yang sesuai</Text>
				{/if}
			</Stack>
		</section>
	{/if}
</Container>
