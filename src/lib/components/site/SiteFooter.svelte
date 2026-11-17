<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index.js';
	import ArrowUp from 'phosphor-svelte/lib/ArrowUp';
	import GithubLogo from 'phosphor-svelte/lib/GithubLogo';
	import DiscordLogo from 'phosphor-svelte/lib/DiscordLogo';
	import Heart from 'phosphor-svelte/lib/Heart';
	import Brand from './Brand.svelte';
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

<footer class="border-t border-white/10 bg-ink text-paper">
	<div class="shell py-14 sm:py-16">
		<div class="grid gap-12 lg:grid-cols-[1.1fr_1.9fr]">
			<div>
				<Brand inverted />
				<p class="mt-5 max-w-sm text-[13px] leading-relaxed text-paper/60">
					An independent, community-funded collective bringing native Swift app development to every
					major platform. Built in public.
				</p>
				<div class="mt-6 flex flex-wrap gap-2">
					<a
						href={site.github}
						target="_blank"
						rel="noreferrer"
						class="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-paper/70 transition-colors hover:border-white/40 hover:text-paper"
					>
						<GithubLogo class="size-3.5" aria-hidden="true" /> GitHub
					</a>
					<a
						href={site.discord}
						class="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-paper/70 transition-colors hover:border-white/40 hover:text-paper"
					>
						<DiscordLogo class="size-3.5" aria-hidden="true" /> Discord
					</a>
					<a
						href={site.sponsor}
						target="_blank"
						rel="noreferrer"
						class="inline-flex items-center gap-2 rounded-md border border-sponsor/40 bg-sponsor/10 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-sponsor-light transition-colors hover:border-sponsor/70 hover:text-white"
					>
						<Heart class="size-3.5" weight="fill" aria-hidden="true" /> Sponsor
					</a>
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
			<p class="font-mono text-[9px] uppercase tracking-[0.12em] text-paper/45">
				© {year} moreSwift · MIT licensed
			</p>
			<p class="font-mono text-[9px] uppercase tracking-[0.12em] text-paper/35">
				Made with Swift, everywhere.
			</p>
			<a
				href="#top"
				class="group inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.12em] text-paper/50 transition-colors hover:text-paper"
			>
				Back to top
				<span
					class="grid size-6 place-items-center rounded-md border border-white/15 transition-colors group-hover:border-white/40"
				>
					<ArrowUp class="size-3" weight="bold" aria-hidden="true" />
				</span>
			</a>
		</div>

		<p class="mt-8 text-[11px] text-paper/45">
			SwiftCrossUI and Swift Bundler are projects of moreSwift.
		</p>
	</div>
</footer>
