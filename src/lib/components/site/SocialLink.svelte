<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils.js';

	let {
		href,
		label,
		icon,
		tone = 'default',
		external = false
	}: {
		href: string;
		label: string;
		icon: Snippet;
		tone?: 'default' | 'sponsor';
		external?: boolean;
	} = $props();

	const tones = {
		default: 'border-white/15 text-paper/70 hover:border-white/40 hover:text-paper',
		sponsor:
			'border-sponsor/40 bg-sponsor/10 text-sponsor-light hover:border-sponsor/70 hover:text-white'
	} as const;
</script>

<a
	{href}
	target={external ? '_blank' : undefined}
	rel={external ? 'noreferrer' : undefined}
	class={cn(
		'inline-flex items-center gap-2 rounded-md border px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.1em] transition-colors',
		tones[tone]
	)}
>
	{@render icon()}
	{label}
</a>
