<!-- SPDX-License-Identifier: GPL-3.0-only -->
<script>
	import { page } from '$app/stores';
	import { TypographyProvider, Container, Paper, Text, Grid, Kbd, Group } from '@svelteuidev/core';
</script>

<Container>
	<Text override={{ fontSize: '2em', lineHeight: '1.5' }} root="h1">
		{$page.status}
	</Text>
	<Text weight="semibold" size="md" variant="text" align="center" color="gray" inline={false}>
		{$page.error.message}
	</Text>
</Container>
