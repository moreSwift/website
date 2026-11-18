<script lang="ts">
	import { cn } from '$lib/utils.js';

	let { src, alt, class: className = '' }: { src: string; alt: string; class?: string } = $props();
</script>

<div
	class={cn(
		'relative rounded-[1.15rem] bg-[#3a3530] p-[3px] shadow-[4px_4px_0_rgba(28,25,22,0.16)] ring-1 ring-black/20',
		className
	)}
>
	<div class="rounded-[1.05rem] bg-black p-[2px] ring-1 ring-white/10">
		<div class="overflow-hidden rounded-[0.95rem] bg-black">
			<img {src} {alt} width="553" height="1200" loading="lazy" class="w-full" />
		</div>
	</div>
</div>
