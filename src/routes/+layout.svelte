<script lang="ts">
	import Nav from "$lib/Nav.svelte";

	let { children } = $props();
</script>

<style>
	:root {
		font-family: "Inter", sans-serif;
		--font-scale: 1.2;
	}

	:global {
		h1, h2, h3, h4, h5, h6 {
			font-family: "Plus Jakarta Sans", sans-serif;
			margin-top: 0;
			margin-bottom: 1rem;
		}

		h6 {
			font-size: calc(var(--font-scale) * 1rem);
		}

		h5 {
			font-size: calc(pow(var(--font-scale), 2) * 1rem);
		}

		h4 {
			font-size: calc(pow(var(--font-scale), 3) * 1rem);
		}

		h3 {
			font-size: calc(pow(var(--font-scale), 4) * 1rem);
		}

		h2 {
			font-size: calc(pow(var(--font-scale), 5) * 1rem);
		}

		h1 {
			font-size: calc(pow(var(--font-scale), 6) * 1rem);
		}
	}

	main {
		max-width: min(80ch, calc(100% - 1rem));
		margin: auto;
		display: flex;
		flex-direction: column;
		margin-bottom: 4rem;
	}

	@media screen and (max-width: 600px) {
		main {
			margin-bottom: 2rem;
		}

		:root {
			--font-scale: 1.1;
		}
	}
</style>

<svelte:head>
	<title>moreSwift</title>
</svelte:head>

<Nav />

<main>
	{@render children()}
</main>
