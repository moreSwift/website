<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils.js';

	let {
		id,
		tone = 'default',
		grid = false,
		class: className = '',
		children
	}: {
		id?: string;
		tone?: 'default' | 'muted' | 'dark' | 'gradient';
		grid?: boolean;
		class?: string;
		children?: Snippet;
	} = $props();

	const tones = {
		default: 'bg-background',
		muted: 'bg-mist/70',
		dark: 'bg-plum text-paper',
		gradient: 'bg-gradient-to-b from-lilac/60 via-background to-background'
	};
</script>

<section
	{id}
	class={cn(
		'relative overflow-hidden border-b py-20 sm:py-28',
		tone === 'dark' ? 'border-white/10' : 'border-border/70',
		tones[tone],
		className
	)}
>
	{#if grid}
		<div
			class={cn(
				'pointer-events-none absolute inset-0 opacity-30',
				tone === 'dark' ? 'dot-grid-light opacity-15' : 'dot-grid'
			)}
			aria-hidden="true"
		></div>
	{/if}
	<div class="relative shell">
		{@render children?.()}
	</div>
</section>
