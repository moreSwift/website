<script lang="ts">
	import Hero from '$lib/components/site/Hero.svelte';
	import Section from '$lib/components/site/Section.svelte';
	import SectionHeading from '$lib/components/site/SectionHeading.svelte';
	import ProjectCard from '$lib/components/site/ProjectCard.svelte';
	import VideoCard from '$lib/components/site/VideoCard.svelte';
	import ValueCard from '$lib/components/site/ValueCard.svelte';
	import CommunityCard from '$lib/components/site/CommunityCard.svelte';
	import CodeWindow from '$lib/components/site/CodeWindow.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import ArrowRight from 'phosphor-svelte/lib/ArrowRight';
	import ArrowUpRight from 'phosphor-svelte/lib/ArrowUpRight';
	import GithubLogo from 'phosphor-svelte/lib/GithubLogo';
	import DiscordLogo from 'phosphor-svelte/lib/DiscordLogo';
	import YoutubeLogo from 'phosphor-svelte/lib/YoutubeLogo';
	import Heart from 'phosphor-svelte/lib/Heart';
	import { communityLinks, projects, values, videos } from '$lib/content';
	import { site } from '$lib/site';

	const crossUI = projects.find((project) => project.id === 'swiftcrossui')!;
	const bundler = projects.find((project) => project.id === 'swift-bundler')!;
</script>

<Hero />

