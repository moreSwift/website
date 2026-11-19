<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils.js';

	let {
		id,
		tone = 'default',
		class: className = '',
		children
	}: {
		id?: string;
		tone?: 'default' | 'muted' | 'dark';
		class?: string;
		children?: Snippet;
	} = $props();

	const tones = {
		default: 'bg-background',
		muted: 'bg-paper-deep/45',
		dark: 'bg-ink text-paper'
	};
</script>

<section
	{id}
	class={cn(
		'relative border-b py-12 sm:py-24',
		tone === 'dark' ? 'border-white/10' : 'border-line',
		tones[tone],
		className
	)}
>
	<div class="relative shell">
		{@render children?.()}
	</div>
</section>
