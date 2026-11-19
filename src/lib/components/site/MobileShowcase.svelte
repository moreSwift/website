<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import PhoneMock from './PhoneMock.svelte';
	import { platformPreviews } from '$lib/content/showcase';

	let selectedPlatform = $state('macos');

	const currentPreview = $derived(
		platformPreviews.find((preview) => preview.id === selectedPlatform) ?? platformPreviews[0]
	);
</script>

<div class="frame hard-shadow relative">
	<div class="flex justify-center border-b border-line bg-card px-3 py-3">
		<Tabs.Root bind:value={selectedPlatform} class="gap-0">
			<Tabs.List class="h-9 gap-0 rounded-md border border-line bg-paper-deep/50 p-1">
				{#each platformPreviews as preview (preview.id)}
					<Tabs.Trigger
						value={preview.id}
						class="h-7 rounded-[4px] border-0 px-2 font-mono text-[9px] tracking-[0.01em] text-ink-soft hover:text-ink data-active:bg-ink data-active:text-paper data-active:hover:text-paper! sm:px-3 sm:text-[10px]"
					>
						{preview.label}
					</Tabs.Trigger>
				{/each}
			</Tabs.List>
		</Tabs.Root>
	</div>

	<div class="flex items-center justify-center bg-paper-deep/25 p-5">
		{#if currentPreview.kind === 'desktop'}
			<img
				src={currentPreview.src}
				alt={currentPreview.alt}
				width="1600"
				height="1040"
				class="w-full rounded-[3px] border border-ink/10 object-contain"
				loading="lazy"
			/>
		{:else}
			<PhoneMock
				class="w-[8.25rem] rotate-[-2deg]"
				src={currentPreview.src}
				alt={currentPreview.alt}
				kind={currentPreview.phoneKind}
			/>
		{/if}
	</div>
</div>
