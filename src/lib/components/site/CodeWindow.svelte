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
		'flex min-w-0 flex-col overflow-hidden rounded-md border',
		tone === 'dark' ? 'border-white/10 bg-[#241c18] text-paper' : 'border-line bg-card text-ink',
		className
	)}
>
	<div
		class={cn(
			'flex items-center gap-2 border-b px-3 py-2',
			tone === 'dark' ? 'border-white/10' : 'border-line'
		)}
	>
		<span class="flex items-center gap-1.5" aria-hidden="true">
			<span class={cn('size-1.5 rounded-full', tone === 'dark' ? 'bg-paper/25' : 'bg-ink/20')}
			></span>
			<span class={cn('size-1.5 rounded-full', tone === 'dark' ? 'bg-paper/25' : 'bg-ink/20')}
			></span>
			<span class={cn('size-1.5 rounded-full', tone === 'dark' ? 'bg-paper/25' : 'bg-ink/20')}
			></span>
		</span>
		<span
			class={cn(
				'ml-1 truncate font-mono text-[10px] tracking-[0.04em]',
				tone === 'dark' ? 'text-paper/45' : 'text-ink-soft'
			)}>{title}</span
		>
	</div>
	<div class="flex-1 p-4">
		{@render children?.()}
	</div>
</div>
