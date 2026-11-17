<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import ArrowUpRight from 'phosphor-svelte/lib/ArrowUpRight';
	import Play from 'phosphor-svelte/lib/Play';
	import type { Video } from '$lib/content';

	let { video }: { video: Video } = $props();
</script>

<a
	href={video.href}
	target="_blank"
	rel="noreferrer"
	class="group flex h-full"
	aria-label={`Watch “${video.title}” on YouTube`}
>
	<Card.Root
		class="h-full w-full gap-0 overflow-hidden rounded-lg border border-line bg-card p-0 shadow-none ring-0 transition-colors group-hover:border-ink/30"
	>
		<div class="relative aspect-video overflow-hidden border-b border-line bg-ink">
			<img
				src={video.thumbnail}
				alt={video.alt}
				width="800"
				height="447"
				loading="lazy"
				class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
			/>
			<span
				class="absolute bottom-2.5 right-2.5 grid size-9 place-items-center rounded-full bg-paper text-ink shadow-[2px_2px_0_rgba(28,25,22,0.25)]"
				aria-hidden="true"
			>
				<Play class="size-3.5 translate-x-px" weight="fill" />
			</span>
		</div>

		<div class="flex flex-1 flex-col p-5">
			<p class="font-mono text-[9px] uppercase tracking-[0.12em]">
				<span class="text-brand">{video.tag}</span>
				<span class="px-1.5 text-line">/</span>
				<span class="text-ink-soft">{video.period}</span>
			</p>
			<h3 class="mt-2 text-[15px] font-semibold leading-snug text-ink">
				{video.title}
			</h3>
			<p class="mt-2 line-clamp-2 text-[13px] leading-relaxed text-ink-soft">
				{video.description}
			</p>
			<div
				class="mt-auto flex items-center gap-1.5 pt-4 text-[11px] font-medium text-ink-soft transition-colors group-hover:text-ink"
			>
				Watch on YouTube
				<ArrowUpRight class="size-3.5" weight="bold" aria-hidden="true" />
			</div>
		</div>
	</Card.Root>
</a>
