<script lang="ts">
	import Hero from '$lib/components/site/Hero.svelte';
	import Section from '$lib/components/site/Section.svelte';
	import SectionHeading from '$lib/components/site/SectionHeading.svelte';
	import ProjectCard from '$lib/components/site/ProjectCard.svelte';
	import VideoCard from '$lib/components/site/VideoCard.svelte';
	import ValueCard from '$lib/components/site/ValueCard.svelte';
	import CommunityCard from '$lib/components/site/CommunityCard.svelte';
	import StatsStrip from '$lib/components/site/StatsStrip.svelte';
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
	<SectionHeading
		index="01"
		eyebrow="Projects"
		title="Two projects."
		titleAccent="One ecosystem."
		lead="Use SwiftCrossUI for the interface and Swift Bundler for the build. Both are open source, independently maintained, and designed to work together."
	>
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
				<img
					src="/images/showcase/music-player-macos.webp"
					alt="The MusicPlayerExample app running on macOS"
					width="1600"
					height="861"
					loading="lazy"
					class="h-full w-full object-contain object-center"
				/>
			{/snippet}
		</ProjectCard>

		<ProjectCard project={bundler}>
			{#snippet media()}
				<div class="flex h-full flex-col p-3">
					<CodeWindow title="sbun — zsh" class="h-full">
						<div class="flex h-full flex-col justify-between gap-3">
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
							<div class="flex flex-wrap gap-1.5">
								{#each ['macOS', 'Windows', 'Linux', 'Android'] as platform (platform)}
									<span
										class="rounded-[3px] border border-white/10 px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.08em] text-paper/45"
									>
										{platform}
									</span>
								{/each}
							</div>
						</div>
					</CodeWindow>
				</div>
			{/snippet}
		</ProjectCard>
	</div>
</Section>

<Section id="mission" tone="muted">
	<SectionHeading
		index="02"
		eyebrow="About moreSwift"
		title="A small collective,"
		titleAccent="building in the open."
		breakBeforeAccent
		lead="We’re contributors who want Swift to work everywhere — without asking you to leave the language, or the native platform, behind."
	/>

	<div class="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
		<div>
			<p
				class="font-display text-[1.65rem] leading-[1.25] tracking-[-0.015em] text-ink sm:text-[1.9rem]"
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
			<p
				class="mt-8 border-l-2 border-brand pl-5 font-display text-[1.3rem] italic leading-snug text-ink"
			>
				Native isn’t a feature. It’s the baseline.
			</p>
		</div>

		<div class="border-t border-line">
			{#each values as value, index (value.title)}
				<ValueCard number={String(index + 1).padStart(2, '0')} {value} />
			{/each}
		</div>
	</div>

	<div class="mt-12">
		<StatsStrip />
	</div>
</Section>

<Section id="videos">
	<SectionHeading
		index="03"
		eyebrow="Videos"
		title="What we’ve been"
		titleAccent="building."
		lead="Development updates, conference talks and demos from the people behind moreSwift."
	>
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
		class="mt-4 flex flex-col gap-5 border border-white/15 p-5 sm:flex-row sm:items-center sm:justify-between"
	>
		<div class="flex items-start gap-3">
			<Heart class="mt-0.5 size-4 shrink-0 text-peach" weight="fill" aria-hidden="true" />
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
</Section>
