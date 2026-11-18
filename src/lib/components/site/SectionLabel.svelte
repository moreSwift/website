<script lang="ts">
	import { cn } from '$lib/utils.js';

	let {
		index,
		eyebrow,
		inverted = false
	}: { index: string; eyebrow: string; inverted?: boolean } = $props();
</script>

<p
	class={cn(
		'font-mono text-[10px] uppercase tracking-[0.18em]',
		inverted ? 'text-paper/45' : 'text-ink-soft'
	)}
>
	<span class={inverted ? 'text-peach' : 'text-brand'}>{index}</span>
	<span class="px-1.5">/</span>
	{eyebrow}
</p>
