<script lang="ts">
	import { page } from '$app/state';
	import { Button } from '$lib/components/ui/button/index.js';
	import ArrowLeft from 'phosphor-svelte/lib/ArrowLeft';
</script>

<svelte:head>
	<title>Page not found — moreSwift</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<div class="flex min-h-[60vh] items-center justify-center py-20">
	<div class="mx-auto max-w-md px-5 text-center">
		<p class="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">
			{page.status === 404 ? '404' : page.status}
		</p>
		<h1 class="mt-3 text-3xl font-semibold tracking-[-0.025em] text-ink sm:text-4xl">
			{page.status === 404 ? 'Page not found.' : 'Something went wrong.'}
		</h1>
		<p class="mt-4 text-[14px] leading-relaxed text-ink-soft">
			{page.status === 404
				? 'The page you were looking for has moved, or never existed. Let’s get you back to safety.'
				: page.error?.message}
		</p>
		<Button
			href="/"
			class="mt-7 h-10 gap-2 rounded-md bg-ink px-4 text-[12px] font-semibold text-paper hover:bg-ink/90"
		>
			<ArrowLeft class="size-4" weight="bold" aria-hidden="true" />
			Back to moreSwift
		</Button>
	</div>
</div>
