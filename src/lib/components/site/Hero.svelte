<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import ArrowRight from 'phosphor-svelte/lib/ArrowRight';
	import ArrowUpRight from 'phosphor-svelte/lib/ArrowUpRight';
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
</script>

<section class="border-b border-line bg-paper">
	<div
		class="shell grid gap-14 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16 lg:py-20"
	>
		<div class="min-w-0">
			<div class="flex items-center gap-3">
				<span class="h-px w-8 bg-brand" aria-hidden="true"></span>
				<span class="eyebrow">Open source Swift tooling</span>
			</div>

			<h1
				class="mt-5 text-[2.75rem] font-semibold leading-[0.99] tracking-[-0.035em] text-ink sm:text-[3.6rem] xl:text-[4.2rem]"
			>
				Native apps<br />cost more.<br />
				<span class="italic text-brand">We’re fixing that.</span>
			</h1>

			<p class="prose-lead mt-6 max-w-[33rem]">
				moreSwift is an open-source collective building tools that let you write one Swift codebase
				and ship it natively to macOS, Windows, Linux, iOS and Android.
			</p>

			<div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
				<Button
					href={site.quickStart}
					size="lg"
					class="h-11 gap-2 rounded-md bg-ink px-5 text-[13px] font-semibold text-paper hover:bg-ink/90"
				>
					Start building
					<ArrowRight class="size-4" weight="bold" aria-hidden="true" />
				</Button>
				<Button
					href="#projects"
					variant="outline"
					size="lg"
					class="h-11 gap-2 rounded-md border-line bg-transparent px-5 text-[13px] font-semibold text-ink shadow-none hover:bg-paper-deep"
				>
					Explore our projects
				</Button>
			</div>

			<p class="mt-6 text-[13px] leading-relaxed text-ink-soft">
				moreSwift is community funded.
				<a
					href={site.sponsor}
					target="_blank"
					rel="noreferrer"
					class="group ml-1 inline-flex items-center gap-1 font-semibold text-sponsor underline-offset-4 hover:underline"
				>
					Sponsor our work
					<ArrowUpRight
						class="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
						weight="bold"
						aria-hidden="true"
					/>
				</a>
			</p>
		</div>

		<div class="relative mx-auto w-full max-w-[34rem] lg:max-w-none">
			<div class="frame hard-shadow relative">
				<Tabs.Root bind:value={selected} class="gap-0">
					<div
						class="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-card px-4 py-3"
					>
						<Tabs.List class="h-9 gap-1 rounded-md border border-line bg-paper-deep/50 p-1">
							{#each previews as preview (preview.id)}
								<Tabs.Trigger
									value={preview.id}
									class="h-7 rounded-[4px] border-0 px-3 font-mono text-[10px] tracking-[0.01em] text-ink-soft hover:text-ink data-active:bg-ink data-active:text-paper data-active:hover:text-paper!"
								>
									{preview.label}
								</Tabs.Trigger>
							{/each}
						</Tabs.List>
						<span class="font-mono text-[10px] text-ink-soft">
							<span class="hidden sm:inline">MusicPlayerExample on</span>
							<span class="sm:hidden">on</span>
							<span class="ml-1 font-semibold text-ink">{current.label}</span>
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
			</div>

			<div class="absolute -bottom-10 -left-7 z-10 hidden w-[7.6rem] rotate-[-3deg] sm:block">
				<div
					class="relative rounded-[1.15rem] bg-[#3a3530] p-[3px] shadow-[4px_4px_0_rgba(28,25,22,0.16)] ring-1 ring-black/20"
				>
					<div class="rounded-[1.05rem] bg-black p-[2px] ring-1 ring-white/10">
						<div class="overflow-hidden rounded-[0.95rem] bg-black">
							<img
								src="/images/showcase/ios.webp"
								alt="MusicPlayerExample running on an iPhone"
								width="553"
								height="1200"
								loading="lazy"
								class="w-full"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="border-t border-line bg-paper-deep/35">
		<div class="shell flex flex-wrap items-center gap-x-7 gap-y-3 py-4">
			<span class="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
				Runs natively on
			</span>
			{#each platforms as platform (platform.id)}
				<span class="inline-flex items-center gap-2 text-[12px] font-medium text-ink-soft">
					<PlatformIcon name={platform.icon} class="size-3.5" />
					{platform.name}
				</span>
			{/each}
		</div>
	</div>
</section>
