<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils.js';

	let {
		title = 'Terminal',
		tone = 'dark',
		class: className = '',
		children
	}: {
		title?: string;
		tone?: 'dark' | 'light';
		class?: string;
		children?: Snippet;
	} = $props();
</script>

<div
	class={cn(
		'overflow-hidden rounded-xl border backdrop-blur-sm',
		tone === 'dark'
			? 'border-white/12 bg-[#140d20]/80 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.75)]'
			: 'border-border bg-white shadow-sm',
		className
	)}
>
	<div
		class={cn(
			'flex items-center gap-2 border-b px-3 py-2',
			tone === 'dark' ? 'border-white/10' : 'border-border'
		)}
	>
		<span class="flex items-center gap-1.5" aria-hidden="true">
			<span class={cn('size-2 rounded-full', tone === 'dark' ? 'bg-pink/70' : 'bg-pink/50')}></span>
			<span class={cn('size-2 rounded-full', tone === 'dark' ? 'bg-peach/70' : 'bg-peach')}></span>
			<span
				class={cn(
					'size-2 rounded-full',
					tone === 'dark' ? 'bg-emerald-300/60' : 'bg-emerald-400/70'
				)}
			></span>
		</span>
		<span
			class={cn(
				'ml-1 truncate font-mono text-[10px] tracking-[0.06em]',
				tone === 'dark' ? 'text-white/45' : 'text-muted-foreground'
			)}>{title}</span
		>
	</div>
	<div class="p-4 sm:p-5">
		{@render children?.()}
	</div>
</div>
