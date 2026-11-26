<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import GithubLogo from 'phosphor-svelte/lib/GithubLogo';
	import DiscordLogo from 'phosphor-svelte/lib/DiscordLogo';
	import Heart from 'phosphor-svelte/lib/Heart';
	import ArrowUpRight from 'phosphor-svelte/lib/ArrowUpRight';
	import type { CommunityLink } from '$lib/content';
	import { cn } from '$lib/utils.js';

	let { link }: { link: CommunityLink } = $props();

	const icons = {
		github: GithubLogo,
		discord: DiscordLogo,
		sponsor: Heart
	};

	const Icon = $derived(icons[link.icon]);
	const isSponsor = $derived(link.icon === 'sponsor');
</script>

<a
	href={link.href}
	target={link.href.startsWith('http') ? '_blank' : undefined}
	rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
	class="group block h-full"
>
	<Card.Root
		class={cn(
			'h-full gap-0 rounded-lg border p-5 text-paper shadow-none ring-0 transition-colors',
			isSponsor
				? 'border-sponsor/40 bg-sponsor/10 group-hover:border-sponsor/80 group-hover:bg-sponsor/15'
				: 'border-white/15 bg-transparent group-hover:border-white/40 group-hover:bg-white/[0.025]'
		)}
	>
		<div class="flex items-start justify-between gap-3">
			<span
				class={cn(
					'grid size-10 place-items-center rounded-md border',
					isSponsor
						? 'border-sponsor/40 bg-sponsor/10 text-sponsor-light'
						: 'border-white/15 bg-white/[0.04] text-peach'
				)}
			>
				<Icon class="size-[18px]" weight={isSponsor ? 'fill' : 'regular'} aria-hidden="true" />
			</span>
			<ArrowUpRight
				class="size-4 text-paper/30 transition-colors group-hover:text-paper"
				weight="bold"
				aria-hidden="true"
			/>
		</div>

		<h3 class="mt-5 font-display text-xl font-semibold tracking-[-0.01em]">{link.title}</h3>
		<p class="mt-2 text-[13px] leading-relaxed text-paper/60">{link.description}</p>

		<div class="mt-auto pt-5">
			<div class="flex items-center justify-between gap-2 border-t border-white/10 pt-3">
				<span class="truncate font-mono text-[9px] tracking-[0.03em] text-paper/45"
					>{link.handle}</span
				>
				<span
					class={cn(
						'shrink-0 text-[11px] font-semibold',
						isSponsor ? 'text-sponsor-light' : 'text-peach'
					)}>{link.cta}</span
				>
			</div>
		</div>
	</Card.Root>
</a>
