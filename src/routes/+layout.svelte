<script lang="ts">
	import Nav from "$lib/Nav.svelte";

	let { children } = $props();
</script>

<style>
	:root {
		font-family: "Inter", sans-serif;
	}

	:global {
		h1, h2, h3, h4, h5, h6 {
			font-family: "Plus Jakarta Sans", sans-serif;
			margin-top: 0;
			margin-bottom: 1rem;
		}

		h6 {
			font-size: 1.25rem;
		}

		h5 {
			font-size: pow(1.25rem, 2);
		}

		h4 {
			font-size: pow(1.25rem, 3);
		}

		h3 {
			font-size: pow(1.25rem, 4);
		}

		h2 {
			font-size: pow(1.25rem, 5);
		}

		h1 {
			font-size: pow(1.25rem, 6);
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
	}
</style>

<Nav />

<main>
	{@render children()}
</main>