<Section id="projects">
	<SectionHeading index="01" eyebrow="Projects" title="Two projects." titleAccent="One ecosystem.">
		<Button
			href={site.github}
			variant="outline"
			class="h-9 gap-2 rounded-md border-line bg-transparent px-3.5 text-[12px] font-semibold text-ink shadow-none hover:bg-paper-deep"
			target="_blank"
			rel="noreferrer"
		>
			<GithubLogo class="size-4" aria-hidden="true" />
			View the org on GitHub
			<ArrowUpRight class="size-3.5" weight="bold" aria-hidden="true" />
		</Button>
	</SectionHeading>

	<div class="mt-10 grid gap-5 md:grid-cols-2">
		<ProjectCard project={crossUI}>
			{#snippet media()}
				<div class="flex h-full w-full items-center justify-center p-4 sm:p-5">
					<img
						src="/images/showcase/music-player-macos.webp"
						alt="The MusicPlayerExample app running on macOS"
						width="1600"
						height="861"
						loading="lazy"
						class="max-h-full w-auto max-w-full rounded-[3px] border border-ink/10 object-contain"
					/>
				</div>
			{/snippet}
		</ProjectCard>

		<ProjectCard project={bundler}>
			{#snippet media()}
				<div class="flex h-full items-center justify-center p-4 sm:p-5">
					<CodeWindow title="sbun — zsh" class="w-full">
						<div class="space-y-1.5 font-mono text-[10.5px] leading-relaxed">
							<p class="text-paper/85">
								<span class="text-peach">$</span> sbun bundle -p macOS --universal
							</p>
							<p class="text-paper/40">✓ HelloWorld.app</p>
							<p class="text-paper/40">✓ signed and ready to ship</p>
							<p class="pt-1 text-paper/85">
								<span class="text-peach">$</span> sbun run --hot
							</p>
							<p class="text-peach">● hot reload connected</p>
						</div>
					</CodeWindow>
				</div>
			{/snippet}
		</ProjectCard>
	</div>
</Section>

<Section id="mission" tone="muted">
	<div class="border-t border-line pt-4">
		<p class="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">
			<span class="text-brand">02</span>
			<span class="px-1.5">/</span>
			About moreSwift
		</p>

		<div class="mt-5 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
			<div>
				<h2
					class="max-w-[44rem] text-[2.25rem] font-semibold leading-[1.04] tracking-[-0.025em] text-ink sm:text-[2.9rem]"
				>
					A small collective,<br />
					<span class="italic text-brand">building in the open.</span>
				</h2>
				<p
					class="mt-8 font-display text-[1.65rem] leading-[1.25] tracking-[-0.015em] text-ink sm:text-[1.9rem]"
				>
					We build the tools we want to use, then give them away.
				</p>
				<div class="mt-5 space-y-4 text-[14px] leading-relaxed text-ink-soft">
					<p>
						moreSwift began with SwiftCrossUI and grew into a home for Swift tooling that crosses
						platform boundaries. Today the organisation maintains both projects, with contributions
						from people all over the world.
					</p>
					<p>
						There is no company behind the work and no paid tier. The projects are MIT licensed,
						developed in public, and funded by sponsors and contributors who find them useful.
					</p>
				</div>
			</div>

			<div class="border-t border-line">
				{#each values as value, index (value.title)}
					<ValueCard number={String(index + 1).padStart(2, '0')} {value} />
				{/each}
			</div>
		</div>
	</div>
</Section>

<Section id="videos">
	<SectionHeading index="03" eyebrow="Videos" title="Keep up with" titleAccent="our progress.">
		<Button
			href={site.youtube}
			variant="outline"
			class="h-9 gap-2 rounded-md border-line bg-transparent px-3.5 text-[12px] font-semibold text-ink shadow-none hover:bg-paper-deep"
			target="_blank"
			rel="noreferrer"
		>
			<YoutubeLogo class="size-4 text-brand" weight="fill" aria-hidden="true" />
			Watch on YouTube
			<ArrowUpRight class="size-3.5" weight="bold" aria-hidden="true" />
		</Button>
	</SectionHeading>

	<div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
		{#each videos as video (video.id)}
			<VideoCard {video} />
		{/each}
	</div>
</Section>

<Section id="community" tone="dark">
	<SectionHeading
		index="04"
		eyebrow="Community"
		title="Built in the open."
		titleAccent="Funded by you."
		breakBeforeAccent
		lead="moreSwift is maintained by contributors around the world. Join the discussion, follow the work, or help fund the next platform."
		inverted
	/>

	<div class="mt-10 grid gap-4 md:grid-cols-3">
		{#each communityLinks as link (link.title)}
			<CommunityCard {link} />
		{/each}
	</div>

	<div
		class="mt-4 flex flex-col gap-5 rounded-lg border border-white/15 p-5 sm:flex-row sm:items-center sm:justify-between"
	>
		<div class="flex items-center gap-3.5">
			<span
				class="grid size-10 shrink-0 place-items-center rounded-md border border-white/15 bg-white/[0.04] text-peach"
			>
				<Heart class="size-[18px]" weight="fill" aria-hidden="true" />
			</span>
			<div>
				<p class="font-display text-lg font-semibold text-paper">
					Building something with our tools?
				</p>
				<p class="mt-1 max-w-xl text-[13px] leading-relaxed text-paper/60">
					Share your project in the Discord community and it could feature in the next development
					update.
				</p>
			</div>
		</div>
		<Button
			href={site.discord}
			class="h-10 shrink-0 gap-2 rounded-md bg-paper px-4 text-[12px] font-semibold text-ink hover:bg-white"
		>
			<DiscordLogo class="size-4" aria-hidden="true" />
			Share it on Discord
			<ArrowRight class="size-4" weight="bold" aria-hidden="true" />
		</Button>
	</div>

	<div
		class="mt-4 flex flex-col gap-5 rounded-lg border border-sponsor/40 bg-sponsor/10 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
	>
		<div class="max-w-2xl">
			<p class="font-mono text-[10px] uppercase tracking-[0.18em] text-sponsor-light">
				Support the work
			</p>
			<h3 class="mt-2 font-display text-[1.6rem] font-semibold leading-tight text-paper">
				Help keep moreSwift moving.
			</h3>
			<p class="mt-2 text-[13px] leading-relaxed text-paper/65">
				Sponsorships fund maintenance, documentation, CI and new platform support. Every
				contribution goes back into the open-source tools.
			</p>
		</div>
		<Button
			href={site.sponsor}
			class="h-11 shrink-0 gap-2 rounded-md bg-sponsor px-5 text-[13px] font-semibold text-white hover:bg-[#9d174d]"
			target="_blank"
			rel="noreferrer"
		>
			<Heart class="size-4" weight="fill" aria-hidden="true" />
			Sponsor on Open Collective
		</Button>
	</div>
</Section>
