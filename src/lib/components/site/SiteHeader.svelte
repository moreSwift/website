<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import ArrowRight from 'phosphor-svelte/lib/ArrowRight';
	import ArrowUpRight from 'phosphor-svelte/lib/ArrowUpRight';
	import GithubLogo from 'phosphor-svelte/lib/GithubLogo';
	import DiscordLogo from 'phosphor-svelte/lib/DiscordLogo';
	import ListIcon from 'phosphor-svelte/lib/List';
	import Brand from './Brand.svelte';
	import { nav, site } from '$lib/site';

	let open = $state(false);
</script>

<div class="relative overflow-hidden bg-plum text-paper">
	<div
		class="pointer-events-none absolute inset-0 dot-grid-light opacity-20"
		aria-hidden="true"
	></div>
	<div
		class="pointer-events-none absolute -right-16 top-1/2 size-40 -translate-y-1/2 rounded-full bg-pink/25 blur-3xl"
		aria-hidden="true"
	></div>
	<div class="relative shell flex items-center justify-center gap-3 py-2 text-center">
		<span class="animate-pulse-dot size-1.5 shrink-0 rounded-full bg-pink" aria-hidden="true"
		></span>
		<p class="font-mono text-[10px] uppercase tracking-[0.12em] text-paper/90">
			<a
				href={site.bundlerRelease}
				target="_blank"
				rel="noreferrer"
				class="font-semibold text-paper underline decoration-paper/30 underline-offset-4 hover:decoration-paper"
				>Swift Bundler 3.0 is out</a
			>
			<span class="hidden text-paper/60 sm:inline"> — Windows, Linux, Android & hot reload</span>
		</p>
		<a
			href={site.bundlerRelease}
			target="_blank"
			rel="noreferrer"
			class="group hidden items-center gap-1 font-mono text-[10px] uppercase tracking-[0.1em] text-peach hover:text-paper sm:inline-flex"
		>
			Release notes
			<ArrowRight
				class="size-3 transition-transform group-hover:translate-x-0.5"
				weight="bold"
				aria-hidden="true"
			/>
		</a>
	</div>
</div>

<header
	class="sticky top-0 z-40 border-b border-border/70 bg-paper/85 backdrop-blur-xl supports-[backdrop-filter]:bg-paper/70"
>
	<div class="shell flex h-16 items-center justify-between gap-4">
		<Brand />

		<nav class="hidden items-center gap-7 md:flex" aria-label="Main">
			{#each nav as item (item.label)}
				<a
					href={item.href}
					class="text-[13px] font-medium text-ink-soft transition-colors hover:text-ink"
				>
					{item.label}
				</a>
			{/each}
		</nav>

		<div class="flex items-center gap-1.5">
			<Button
				href={site.github}
				variant="ghost"
				size="icon"
				class="hidden size-10 rounded-full text-ink-soft hover:bg-muted hover:text-ink sm:inline-flex"
				aria-label="moreSwift on GitHub"
				target="_blank"
				rel="noreferrer"
			>
				<GithubLogo class="size-[18px]" aria-hidden="true" />
			</Button>
			<Button
				href={site.discord}
				variant="ghost"
				size="icon"
				class="hidden size-10 rounded-full text-ink-soft hover:bg-muted hover:text-ink sm:inline-flex"
				aria-label="Join the moreSwift Discord"
			>
				<DiscordLogo class="size-[18px]" aria-hidden="true" />
			</Button>

			<Button
				href={site.quickStart}
				class="hidden h-10 gap-1.5 rounded-full bg-ink px-4 text-[12px] font-semibold text-paper hover:bg-ink/90 sm:inline-flex"
			>
				Start building
				<ArrowUpRight class="size-3.5" weight="bold" aria-hidden="true" />
			</Button>

			<Sheet.Root bind:open>
				<Sheet.Trigger>
					{#snippet child({ props })}
						<Button
							{...props}
							variant="ghost"
							size="icon"
							class="size-10 rounded-full text-ink hover:bg-muted md:hidden"
							aria-label="Open menu"
						>
							<ListIcon class="size-5" aria-hidden="true" />
						</Button>
					{/snippet}
				</Sheet.Trigger>
				<Sheet.Content side="right" class="bg-paper text-ink">
					<Sheet.Header class="gap-1">
						<Brand class="mb-5" />
						<Sheet.Title class="font-display text-xl font-bold">Menu</Sheet.Title>
						<Sheet.Description class="text-muted-foreground">Explore moreSwift</Sheet.Description>
					</Sheet.Header>

					<nav class="mt-2 flex flex-col" aria-label="Mobile">
						{#each nav as item (item.label)}
							<a
								href={item.href}
								onclick={() => (open = false)}
								class="flex items-center justify-between border-b border-border py-3.5 font-display text-lg font-semibold text-ink"
							>
								{item.label}
								<ArrowRight class="size-4 text-muted-foreground" aria-hidden="true" />
							</a>
						{/each}
					</nav>

					<Sheet.Footer class="mt-auto flex-col items-stretch gap-2">
						<Button
							href={site.quickStart}
							size="lg"
							class="h-11 w-full gap-2 rounded-full bg-ink text-[13px] font-semibold text-paper hover:bg-ink/90"
						>
							Start building
							<ArrowRight class="size-4" weight="bold" aria-hidden="true" />
						</Button>
						<div class="grid grid-cols-2 gap-2">
							<Button
								href={site.github}
								variant="outline"
								class="h-10 rounded-full text-[12px]"
								target="_blank"
								rel="noreferrer"
							>
								<GithubLogo class="size-4" aria-hidden="true" />
								GitHub
							</Button>
							<Button href={site.discord} variant="outline" class="h-10 rounded-full text-[12px]">
								<DiscordLogo class="size-4" aria-hidden="true" />
								Discord
							</Button>
						</div>
					</Sheet.Footer>
				</Sheet.Content>
			</Sheet.Root>
		</div>
	</div>
</header>
