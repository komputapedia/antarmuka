<!-- SPDX-License-Identifier: GPL-3.0-only -->
<script>
	import { Container, Paper, Text, Grid, Kbd, Group } from '@svelteuidev/core';

	import { Button, Badge } from 'radix-icons-svelte';

	import SEO from '../../../components/seo.svelte';
	/**
	 * @type {{ judul: string; tagar: string[]; kategori: string[]; content: any; }}
	 */
	export let data;
</script>

<SEO
	title={data.judul + '- Komputapedia'}
	description={data.deskripsi ? data.deskripsi : data.judul}
	article={true}
	author="Kontributor Komputapedia"
	keywords={data.tagar}
	follow={true}
	path={'/indeks/' + data.slug}
/>

<style global>
	
	h1,
	h2,
	h3 {
		font-family: 'Space Grotesk', sans-serif;
	}

	.ensiklopedia h1 {
		font-weight: 700;
		margin-top: 31.2px;
		margin-bottom: 12px;
		font-size: 34px;
		line-height: 1.3;
	}

	.ensiklopedia {
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
	}

	.ensiklopedia a {
		color: rgb(34, 139, 230);
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
		text-decoration-line: none;
	}

	.ensiklopedia li {
		margin-top: 10px;
	}

	.ensiklopedia img {
		max-width: 40em;
		width: 100%;
	}

	.ensiklopedia p {
		font-family: "Segoe UI", sans-serif;
		line-height: 1.5;
		font-size: 16px;
	}

</style>

<Container>
	<Grid cols={24}>
		<Grid.Col sm={16} xs={24}>
			 <!-- <TypographyProvider class={getStyles()} >-->
			<section class="ensiklopedia">
				<h1>{data.judul}</h1>
				<!-- <p>Published: {data.date}</p> -->
				<svelte:component this={data.content} />
			</section>
			<!-- </TypographyProvider> -->
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

