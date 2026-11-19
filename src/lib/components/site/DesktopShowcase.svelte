<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import PhoneMock from './PhoneMock.svelte';
	import { desktopPreviews, mobilePreviews } from '$lib/content/showcase';

	let selectedDesktopPreview = $state('macos');
	let selectedMobilePreview = $state('ios');

	const currentDesktopPreview = $derived(
		desktopPreviews.find((preview) => preview.id === selectedDesktopPreview) ?? desktopPreviews[0]
	);

	const currentMobilePreview = $derived(
		mobilePreviews.find((preview) => preview.id === selectedMobilePreview) ?? mobilePreviews[0]
	);
</script>

<div class="frame hard-shadow relative">
	<div
		class="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-card px-4 py-3"
	>
		<Tabs.Root bind:value={selectedDesktopPreview} class="gap-0">
			<Tabs.List class="h-9 gap-1 rounded-md border border-line bg-paper-deep/50 p-1">
				{#each desktopPreviews as preview (preview.id)}
					<Tabs.Trigger
						value={preview.id}
						class="h-7 rounded-[4px] border-0 px-3 font-mono text-[10px] tracking-[0.01em] text-ink-soft hover:text-ink data-active:bg-ink data-active:text-paper data-active:hover:text-paper!"
					>
						{preview.label}
					</Tabs.Trigger>
				{/each}
			</Tabs.List>
		</Tabs.Root>

		<Tabs.Root bind:value={selectedMobilePreview} class="gap-0">
			<Tabs.List class="h-9 gap-1 rounded-md border border-line bg-paper-deep/50 p-1">
				{#each mobilePreviews as preview (preview.id)}
					<Tabs.Trigger
						value={preview.id}
						class="h-7 rounded-[4px] border-0 px-3 font-mono text-[10px] tracking-[0.01em] text-ink-soft hover:text-ink data-active:bg-ink data-active:text-paper data-active:hover:text-paper!"
					>
						{preview.label}
					</Tabs.Trigger>
				{/each}
			</Tabs.List>
		</Tabs.Root>

		<span class="font-mono text-[10px] text-ink-soft">MusicPlayerExample</span>
	</div>

	<img
		src={currentDesktopPreview.src}
		alt={currentDesktopPreview.alt}
		width="1600"
		height="1040"
		class="aspect-[1.538] w-full object-cover"
		loading={currentDesktopPreview.id === 'macos' ? 'eager' : 'lazy'}
		fetchpriority={currentDesktopPreview.id === 'macos' ? 'high' : undefined}
	/>
</div>

<div class="absolute -left-7 top-[calc(100%_-_5.4rem)] z-10 w-[7.6rem] -translate-y-1/2">
	<PhoneMock
		class="w-full rotate-[-3deg]"
		src={currentMobilePreview.src}
		alt={currentMobilePreview.alt}
		kind={currentMobilePreview.phoneKind}
	/>
</div>
