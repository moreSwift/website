<script lang="ts">
	import Nav from "$lib/Nav.svelte";
  import "$lib/assets/worksans.css";

	let { children } = $props();
</script>

<style>
	:root {
		font-family: "WorkSans";
	}

	main {
		max-width: min(80ch, calc(100% - 1rem));
		margin: auto;
		display: flex;
		flex-direction: column;
	}
</style>

<Nav />

<main>
	{@render children()}
</main>
