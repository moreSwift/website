<script lang="ts">
	import './layout.css';
	import SiteHeader from '$lib/components/site/SiteHeader.svelte';
	import SiteFooter from '$lib/components/site/SiteFooter.svelte';
	import { site } from '$lib/site';

	let { children } = $props();
</script>

<svelte:head>
	<title>moreSwift — Native Swift apps, everywhere</title>
	<meta name="description" content={site.description} />
	<meta property="og:title" content="moreSwift — Native Swift apps, everywhere" />
	<meta property="og:description" content={site.description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://moreswift.dev/" />
	<meta property="og:site_name" content="moreSwift" />
	<meta property="og:image" content="https://moreswift.dev/og.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="moreSwift — Native Swift apps, everywhere" />
	<meta name="twitter:description" content={site.description} />
	<meta name="twitter:image" content="https://moreswift.dev/og.png" />
</svelte:head>

<a
	href="#main"
	class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
>
	Skip to content
</a>

<div id="top"></div>
<SiteHeader />
<main id="main">
	{@render children()}
</main>
<SiteFooter />
