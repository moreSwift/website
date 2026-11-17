<script lang="ts">
	import type { Value } from '$lib/content';

	let { number, value }: { number: string; value: Value } = $props();
</script>

<div class="grid grid-cols-[2rem_1fr] gap-4 border-b border-line py-5">
	<span class="pt-0.5 font-mono text-[10px] tracking-[0.08em] text-brand">{number}</span>
	<div>
		<h3 class="text-[15px] font-bold tracking-[-0.01em] text-ink">{value.title}</h3>
		<p class="mt-1.5 text-[13px] leading-relaxed text-ink-soft">{value.description}</p>
	</div>
</div>
