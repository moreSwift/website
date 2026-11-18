<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import ArrowRight from 'phosphor-svelte/lib/ArrowRight';
	import GithubLogo from 'phosphor-svelte/lib/GithubLogo';
	import DiscordLogo from 'phosphor-svelte/lib/DiscordLogo';
	import ListIcon from 'phosphor-svelte/lib/List';
	import Brand from './Brand.svelte';
	import { nav, site } from '$lib/site';
	import { cn } from '$lib/utils.js';

	let open = $state(false);
</script>

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
