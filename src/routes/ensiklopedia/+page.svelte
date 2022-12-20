<script lang="ts">
    import type { PageData } from './$types';
    import {
        Container,
        Stack,
        Anchor,
        Text,
        Divider
    } from "@svelteuidev/core";
    
    export let data: PageData;
</script>

<Container override={{"margin": "auto"}} size="xs">
    <Text 
        override={{ fontSize: '2em', lineHeight: '1.5', fontFamily: 'Space Grotesk', fontWeight: "bold" }}
        weight="bold"
        root="h1"
    >Daftar Lengkap Ensiklopedia</Text>
    <Stack>
        {#each data.ensiklopedia as ensiklopedia}
                <Anchor 
                    href={"/indeks/" + ensiklopedia.slug}  
                    color="dark"
                    override={{"text-decoration": "none", "fontFamily": 'Space Grotesk'}}
                    size="xl" 
                    weight="medium" 
                >
                    {ensiklopedia.judul}
                </Anchor>
                <Divider />
        {/each}
    </Stack>
</Container>