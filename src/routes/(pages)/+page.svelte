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
	import { Badge } from '$lib/components/ui/badge/index.js';
	import ArrowRight from 'phosphor-svelte/lib/ArrowRight';
	import ArrowUpRight from 'phosphor-svelte/lib/ArrowUpRight';
	import GithubLogo from 'phosphor-svelte/lib/GithubLogo';
	import DiscordLogo from 'phosphor-svelte/lib/DiscordLogo';
	import YoutubeLogo from 'phosphor-svelte/lib/YoutubeLogo';
	import Heart from 'phosphor-svelte/lib/Heart';
	import { communityLinks, projects, values, videos } from '$lib/content';
	import { site } from '$lib/site';

	const bundler = projects[0];
	const crossUI = projects[1];
</script>

<Hero />

<Section id="projects">
	<SectionHeading
		eyebrow="The toolkit"
		title="Two projects."
		titleAccent="One mission."
		lead="Use SwiftCrossUI for the interface and Swift Bundler for the build. Both are open source, both are built for Swift, and both work together out of the box."
	>
		<Button
			href={site.github}
			variant="outline"
			class="h-10 gap-2 rounded-full border-ink/15 bg-white/60 px-4 text-[12px] font-semibold text-ink hover:bg-white"
			target="_blank"
			rel="noreferrer"
		>
			<GithubLogo class="size-4" aria-hidden="true" />
			View on GitHub
			<ArrowUpRight class="size-3.5" weight="bold" aria-hidden="true" />
		</Button>
	</SectionHeading>

	<div class="mt-12 grid gap-6 lg:grid-cols-12">
		<div class="lg:col-span-7">
			<ProjectCard project={bundler} tone="dark">
				{#snippet media()}
					<div
						class="relative overflow-hidden bg-gradient-to-br from-plum via-[#2b1740] to-[#3a1233] px-5 pb-5 pt-5 sm:px-6"
					>
						<div
							class="pointer-events-none absolute inset-0 dot-grid-light opacity-15"
							aria-hidden="true"
						></div>
						<div
							class="pointer-events-none absolute -right-10 -top-10 size-44 rounded-full bg-pink/25 blur-2xl"
							aria-hidden="true"
						></div>

						<div class="relative flex items-center justify-between gap-3">
							<div class="flex items-center gap-2.5">
								<span
									class="grid size-10 place-items-center rounded-xl bg-peach/10 ring-1 ring-white/10"
								>
									<img
										src={bundler.mark}
										alt={bundler.markAlt}
										width="558"
										height="275"
										class="h-6 w-auto object-contain"
									/>
								</span>
								<div>
									<p class="font-display text-[13px] font-bold text-paper">Swift Bundler</p>
								</div>
							</div>
							<Badge
								class="h-auto rounded-full bg-pink px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.08em] text-white"
							>
								New · v3.0.0
							</Badge>
						</div>

						<CodeWindow title="sbun — zsh" class="relative mt-5">
							<div class="space-y-1.5 font-mono text-[10.5px] leading-relaxed sm:text-[11px]">
								<p class="text-white/85">
									<span class="text-emerald-300">$</span> sbun bundle -p macOS --universal
								</p>
								<p class="text-white/40">✓ HelloWorld.app</p>
								<p class="text-white/40">✓ signed and ready to ship</p>
								<p class="pt-1 text-white/85">
									<span class="text-emerald-300">$</span> sbun run --hot
								</p>
								<p class="text-pink-300">● hot reload connected</p>
							</div>
						</CodeWindow>

						<div class="relative mt-4 flex flex-wrap gap-1.5">
							{#each ['macOS', 'Windows', 'Linux', 'Android'] as platform (platform)}
								<span
									class="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.1em] text-paper/55"
								>
									{platform}
								</span>
							{/each}
						</div>
					</div>
				{/snippet}
			</ProjectCard>
		</div>

		<div class="lg:col-span-5">
			<ProjectCard project={crossUI} tone="light">
				{#snippet media()}
					<div
						class="relative overflow-hidden bg-gradient-to-br from-lilac via-pink-soft to-peach/25 p-5 sm:p-6"
					>
						<div
							class="pointer-events-none absolute inset-0 dot-grid opacity-25"
							aria-hidden="true"
						></div>
						<div
							class="relative overflow-hidden rounded-xl shadow-[0_18px_40px_-18px_rgba(22,19,31,0.45)] ring-1 ring-black/10"
						>
							<img
								src={crossUI.mark}
								alt={crossUI.markAlt}
								width="1600"
								height="861"
								loading="lazy"
								class="w-full"
							/>
							<span
								class="absolute bottom-2.5 left-2.5 rounded-full bg-white/90 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.1em] text-ink shadow-sm backdrop-blur"
							>
								macOS
							</span>
						</div>
					</div>
				{/snippet}
			</ProjectCard>
		</div>
	</div>
</Section>

<Section id="mission" tone="gradient" grid>
	<div class="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
		<div>
			<p class="eyebrow">Why moreSwift</p>
			<h2 class="mt-3 text-3xl font-bold leading-[1.04] tracking-[-0.035em] text-ink sm:text-4xl">
				The platform shouldn't pick your language.
			</h2>
			<p class="mt-4 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
				Swift is fast, safe and expressive. We're removing the last reasons to leave it behind when
				you ship to a new platform — without asking you to sacrifice native performance, native
				controls or the Swift tooling you already know.
			</p>
			<div class="mt-6 flex flex-wrap gap-2">
				{#each ['Swift 6', 'MIT licensed', 'Six platforms', 'No web views'] as item (item)}
					<Badge
						variant="outline"
						class="h-auto rounded-full border-iris/15 bg-white/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.08em] text-iris"
					>
						{item}
					</Badge>
				{/each}
			</div>
		</div>

		<CodeWindow title="HelloApp.swift">
			<!-- prettier-ignore -->
			<pre class="overflow-x-auto font-mono text-[11.5px] leading-[1.7] text-white/85 sm:text-[12.5px]"><code><span class="text-[#f0abfc]">import</span> SwiftCrossUI

<span class="text-[#fda4af]">@main</span>
<span class="text-[#f0abfc]">struct</span> <span class="text-[#fdba74]">HelloApp</span>: App &#123;
  <span class="text-[#f0abfc]">var</span> body: <span class="text-[#f0abfc]">some</span> Scene &#123;
    WindowGroup(<span class="text-[#86efac]">"Hello, world!"</span>) &#123;
      VStack(spacing: <span class="text-[#7dd3fc]">16</span>) &#123;
        Text(<span class="text-[#86efac]">"One codebase."</span>)
        Text(<span class="text-[#86efac]">"Every platform."</span>)
        Button(<span class="text-[#86efac]">"Get started"</span>) &#123; … &#125;
      &#125;
      .padding(<span class="text-[#7dd3fc]">24</span>)
    &#125;
  &#125;
&#125;</code></pre>
		</CodeWindow>
	</div>

	<div class="mt-14 grid gap-4 sm:grid-cols-3">
		{#each values as value (value.title)}
			<ValueCard {value} />
		{/each}
	</div>
</Section>

<Section id="videos">
	<SectionHeading
		eyebrow="Videos"
		title="See what we're building."
		titleAccent="In motion."
		lead="Monthly development updates, conference talks and demos from the people building moreSwift."
	>
		<Button
			href={site.youtube}
			variant="outline"
			class="h-10 gap-2 rounded-full border-ink/15 bg-white/60 px-4 text-[12px] font-semibold text-ink hover:bg-white"
			target="_blank"
			rel="noreferrer"
		>
			<YoutubeLogo class="size-4 text-pink" weight="fill" aria-hidden="true" />
			Watch on YouTube
			<ArrowUpRight class="size-3.5" weight="bold" aria-hidden="true" />
		</Button>
	</SectionHeading>

	<div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each videos as video (video.id)}
			<VideoCard {video} />
		{/each}
	</div>
</Section>

<Section id="community" tone="dark" grid>
	<div
		class="pointer-events-none absolute -right-32 -top-40 size-[36rem] rounded-full bg-iris/25 blur-3xl"
		aria-hidden="true"
	></div>
	<div
		class="pointer-events-none absolute -bottom-48 -left-32 size-[30rem] rounded-full bg-pink/15 blur-3xl"
		aria-hidden="true"
	></div>

	<div class="relative">
		<SectionHeading
			eyebrow="Community"
			title="Built in the open."
			titleAccent="Funded by you."
			lead="moreSwift is maintained by contributors around the world. Join the discussion, follow the work, or help fund the next platform."
			inverted
		/>

		<div class="mt-12 grid gap-5 md:grid-cols-3">
			{#each communityLinks as link (link.title)}
				<CommunityCard {link} />
			{/each}
		</div>

		<div
			class="mt-6 flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:p-7"
		>
			<div class="flex items-start gap-3.5">
				<span
					class="grid size-10 shrink-0 place-items-center rounded-xl bg-pink/15 text-pink-soft ring-1 ring-pink/20"
				>
					<Heart class="size-[18px]" weight="fill" aria-hidden="true" />
				</span>
				<div>
					<p class="font-display text-[15px] font-bold text-paper">
						Building something with our tools?
					</p>
					<p class="mt-1 max-w-xl text-[13px] leading-relaxed text-paper/60">
						We'd love to see it. Share your project in the Discord community and it could feature in
						the next development update.
					</p>
				</div>
			</div>
			<Button
				href={site.discord}
				class="h-10 shrink-0 gap-2 rounded-full bg-paper px-4 text-[12px] font-semibold text-plum hover:bg-white"
			>
				<DiscordLogo class="size-4" aria-hidden="true" />
				Share it on Discord
				<ArrowRight class="size-4" weight="bold" aria-hidden="true" />
			</Button>
		</div>
	</div>
</Section>
