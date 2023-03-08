<script lang="ts">
    //Import style here
    import './styles.css';

    // Import data here
    import type { LayoutData } from './$types';
    export let data: LayoutData;

    // Import components here
    import Header from '$lib/components/Header.svelte';
    // import Footer from '$lib/components/Footer.svelte';
    console.log(data)
</script>


{#if data.maintenance}
    <h1>Maintenance mode</h1>
    <p>We'll be back in a few minutes.</p>
{:else}
    <Header />
    <slot />
{/if}