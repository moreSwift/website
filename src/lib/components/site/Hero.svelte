<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import ArrowRight from 'phosphor-svelte/lib/ArrowRight';
	import ArrowUpRight from 'phosphor-svelte/lib/ArrowUpRight';
	import Check from 'phosphor-svelte/lib/Check';
	import Sparkle from 'phosphor-svelte/lib/Sparkle';
	import PlatformIcon from './PlatformIcon.svelte';
	import { platforms } from '$lib/content/platforms';
	import { site } from '$lib/site';

	let selected = $state('macos');

	const previews = [
		{
			id: 'macos',
			label: 'macOS',
			src: '/images/showcase/macos.webp',
			alt: 'MusicPlayerExample running on macOS'
		},
		{
			id: 'windows',
			label: 'Windows',
			src: '/images/showcase/windows.webp',
			alt: 'MusicPlayerExample running on Windows'
		},
		{
			id: 'linux',
			label: 'Linux',
			src: '/images/showcase/linux.webp',
			alt: 'MusicPlayerExample running on Linux'
		}
	];

	const current = $derived(previews.find((preview) => preview.id === selected) ?? previews[0]);

	const trust = ['MIT licensed', 'Swift 6', 'Free & open source'];
</script>

<section class="relative overflow-hidden border-b border-border/70">
	<div class="pointer-events-none absolute inset-0 dot-grid opacity-40" aria-hidden="true"></div>
	<div
		class="pointer-events-none absolute -top-48 right-[-12%] size-[42rem] rounded-full bg-iris/10 blur-3xl"
		aria-hidden="true"
	></div>
	<div
		class="pointer-events-none absolute -bottom-56 left-[-10%] size-[34rem] rounded-full bg-pink/10 blur-3xl"
		aria-hidden="true"
	></div>

	<div
		class="relative shell grid gap-16 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-12 lg:py-24"
	>
		<div class="min-w-0">
			<div
				class="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-3 py-1.5 shadow-[0_1px_0_rgba(22,19,31,0.04)] backdrop-blur"
			>
				<Sparkle class="size-3.5 text-pink" weight="fill" aria-hidden="true" />
				<span class="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-ink-soft">
					Open source · Swift · Everywhere
				</span>
			</div>

			<h1
				class="mt-6 text-[2.7rem] font-extrabold leading-[0.98] tracking-[-0.05em] text-ink sm:text-6xl xl:text-[4.35rem]"
			>
				Native apps<br />cost more.<br />
				<span class="gradient-text">We're fixing that.</span>
			</h1>

			<p class="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-soft sm:text-base">
				moreSwift is an open-source collective building the tools that let you write one Swift
				codebase and ship it natively to macOS, Windows, Linux, iOS and Android.
			</p>

			<div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
				<Button
					href={site.quickStart}
					size="lg"
					class="h-11 gap-2 rounded-full bg-ink px-5 text-[13px] font-semibold text-paper shadow-[0_10px_30px_-12px_rgba(22,19,31,0.6)] hover:bg-ink/90"
				>
					Start building
					<ArrowRight class="size-4" weight="bold" aria-hidden="true" />
				</Button>
				<Button
					href="#projects"
					variant="outline"
					size="lg"
					class="h-11 gap-2 rounded-full border-ink/15 bg-white/60 px-5 text-[13px] font-semibold text-ink backdrop-blur hover:bg-white"
				>
					Explore the projects
				</Button>
			</div>

			<ul class="mt-7 flex flex-wrap gap-x-5 gap-y-2">
				{#each trust as item (item)}
					<li class="flex items-center gap-1.5 text-[11px] text-muted-foreground">
						<Check class="size-3.5 text-iris" weight="bold" aria-hidden="true" />
						{item}
					</li>
				{/each}
			</ul>

			<div class="mt-8 border-t border-border/80 pt-5">
				<p class="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
					Runs natively on
				</p>
				<div class="mt-3 flex flex-wrap gap-2">
					{#each platforms as platform (platform.id)}
						<span
							class="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/60 px-2.5 py-1 text-[11px] font-medium text-ink-soft"
						>
							<PlatformIcon name={platform.icon} class="size-3" />
							{platform.name}
						</span>
					{/each}
				</div>
			</div>
		</div>

		<div class="relative mx-auto w-full max-w-[34rem] lg:max-w-none">
			<div
				class="pointer-events-none absolute left-1/2 top-1/2 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-iris/15 via-violet/10 to-pink/15 blur-3xl"
				aria-hidden="true"
			></div>

			<div
				class="absolute -top-4 right-2 z-20 hidden items-center gap-1.5 rounded-full border border-ink/10 bg-white px-3 py-1.5 shadow-[0_8px_30px_-12px_rgba(22,19,31,0.35)] sm:inline-flex"
			>
				<span class="size-1.5 rounded-full bg-emerald-500" aria-hidden="true"></span>
				<span class="font-mono text-[9px] uppercase tracking-[0.1em] text-ink-soft">
					6 platforms · 1 codebase
				</span>
			</div>

			<div class="window-frame relative">
				<div class="flex items-center gap-2 border-b border-border/80 bg-mist/50 px-4 py-2.5">
					<span class="flex items-center gap-1.5" aria-hidden="true">
						<span class="size-2 rounded-full bg-[#ff5f57]/70"></span>
						<span class="size-2 rounded-full bg-[#febc2e]/80"></span>
						<span class="size-2 rounded-full bg-[#28c840]/70"></span>
					</span>
					<span class="ml-1 truncate font-mono text-[10px] text-muted-foreground">
						MusicPlayerExample
					</span>
					<Badge
						variant="outline"
						class="ml-auto h-auto rounded-full border-iris/15 bg-white px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.08em] text-iris"
					>
						SwiftCrossUI
					</Badge>
				</div>

				<Tabs.Root bind:value={selected} class="gap-0">
					<div
						class="flex items-center justify-between gap-3 border-b border-border/80 bg-white px-3 py-2"
					>
						<Tabs.List class="h-8 rounded-full bg-mist p-1">
							{#each previews as preview (preview.id)}
								<Tabs.Trigger
									value={preview.id}
									class="rounded-full px-3 text-[11px] data-active:bg-white data-active:shadow-sm"
								>
									{preview.label}
								</Tabs.Trigger>
							{/each}
						</Tabs.List>
						<span
							class="hidden font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground sm:inline"
						>
							all native
						</span>
					</div>

					{#each previews as preview (preview.id)}
						<Tabs.Content value={preview.id} class="focus-visible:outline-none">
							<img
								src={preview.src}
								alt={preview.alt}
								width="1600"
								height="1040"
								class="aspect-[1.538] w-full object-cover"
								loading={preview.id === 'macos' ? 'eager' : 'lazy'}
								fetchpriority={preview.id === 'macos' ? 'high' : undefined}
							/>
						</Tabs.Content>
					{/each}
				</Tabs.Root>

				<div
					class="flex items-center justify-between gap-3 border-t border-border/80 bg-white px-4 py-2.5"
				>
					<span class="text-[11px] text-muted-foreground sm:pl-20">
						MusicPlayerExample on <span class="font-medium text-ink">{current.label}</span>
					</span>
					<span class="font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground">
						one Swift codebase
					</span>
				</div>
			</div>

			<div
				class="animate-float absolute -bottom-8 -left-12 z-10 hidden w-28 rotate-[-4deg] sm:block"
			>
				<div
					class="rounded-[2rem] border-[6px] border-ink bg-ink p-0.5 shadow-[0_24px_50px_-16px_rgba(22,19,31,0.6)]"
				>
					<img
						src="/images/showcase/ios.webp"
						alt="MusicPlayerExample running on an iPhone"
						width="553"
						height="1200"
						loading="lazy"
						class="rounded-[1.55rem]"
					/>
				</div>
			</div>

			<a
				href={site.swiftBundler}
				class="absolute -bottom-6 right-2 hidden items-center gap-1 font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground hover:text-ink sm:inline-flex"
			>
				Built with Swift Bundler
				<ArrowUpRight class="size-3" aria-hidden="true" />
			</a>
		</div>
	</div>
</section>
