<script lang="ts">
	import { page } from '$app/state';
</script>

<style>
	p {
		text-align: center;
		font-size: 1.2rem;
		margin-top: 3rem;
	}
</style>

{#if page.error?.message == "Not Found"}
	<p>Page not found. <a href="/">Return home?</a></p>
{:else}
	<p>{page.error?.message}</p>
{/if}
