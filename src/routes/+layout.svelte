<script lang="ts">
    //Import style here
    import './styles.css';

    // Import data here
    import type { LayoutData } from './$types';
    export let data: LayoutData;
    import { page } from '$app/stores';
    import {redirect} from "@sveltejs/kit";

    // Import components here
    import Header from '$lib/components/Header.svelte';
    // import Footer from '$lib/components/Footer.svelte';

    // Check if maintenance is true and the current url pathname is not /maintenance
    if (data.maintenance && $page.url.pathname !== '/maintenance') {
        // if maintenance is true, redirect to maintenance page
        throw redirect(302, '/maintenance')
    }
    // Check if maintenance is false and the current url pathname is /maintenance
    else if (!data.maintenance && $page.url.pathname === '/maintenance') {
        // if maintenance is false, redirect to home page
        throw redirect(302, '/')
    }

</script>


{#if data.maintenance}
    <slot />
{:else}
    <Header />
    <slot />
{/if}