<script lang="ts">
	import PlatformIcon from './PlatformIcon.svelte';
	import { platforms } from '$lib/content/platforms';

	let { label = 'Runs natively on' }: { label?: string } = $props();
</script>

{#snippet platformItems()}
	{#each platforms as platform (platform.id)}
		<span
			class="inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-[12px] font-medium text-ink-soft"
		>
			<PlatformIcon name={platform.icon} class="size-3.5" />
			{platform.name}
		</span>
	{/each}
{/snippet}

<div class="border-t border-line bg-paper-deep/35">
	<div class="shell flex items-center gap-4 py-3 lg:hidden">
		<span class="shrink-0 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
			{label}
		</span>
		<div
			class="mask-fade-x min-w-0 flex-1 overflow-hidden motion-reduce:overflow-x-auto motion-reduce:no-scrollbar"
		>
			<div class="animate-marquee flex w-max motion-reduce:animate-none">
				{#each [0, 1] as group (group)}
					<div
						class="flex shrink-0 items-center gap-6 pr-6"
						aria-hidden={group === 1 ? 'true' : undefined}
					>
						{@render platformItems()}
					</div>
				{/each}
			</div>
		</div>
	</div>

	<div class="shell hidden flex-wrap items-center gap-x-7 gap-y-3 py-4 lg:flex">
		<span class="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
			{label}
		</span>
		{@render platformItems()}
	</div>
</div>
