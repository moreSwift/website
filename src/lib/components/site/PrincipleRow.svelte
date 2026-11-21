<script lang="ts">
	import type { Principle } from '$lib/content';
	import { cn } from '$lib/utils';

	let { number, principle, isLast }: { number: string; principle: Principle; isLast: boolean } =
		$props();
</script>

<div
	class={cn('grid grid-cols-[2rem_1fr] gap-0 sm:gap-4 py-5', isLast ? '' : 'border-b border-line')}
>
	<span class="pt-1 font-mono text-[16px] tracking-[0.08em] text-brand">{number}</span>
	<div>
		<h3 class="text-[18px] font-bold tracking-[-0.01em] text-ink">{principle.title}</h3>
		<p class="mt-1.5 pl-0.25 text-[16px] leading-relaxed text-ink-soft">{principle.description}</p>
	</div>
</div>
