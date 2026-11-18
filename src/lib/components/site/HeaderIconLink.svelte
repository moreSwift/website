<script lang="ts">
	import type { Snippet } from 'svelte';
	import { Button } from '$lib/components/ui/button/index.js';

	let {
		href,
		label,
		icon,
		external = false
	}: {
		href: string;
		label: string;
		icon: Snippet;
		external?: boolean;
	} = $props();
</script>

<Button
	{href}
	variant="ghost"
	size="icon"
	class="hidden size-10 rounded-md border border-transparent text-ink-soft hover:border-line hover:bg-paper-deep hover:text-ink sm:inline-flex"
	aria-label={label}
	target={external ? '_blank' : undefined}
	rel={external ? 'noreferrer' : undefined}
>
	{@render icon()}
</Button>
