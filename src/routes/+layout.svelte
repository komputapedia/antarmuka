<!-- SPDX-License-Identifier: GPL-3.0-only -->
<script>
	import {
		SvelteUIProvider,
		AppShell,
		Header,
		Text,
		Container,
		Group,
		Anchor,
		Badge,
		Divider
	} from '@svelteuidev/core';

	import { GithubLogo } from 'radix-icons-svelte';

	import '@fontsource/space-grotesk/700.css';
	import '@fontsource/space-grotesk';
</script>

<SvelteUIProvider themeObserver="light">
	<AppShell>
		<Header slot="header" height="3em">
			<Container>
				<Group grow>
					<Group position="left" override={{ 'max-width': '100%' }}>
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
						<Badge color="blue" size="sm" radius="sm" variant="dot">Beta</Badge>
					</Group>
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
						<Anchor
							href="https://github.com/komputapedia"
							alt="repository github"
							override={{ 'text-decoration': 'none !important' }}
							class="github-logo"
						>
							<GithubLogo size={22} color="black" />
						</Anchor>
					</Group>
				</Group>
			</Container>
		</Header>
		<slot />
		<Container>
			<Divider />
			<Group>
				<Anchor
					color="dark"
					href="/penafian"
					override={{ 'text-decoration': 'none', margin: 'auto' }}>Penafian</Anchor
				>
			</Group>
		</Container>
	</AppShell>
</SvelteUIProvider>

<style>
</style>
