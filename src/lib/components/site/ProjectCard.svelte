<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import ArrowRight from 'phosphor-svelte/lib/ArrowRight';
	import GithubLogo from 'phosphor-svelte/lib/GithubLogo';
	import Check from 'phosphor-svelte/lib/Check';
	import type { Project } from '$lib/content';
	import { cn } from '$lib/utils.js';
	import ProjectPreview from './ProjectPreview.svelte';

	let { project }: { project: Project } = $props();

	const themes = {
		swiftcrossui: {
			bar: 'bg-scui',
			tile: 'bg-cream',
			kicker: 'text-scui',
			link: 'text-scui hover:text-scui-deep',
			media: 'bg-scui-soft'
		},
		'swift-bundler': {
			bar: 'bg-plum',
			tile: 'bg-cream',
			kicker: 'text-plum',
			link: 'text-plum hover:text-ink',
			media: 'bg-cream'
		}
	} as const;

	const theme = $derived(themes[project.id]);
</script>

<Card.Root
	class="group flex h-full flex-col gap-0 overflow-hidden rounded-lg border border-line bg-card p-0 shadow-none ring-0 transition-colors hover:border-ink/30"
>
	<div class={cn('h-1.5 w-full', theme.bar)}></div>

	<div class="flex flex-1 flex-col p-6 sm:p-7">
		<div class="flex items-start gap-3.5">
			<span
				class={cn(
					'grid size-12 shrink-0 place-items-center overflow-hidden rounded-md border border-ink/10',
					theme.tile
				)}
			>
				<img
					src={project.mark}
					alt={project.markAlt}
					width="418"
					height="418"
					class="size-full object-cover"
				/>
			</span>
			<div class="min-w-0 flex-1">
				<h3 class="text-[1.55rem] font-bold leading-none tracking-[-0.025em] text-ink">
					{project.name}
				</h3>
				<p
					class={cn(
						'mt-2 font-mono text-[9px] uppercase leading-none tracking-[0.13em]',
						theme.kicker
					)}
				>
					{project.kicker}
				</p>
			</div>
		</div>

		<p class="mt-5 font-display text-[1.4rem] italic leading-snug text-ink/80">
			{project.tagline}
		</p>
		<p class="mt-3 text-[13.5px] leading-relaxed text-ink-soft">
			{project.description}
		</p>

		<div
			class={cn(
				'mt-5 aspect-video min-h-[15rem] overflow-hidden rounded-md border border-line',
				theme.media
			)}
		>
			<ProjectPreview {project} />
		</div>

		<ul class="mt-5 space-y-2 border-t border-line pt-4">
			{#each project.features as feature (feature)}
				<li class="flex items-center gap-2 text-[12.5px] leading-snug text-ink-soft">
					<Check class={cn('size-3.5 shrink-0', theme.kicker)} weight="bold" aria-hidden="true" />
					{feature}
				</li>
			{/each}
		</ul>

		<div class="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6">
			<a
				href={project.href}
				class={cn(
					'inline-flex items-center gap-2 text-[15px] font-bold underline-offset-4 transition-colors hover:underline',
					theme.link
				)}
			>
				{project.cta}
				<ArrowRight class="size-4" weight="bold" aria-hidden="true" />
			</a>
			<a
				href={project.github}
				target="_blank"
				rel="noreferrer"
				class="ml-auto inline-flex h-8 items-center gap-1.5 rounded-md border border-line bg-paper-deep/40 px-2.5 text-[12.5px] font-semibold text-ink transition-colors hover:border-ink/25 hover:bg-paper-deep"
			>
				<GithubLogo class="size-4" aria-hidden="true" />
				GitHub
			</a>
		</div>
	</div>
</Card.Root>
