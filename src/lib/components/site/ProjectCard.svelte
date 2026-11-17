<script lang="ts">
	import type { Snippet } from 'svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import ArrowRight from 'phosphor-svelte/lib/ArrowRight';
	import GithubLogo from 'phosphor-svelte/lib/GithubLogo';
	import Check from 'phosphor-svelte/lib/Check';
	import type { Project } from '$lib/content';
	import { cn } from '$lib/utils.js';

	let {
		project,
		tone = 'light',
		media,
		class: className = ''
	}: {
		project: Project;
		tone?: 'light' | 'dark';
		media: Snippet;
		class?: string;
	} = $props();
</script>

<Card.Root
	class={cn(
		'group h-full gap-0 overflow-hidden rounded-[1.75rem] py-0 ring-1 transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-28px_rgba(22,19,31,0.5)]',
		tone === 'dark'
			? 'bg-plum text-paper ring-white/10'
			: 'bg-card text-card-foreground ring-ink/10',
		className
	)}
>
	<div class="relative overflow-hidden">{@render media()}</div>

	<div class="flex flex-1 flex-col p-6 sm:p-7">
		<div class="flex flex-wrap items-center gap-2.5">
			<span
				class={cn(
					'font-mono text-[10px] uppercase leading-none tracking-[0.16em]',
					tone === 'dark' ? 'text-peach/80' : 'text-iris'
				)}>{project.kicker}</span
			>
			{#if project.badge}
				<Badge
					variant="outline"
					class={cn(
						'h-auto rounded-full px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.08em]',
						tone === 'dark'
							? 'border-white/15 bg-white/5 text-paper/75'
							: 'border-iris/15 bg-lilac text-iris'
					)}>{project.badge}</Badge
				>
			{/if}
		</div>

		<h3
			class={cn(
				'mt-3 text-[1.65rem] font-bold leading-[1.05] tracking-[-0.035em] sm:text-[1.9rem]',
				tone === 'dark' ? 'text-paper' : 'text-ink'
			)}
		>
			{project.tagline}
		</h3>

		<p
			class={cn(
				'mt-3 text-[13.5px] leading-relaxed',
				tone === 'dark' ? 'text-paper/65' : 'text-muted-foreground'
			)}
		>
			{project.description}
		</p>

		{#if project.features}
			<ul class="mt-5 space-y-2.5">
				{#each project.features as feature (feature)}
					<li
						class={cn(
							'flex items-start gap-2.5 text-[13px] leading-snug',
							tone === 'dark' ? 'text-paper/75' : 'text-ink-soft'
						)}
					>
						<span
							class={cn(
								'mt-px grid size-[18px] shrink-0 place-items-center rounded-full',
								tone === 'dark' ? 'bg-white/10 text-peach' : 'bg-lilac text-iris'
							)}
						>
							<Check class="size-3" weight="bold" aria-hidden="true" />
						</span>
						{feature}
					</li>
				{/each}
			</ul>
		{/if}

		<div class="mt-auto flex flex-wrap items-center gap-2 pt-7">
			<Button
				href={project.href}
				size="lg"
				class={cn(
					'h-10 gap-2 px-4 text-[13px] font-semibold',
					tone === 'dark'
						? 'bg-paper text-plum hover:bg-white'
						: 'bg-ink text-paper hover:bg-ink/90'
				)}
			>
				{project.cta}
				<ArrowRight class="size-4" weight="bold" aria-hidden="true" />
			</Button>
			<Button
				href={project.github}
				variant="ghost"
				size="icon"
				class={cn(
					'rounded-full',
					tone === 'dark'
						? 'text-paper/60 hover:bg-white/10 hover:text-paper'
						: 'text-muted-foreground hover:bg-muted hover:text-ink'
				)}
				aria-label={`${project.name} on GitHub`}
			>
				<GithubLogo class="size-4" aria-hidden="true" />
			</Button>
		</div>
	</div>
</Card.Root>
