<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import GithubLogo from 'phosphor-svelte/lib/GithubLogo';
	import DiscordLogo from 'phosphor-svelte/lib/DiscordLogo';
	import Heart from 'phosphor-svelte/lib/Heart';
	import ArrowUpRight from 'phosphor-svelte/lib/ArrowUpRight';
	import type { CommunityLink } from '$lib/content';

	let { link }: { link: CommunityLink } = $props();

	const icons = {
		github: GithubLogo,
		discord: DiscordLogo,
		sponsor: Heart
	};

	const Icon = $derived(icons[link.icon]);
</script>

<a
	href={link.href}
	target={link.href.startsWith('http') ? '_blank' : undefined}
	rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
	class="group block h-full"
>
	<Card.Root
		class="h-full gap-0 rounded-2xl bg-white/[0.045] p-6 text-paper ring-white/10 backdrop-blur transition duration-300 group-hover:-translate-y-1 group-hover:bg-white/[0.075] group-hover:ring-white/20"
	>
		<div class="flex items-start justify-between gap-3">
			<span
				class="grid size-11 place-items-center rounded-xl bg-white/[0.07] text-peach ring-1 ring-white/10 transition-colors group-hover:text-paper"
			>
				<Icon
					class="size-5"
					weight={link.icon === 'sponsor' ? 'fill' : 'regular'}
					aria-hidden="true"
				/>
			</span>
			<ArrowUpRight
				class="size-4 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-paper"
				weight="bold"
				aria-hidden="true"
			/>
		</div>

		<h3 class="mt-5 text-lg font-bold tracking-[-0.02em]">{link.title}</h3>
		<p class="mt-2 text-[13px] leading-relaxed text-paper/60">{link.description}</p>

		<div class="mt-5 flex items-center justify-between gap-2 border-t border-white/10 pt-4">
			<span class="truncate font-mono text-[9px] tracking-[0.04em] text-paper/40"
				>{link.handle}</span
			>
			<span class="shrink-0 text-[11px] font-semibold text-peach">{link.cta}</span>
		</div>
	</Card.Root>
</a>
