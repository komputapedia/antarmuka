<!-- SPDX-License-Identifier: GPL-3.0-only -->
<script>
	import {
		SvelteUIProvider,
		AppShell,
		Header,
		Text,
		Container,
		Group,
		Anchor
	} from '@svelteuidev/core';
</script>

<SvelteUIProvider themeObserver="light">
	<AppShell>
		<Header slot="header" height="3em">
			<Container>
				<Group grow>
					<Anchor href="/" override={{ 'text-decoration': 'none !important' }}>
						<Text
							weight="bold"
							lineClamp={2}
							size="xl"
							override={{ lineHeight: '2', fontFamily: 'Space Grotesk, sans-serif' }}
						>
							<Text
								inherit
								root="span"
								variant="gradient"
								gradient={{ from: 'blue', to: 'cyan', deg: 8 }}
							>
								Komputa</Text
							>pedia
						</Text>
					</Anchor>
					<Group position="right">
						<Anchor
							href="/arah/"
							alt="halaman arah langkah"
							override={{ 'text-decoration': 'none !important' }}
						>
							<Text weight="semibold" inline={false}>Arah</Text>
						</Anchor>
						<Anchor
							href="/kru/"
							alt="halaman tentang kru platform"
							override={{ 'text-decoration': 'none !important' }}
						>
							<Text weight="semibold" inline={false}>Kru</Text>
						</Anchor>
					</Group>
				</Group>
			</Container>
		</Header>
		<slot />
	</AppShell>
</SvelteUIProvider>
