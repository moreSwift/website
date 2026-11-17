<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import ArrowUpRight from 'phosphor-svelte/lib/ArrowUpRight';
	import Play from 'phosphor-svelte/lib/Play';
	import YoutubeLogo from 'phosphor-svelte/lib/YoutubeLogo';
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
		class="h-full w-full gap-0 overflow-hidden rounded-3xl p-0 ring-ink/10 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_60px_-24px_rgba(22,19,31,0.45)]"
	>
		<div class="relative aspect-video overflow-hidden bg-ink">
			<img
				src={video.thumbnail}
				alt={video.alt}
				width="800"
				height="447"
				loading="lazy"
				class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
			/>
			<div
				class="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/5 to-transparent"
				aria-hidden="true"
			></div>

			<span
				class="absolute bottom-3 right-3 grid size-10 place-items-center rounded-full bg-white text-ink shadow-lg transition duration-300 group-hover:scale-110"
				aria-hidden="true"
			>
				<Play class="size-4 translate-x-px" weight="fill" />
			</span>

			<span
				class="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/45 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.08em] text-white/85 backdrop-blur"
			>
				<span class="size-1 rounded-full bg-pink" aria-hidden="true"></span>
				{video.tag}
				<span class="text-white/35">·</span>
				{video.period}
			</span>
		</div>

		<div class="flex flex-1 flex-col p-5">
			<h3
				class="text-[15px] font-bold leading-snug tracking-[-0.01em] text-ink transition-colors group-hover:text-iris"
			>
				{video.title}
			</h3>
			<p class="mt-2 line-clamp-2 text-[13px] leading-relaxed text-muted-foreground">
				{video.description}
			</p>
			<div
				class="mt-auto flex items-center gap-1.5 pt-4 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground transition-colors group-hover:text-ink"
			>
				<YoutubeLogo class="size-3.5 text-pink" weight="fill" aria-hidden="true" />
				Watch on YouTube
				<ArrowUpRight class="size-3" weight="bold" aria-hidden="true" />
			</div>
		</div>
	</Card.Root>
</a>
