<script lang="ts">
	import Logo from './Logo.svelte';
	import { cn } from '$lib/utils.js';

	let {
		inverted = false,
		compact = false,
		class: className = ''
	}: { inverted?: boolean; compact?: boolean; class?: string } = $props();
</script>

<a href="/" class={cn('inline-flex items-center gap-3', className)} aria-label="moreSwift home">
	<span
		class={cn(
			'grid size-9 shrink-0 place-items-center rounded-md',
			inverted ? 'bg-paper text-ink' : 'bg-ink text-paper'
		)}
	>
		<Logo class="h-4 w-auto" />
	</span>
	<span class="flex flex-col">
		<span
			class={cn(
				'font-display text-[19px] font-bold leading-none tracking-[-0.02em]',
				inverted ? 'text-paper' : 'text-ink'
			)}>moreSwift</span
		>
		{#if !compact}
			<span
				class={cn(
					'mt-1 font-mono text-[8px] uppercase leading-none tracking-[0.18em]',
					inverted ? 'text-paper/45' : 'text-muted-foreground'
				)}>Swift, everywhere</span
			>
		{/if}
	</span>
</a>
