<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils.js';

	let {
		index,
		eyebrow,
		title,
		titleAccent = '',
		lead = '',
		inverted = false,
		breakBeforeAccent = false,
		class: className = '',
		children
	}: {
		index: string;
		eyebrow: string;
		title: string;
		titleAccent?: string;
		lead?: string;
		inverted?: boolean;
		breakBeforeAccent?: boolean;
		class?: string;
		children?: Snippet;
	} = $props();
</script>

<div class={cn('border-t pt-4', inverted ? 'border-white/15' : 'border-line', className)}>
	<p
		class={cn(
			'font-mono text-[10px] uppercase tracking-[0.18em]',
			inverted ? 'text-paper/45' : 'text-ink-soft'
		)}
	>
		<span class={inverted ? 'text-peach' : 'text-brand'}>{index}</span>
		<span class="px-1.5">/</span>
		{eyebrow}
	</p>

	<div class="mt-5 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
		<h2
			class={cn(
				'max-w-[44rem] text-[2.25rem] font-semibold leading-[1.04] tracking-[-0.025em] sm:text-[2.9rem]',
				inverted ? 'text-paper' : 'text-ink'
			)}
		>
			{title}{#if titleAccent}{#if breakBeforeAccent}<br />{/if}<span
					class={cn(
						'italic',
						!breakBeforeAccent && 'ml-[0.22em]',
						inverted ? 'text-peach' : 'text-brand'
					)}>{titleAccent}</span
				>{/if}
		</h2>

		{#if children}
			<div class="flex shrink-0 flex-wrap items-center gap-3">
				{@render children()}
			</div>
		{/if}
	</div>

	{#if lead}
		<p
			class={cn(
				'mt-4 max-w-3xl text-[15px] leading-relaxed',
				inverted ? 'text-paper/70' : 'text-ink-soft'
			)}
		>
			{lead}
		</p>
	{/if}
</div>
