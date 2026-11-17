<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils.js';

	let {
		eyebrow,
		title,
		titleAccent = '',
		lead = '',
		inverted = false,
		class: className = '',
		children
	}: {
		eyebrow: string;
		title: string;
		titleAccent?: string;
		lead?: string;
		inverted?: boolean;
		class?: string;
		children?: Snippet;
	} = $props();
</script>

<div class={cn('flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between', className)}>
	<div class="max-w-2xl">
		<p class={cn('eyebrow', inverted && 'text-pink')}>{eyebrow}</p>
		<h2
			class={cn(
				'mt-3 text-3xl font-bold leading-[1.05] tracking-[-0.035em] sm:text-4xl',
				inverted ? 'text-paper' : 'text-ink'
			)}
		>
			{title}{#if titleAccent}<span class="gradient-text ml-[0.22em]">{titleAccent}</span>{/if}
		</h2>
		{#if lead}
			<p
				class={cn(
					'mt-4 max-w-xl text-[15px] leading-relaxed',
					inverted ? 'text-paper/65' : 'text-muted-foreground'
				)}
			>
				{lead}
			</p>
		{/if}
	</div>
	{#if children}
		<div class="flex shrink-0 flex-wrap items-center gap-3">
			{@render children()}
		</div>
	{/if}
</div>
