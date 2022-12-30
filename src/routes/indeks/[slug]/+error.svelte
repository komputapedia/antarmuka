<!-- SPDX-License-Identifier: GPL-3.0-only -->
<script>
	import { page } from '$app/stores';
	import { TypographyProvider, Container, Paper, Text, Grid, Kbd, Group } from '@svelteuidev/core';
</script>

<Container override={{ marginBottom: '2em' }}>
	<Text override={{ fontSize: '2em', lineHeight: '1.5' }} root="h1" align="center">
		{$page.status}
	</Text>
	<Text
		weight="semibold"
		size="md"
		variant="text"
		align="center"
		color="dark"
		mb={10}
		inline={false}
	>
		{$page.error.message}
	</Text>
</Container>
