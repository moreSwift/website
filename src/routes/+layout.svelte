<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Nav from "$lib/Nav.svelte";
  import "$lib/assets/worksans.css";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<style>
	:root {
		font-family: "WorkSans";
	}

	main {
		max-width: min(80ch, calc(100% - 1rem));
		margin: auto;
	}
</style>

<Nav />

<main>
	{@render children()}
</main>
