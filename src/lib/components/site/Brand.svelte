<script lang="ts">
	import Logo from './Logo.svelte';
	import { cn } from '$lib/utils.js';

	let {
		inverted = false,
		compact = false,
		class: className = ''
	}: { inverted?: boolean; compact?: boolean; class?: string } = $props();
</script>

<a
	href="/"
	class={cn('group inline-flex items-center gap-3', className)}
	aria-label="moreSwift home"
>
	<span
		class="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-iris via-violet to-pink text-white shadow-[0_6px_18px_-6px_rgba(232,52,138,0.65)] transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105"
	>
		<Logo class="h-[18px] w-auto" />
	</span>
	<span class="flex flex-col">
		<span
			class={cn(
				'font-display text-[17px] font-bold leading-none tracking-[-0.03em]',
				inverted ? 'text-paper' : 'text-ink'
			)}>moreSwift</span
		>
		{#if !compact}
			<span
				class={cn(
					'mt-1 font-mono text-[8px] uppercase leading-none tracking-[0.2em]',
					inverted ? 'text-paper/45' : 'text-muted-foreground'
				)}>Swift, everywhere</span
			>
		{/if}
	</span>
</a>
