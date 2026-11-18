<script lang="ts">
	import { cn } from '$lib/utils.js';

	let {
		title,
		titleAccent = '',
		breakBeforeAccent = false,
		inverted = false
	}: {
		title: string;
		titleAccent?: string;
		breakBeforeAccent?: boolean;
		inverted?: boolean;
	} = $props();
</script>

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
