<script lang="ts">
	import PlatformIcon from './PlatformIcon.svelte';
	import { platforms } from '$lib/content/platforms';

	let { label = 'Runs natively on' }: { label?: string } = $props();
</script>

<div class="border-t border-line bg-paper-deep/35">
	<div class="shell flex flex-wrap items-center gap-x-7 gap-y-3 py-4">
		<span class="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
			{label}
		</span>
		{#each platforms as platform (platform.id)}
			<span class="inline-flex items-center gap-2 text-[12px] font-medium text-ink-soft">
				<PlatformIcon name={platform.icon} class="size-3.5" />
				{platform.name}
			</span>
		{/each}
	</div>
</div>
