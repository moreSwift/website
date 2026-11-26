<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils.js';
	import SectionLabel from './SectionLabel.svelte';
	import SectionTitle from './SectionTitle.svelte';

	let {
		title,
		titleAccent = '',
		lead = '',
		inverted = false,
		breakBeforeAccent = false,
		class: className = '',
		children
	}: {
		title: string;
		titleAccent?: string;
		lead?: string;
		inverted?: boolean;
		breakBeforeAccent?: boolean;
		class?: string;
		children?: Snippet;
	} = $props();
</script>

<div class={cn('', inverted ? 'border-white/15' : 'border-line', className)}>
	<div class="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
		<SectionTitle {title} {titleAccent} {breakBeforeAccent} {inverted} />

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
