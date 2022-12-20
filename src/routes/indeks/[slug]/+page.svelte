<!-- SPDX-License-Identifier: GPL-3.0-only -->
<script>
	import { TypographyProvider, Container, Paper, Text, Grid, Kbd, Group } from '@svelteuidev/core';

	import { Button, Badge } from 'radix-icons-svelte';

	import SEO from '../../../components/seo.svelte';

	/**
	 * @type {{ judul: string; tagar: string[]; kategori: string[]; content: any; }}
	 */
	export let data;
</script>

<SEO
	title={data.judul + '- Komputapedia'}
	description={data.judul}
	article={false}
	author="Kontributor Komputapedia"
	keywords={data.tagar}
/>

<Container>
	<Grid cols={24}>
		<Grid.Col sm={16} xs={24}>
			<TypographyProvider className="ensiklopedia">
				<h1>{data.judul}</h1>
				<!-- <p>Published: {data.date}</p> -->
				<svelte:component this={data.content} />
			</TypographyProvider>
		</Grid.Col>
		<Grid.Col sm={8} xs={24}>
			<Container>
				<Paper>
					<Grid>
						<Grid.Col>
							<Text>
								<Button />
								Kategori:
								<Group my={8}>
									{#each data.kategori as kategori}
										<Kbd color="cyan" variant="filled" radius="md">{kategori}</Kbd>
									{/each}
								</Group>
							</Text>
						</Grid.Col>
						<Grid.Col>
							<Text>
								<Badge />
								Tagar:
								<ul style="list-disc-style: none">
									{#each data.tagar as tagar}
										<li>{tagar}</li>
									{/each}
								</ul>
							</Text>
						</Grid.Col>
					</Grid>
				</Paper>
			</Container>
		</Grid.Col>
	</Grid>
</Container>

<style>
	.ensiklopedia h1,
	h2,
	h3 {
		font-family: 'Space Grotesk', sans-serif;
	}
</style>
