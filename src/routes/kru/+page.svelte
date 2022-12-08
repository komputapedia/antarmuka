<!-- SPDX-License-Identifier: GPL-3.0-only -->
<script>
	import {
		Container,
		TypographyProvider,
		Card,
		Image,
		Text,
		Grid,
		Space,
		Badge,
		Box,
		Group,
		Anchor
	} from '@svelteuidev/core';

	let kru = [
		{
			nama: 'Yoghaswara',
			bio: '2x year-old game developer, software artist and gardener',
			role: ['Inisiator', 'Programmer'],
			link: 'https://github.com/edelsora',
			photo: 'https://avatars.githubusercontent.com/u/100399407?v=4'
		}
	];
</script>

<Container size="xs">
	<TypographyProvider>
		<h1>Kru</h1>
		<p>Kumpulan orang dibalik layar yang mengorganisir platform ini sehingga hadir dihadapanmu.</p>
		<Space h="xl" />
		<Grid>
			{#each kru as k}
				<Grid.Col xs={6}>
					<Anchor href={k.link} override={{ 'text-decoration': 'none !important' }}>
						<Card shadow="sm">
							<Card.Section first padding="lg">
								<Space h="xl" />
								<Image
									src={k.photo}
									height={128}
									width={128}
									alt="dnogl"
									radius={10}
									override={{
										'justify-content': 'center',
										display: 'flex'
									}}
								/>
							</Card.Section>
							<Card.Section>
								<Space h={'sm'} />
								<Text weight={'semibold'} size="xl" align="center">{k.nama}</Text>
								<Space h={'xl'} />
								<Text align="center" inline={false}>{k.bio}</Text>
								<Space h={'xl'} />
								<Group position="center">
									{#each k.role as role}
										<Box>
											<Badge
												gradient={{ from: 'cyan', to: 'red', deg: 15 }}
												variant="gradient"
												radius="sm"
											>
												{role}
											</Badge>
										</Box>
									{/each}
								</Group>
								<Space h={'xl'} />
							</Card.Section>
						</Card>
					</Anchor>
				</Grid.Col>
			{/each}
		</Grid>
	</TypographyProvider>
</Container>
