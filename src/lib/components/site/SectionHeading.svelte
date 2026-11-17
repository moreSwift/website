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
	<div class="flex flex-wrap items-center justify-between gap-4">
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
		{#if children}
			<div class="flex shrink-0 flex-wrap items-center gap-3">
				{@render children()}
			</div>
		{/if}
	</div>

	<div class="mt-5 flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
		<h2
			class={cn(
				'max-w-[42rem] text-[2.25rem] font-semibold leading-[1.04] tracking-[-0.025em] sm:text-[2.9rem]',
				inverted ? 'text-paper' : 'text-ink'
			)}
		>
			{title}{#if titleAccent}{#if breakBeforeAccent}<br />{/if}<span
					class={cn('italic', inverted ? 'text-peach' : 'text-brand')}>{titleAccent}</span
				>{/if}
		</h2>
		{#if lead}
			<p
				class={cn(
					'max-w-[28rem] text-[14px] leading-relaxed lg:pb-1',
					inverted ? 'text-paper/60' : 'text-ink-soft'
				)}
			>
				{lead}
			</p>
		{/if}
	</div>
</div>
