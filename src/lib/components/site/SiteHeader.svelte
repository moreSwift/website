<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import ArrowUpRight from 'phosphor-svelte/lib/ArrowUpRight';
	import GithubLogo from 'phosphor-svelte/lib/GithubLogo';
	import DiscordLogo from 'phosphor-svelte/lib/DiscordLogo';
	import AnnouncementBar from './AnnouncementBar.svelte';
	import Brand from './Brand.svelte';
	import HeaderIconLink from './HeaderIconLink.svelte';
	import MobileMenu from './MobileMenu.svelte';
	import { nav, site } from '$lib/site';
	import { cn } from '$lib/utils.js';
</script>

<AnnouncementBar />

<header class="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
	<div class="shell flex h-[68px] items-center justify-between gap-4">
		<Brand />

		<nav class="hidden items-center gap-7 md:flex" aria-label="Main">
			{#each nav as item (item.label)}
				<a
					href={item.href}
					class={cn(
						'text-[14px] font-medium transition-colors',
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
			<HeaderIconLink href={site.github} label="moreSwift on GitHub" external>
				{#snippet icon()}
					<GithubLogo class="size-[18px]" aria-hidden="true" />
				{/snippet}
			</HeaderIconLink>

			<HeaderIconLink href={site.discord} label="Join the moreSwift Discord">
				{#snippet icon()}
					<DiscordLogo class="size-[18px]" aria-hidden="true" />
				{/snippet}
			</HeaderIconLink>

			<Button
				href={site.quickStart}
				class="hidden h-10 gap-1.5 rounded-md bg-ink px-4 text-[14px] font-semibold text-paper hover:bg-ink/90 sm:inline-flex"
			>
				Start building
				<ArrowUpRight class="size-3.5" weight="bold" aria-hidden="true" />
			</Button>

			<MobileMenu />
		</div>
	</div>
</header>
