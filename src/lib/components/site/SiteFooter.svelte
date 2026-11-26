<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index.js';
	import ArrowUp from 'phosphor-svelte/lib/ArrowUp';
	import GithubLogo from 'phosphor-svelte/lib/GithubLogo';
	import DiscordLogo from 'phosphor-svelte/lib/DiscordLogo';
	import Heart from 'phosphor-svelte/lib/Heart';
	import Brand from './Brand.svelte';
	import SocialLink from './SocialLink.svelte';
	import { site } from '$lib/site';

	const columns = [
		{
			title: 'Projects',
			links: [
				{ label: 'SwiftCrossUI', href: site.swiftCrossUI },
				{ label: 'Swift Bundler', href: site.swiftBundler },
				{ label: 'Examples', href: `${site.docsCrossUI}/documentation/swiftcrossui/examples` },
				{ label: 'Releases', href: `${site.github}/swift-bundler/releases` }
			]
		},
		{
			title: 'Resources',
			links: [
				{ label: 'SwiftCrossUI docs', href: site.docsCrossUI },
				{ label: 'Swift Bundler docs', href: site.docsBundler },
				{ label: 'Quick start', href: site.quickStart },
				{ label: 'Videos', href: '/#videos' },
				{ label: 'YouTube', href: site.youtube }
			]
		},
		{
			title: 'Community',
			links: [
				{ label: 'GitHub', href: site.github },
				{ label: 'Discord', href: site.discord },
				{ label: 'Open Collective', href: site.sponsor },
				{ label: 'Sponsor moreSwift', href: site.sponsor }
			]
		}
	];

	const year = new Date().getFullYear();
</script>

<footer class="bg-ink text-paper">
	<div class="shell py-14 sm:py-16">
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1.9fr]">
			<div>
				<Brand inverted />
				<p class="mt-5 max-w-sm text-[13px] leading-relaxed text-paper/60">
					An independent, community-funded collective bringing native Swift app development to every
					major platform.
				</p>
				<div class="mt-6 flex flex-wrap gap-2">
					<SocialLink href={site.github} label="GitHub" external>
						{#snippet icon()}
							<GithubLogo class="size-3.5" aria-hidden="true" />
						{/snippet}
					</SocialLink>
					<SocialLink href={site.discord} label="Discord">
						{#snippet icon()}
							<DiscordLogo class="size-3.5" aria-hidden="true" />
						{/snippet}
					</SocialLink>
					<SocialLink href={site.sponsor} label="Sponsor" tone="sponsor" external>
						{#snippet icon()}
							<Heart class="size-3.5" weight="fill" aria-hidden="true" />
						{/snippet}
					</SocialLink>
				</div>
			</div>

			<div class="grid grid-cols-2 gap-8 sm:grid-cols-3">
				{#each columns as column (column.title)}
					<div>
						<p class="font-mono text-[9px] uppercase tracking-[0.18em] text-paper/45">
							{column.title}
						</p>
						<ul class="mt-3 space-y-2.5">
							{#each column.links as link (link.label)}
								<li>
									<a
										href={link.href}
										target={link.href.startsWith('http') ? '_blank' : undefined}
										rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
										class="text-[12px] text-paper/70 transition-colors hover:text-paper"
									>
										{link.label}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>

		<Separator class="my-10 bg-white/10" />

		<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
			<p class="text-[14px] text-paper/45">
				© {year} moreSwift
			</p>
			<a
				href="#top"
				class="group inline-flex items-center gap-2 text-[14px] text-paper/50 transition-colors hover:text-paper"
			>
				Back to top
				<span
					class="grid size-6 place-items-center rounded-md border border-white/15 transition-colors group-hover:border-white/40"
				>
					<ArrowUp class="size-3" weight="bold" aria-hidden="true" />
				</span>
			</a>
		</div>

		<p class="mt-8 text-[13px] text-paper/45">
			Swift and SwiftUI are trademarks of Apple Inc. moreSwift is not affiliated with Apple.
		</p>
	</div>
</footer>
