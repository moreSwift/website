<script lang="ts">
	import { cn } from '$lib/utils.js';

	let {
		src,
		alt,
		kind,
		class: className = ''
	}: { src: string; alt: string; kind: 'ios' | 'android'; class?: string } = $props();

	const isAndroid = $derived(kind === 'android');
</script>

<div
	class={cn(
		'relative bg-[#3a3530] p-[3px] shadow-[4px_4px_0_rgba(28,25,22,0.16)] ring-1 ring-black/20',
		isAndroid ? 'rounded-[0.55rem]' : 'rounded-[1.15rem]',
		className
	)}
>
	<div
		class={cn(
			'bg-black p-[2px] ring-1 ring-white/10',
			isAndroid ? 'rounded-[0.4rem]' : 'rounded-[1.05rem]'
		)}
	>
		<div
			class={cn(
				'relative overflow-hidden bg-black',
				isAndroid ? 'rounded-[0.3rem]' : 'rounded-[0.95rem]'
			)}
		>
			<img {src} {alt} width="553" height={isAndroid ? 1229 : 1200} loading="lazy" class="w-full" />
			{#if isAndroid}
				<span
					class="absolute left-1/2 top-[5px] z-10 size-[6px] -translate-x-1/2 rounded-full bg-[#050505] ring-1 ring-white/20"
					aria-hidden="true"
				></span>
			{/if}
		</div>
	</div>
</div>
