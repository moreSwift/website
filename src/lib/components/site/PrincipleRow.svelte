<script lang="ts">
	import type { Principle } from '$lib/content';

	let { number, principle }: { number: string; principle: Principle } = $props();
</script>

<div class="grid grid-cols-[2rem_1fr] gap-0 sm:gap-4 border-b border-line py-5">
	<span class="pt-1 font-mono text-[10px] tracking-[0.08em] text-brand">{number}</span>
	<div>
		<h3 class="text-[15px] font-bold tracking-[-0.01em] text-ink">{principle.title}</h3>
		<p class="mt-1.5 text-[13px] leading-relaxed text-ink-soft">{principle.description}</p>
	</div>
</div>
