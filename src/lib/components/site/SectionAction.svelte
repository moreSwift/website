<script lang="ts">
	import type { Snippet } from 'svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import ArrowUpRight from 'phosphor-svelte/lib/ArrowUpRight';

	let {
		href,
		label,
		icon,
		external = false
	}: {
		href: string;
		label: string;
		icon?: Snippet;
		external?: boolean;
	} = $props();
</script>

<Button
	{href}
	variant="outline"
	class="h-9 gap-2 rounded-md border-line bg-transparent px-3.5 text-[12px] font-semibold text-ink shadow-none hover:bg-paper-deep"
	target={external ? '_blank' : undefined}
	rel={external ? 'noreferrer' : undefined}
>
	{@render icon?.()}
	{label}
	<ArrowUpRight class="size-3.5" weight="bold" aria-hidden="true" />
</Button>
