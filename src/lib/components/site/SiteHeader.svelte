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
	import { cn } from '$lib/utils.js';

	let open = $state(false);
</script>

<div class="border-b border-line bg-brand-soft/70 text-ink">
	<div class="shell flex items-center gap-3 py-2">
		<span class="size-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true"></span>
		<p class="min-w-0 font-mono text-[10px] uppercase tracking-[0.12em]">
			<a
				href={site.bundlerRelease}
				target="_blank"
				rel="noreferrer"
				class="font-semibold underline decoration-brand/40 underline-offset-4 hover:decoration-brand"
				>Swift Bundler 3.0 is out</a
			>
			<span class="hidden text-ink-soft sm:inline"> — Windows, Linux, Android & hot reload</span>
		</p>
		<a
			href={site.bundlerRelease}
			target="_blank"
			rel="noreferrer"
			class="group ml-auto hidden shrink-0 items-center gap-1 font-mono text-[10px] uppercase tracking-[0.1em] text-brand-deep hover:text-ink sm:inline-flex"
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

<header class="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
	<div class="shell flex h-[68px] items-center justify-between gap-4">
		<Brand />

		<nav class="hidden items-center gap-7 md:flex" aria-label="Main">
			{#each nav as item (item.label)}
				<a
					href={item.href}
					class={cn(
						'text-[13px] font-medium transition-colors',
						item.label === 'Sponsor'
							? 'text-sponsor hover:text-[#9d174d]'
							: 'text-ink-soft hover:text-ink'
					)}
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
				class="hidden size-10 rounded-md border border-transparent text-ink-soft hover:border-line hover:bg-paper-deep hover:text-ink sm:inline-flex"
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
				class="hidden size-10 rounded-md border border-transparent text-ink-soft hover:border-line hover:bg-paper-deep hover:text-ink sm:inline-flex"
				aria-label="Join the moreSwift Discord"
			>
				<DiscordLogo class="size-[18px]" aria-hidden="true" />
			</Button>

			<Button
				href={site.quickStart}
				class="hidden h-10 gap-1.5 rounded-md bg-ink px-4 text-[12px] font-semibold text-paper hover:bg-ink/90 sm:inline-flex"
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
							class="size-10 rounded-md border border-line bg-card text-ink hover:bg-paper-deep md:hidden"
							aria-label="Open menu"
						>
							<ListIcon class="size-5" aria-hidden="true" />
						</Button>
					{/snippet}
				</Sheet.Trigger>
				<Sheet.Content side="right" class="bg-paper text-ink">
					<Sheet.Header class="gap-1">
						<Brand class="mb-5" />
						<Sheet.Title class="font-display text-2xl font-bold">Menu</Sheet.Title>
						<Sheet.Description class="text-muted-foreground">Explore moreSwift</Sheet.Description>
					</Sheet.Header>

					<nav class="mt-2 flex flex-col" aria-label="Mobile">
						{#each nav as item (item.label)}
							<a
								href={item.href}
								onclick={() => (open = false)}
								class={cn(
									'flex items-center justify-between border-b border-line py-3.5 font-display text-xl font-semibold text-ink',
									item.label === 'Sponsor' && 'text-sponsor'
								)}
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
							class="h-11 w-full gap-2 rounded-md bg-ink text-[13px] font-semibold text-paper hover:bg-ink/90"
						>
							Start building
							<ArrowRight class="size-4" weight="bold" aria-hidden="true" />
						</Button>
						<div class="grid grid-cols-2 gap-2">
							<Button
								href={site.github}
								variant="outline"
								class="h-10 rounded-md text-[12px]"
								target="_blank"
								rel="noreferrer"
							>
								<GithubLogo class="size-4" aria-hidden="true" />
								GitHub
							</Button>
							<Button href={site.discord} variant="outline" class="h-10 rounded-md text-[12px]">
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
