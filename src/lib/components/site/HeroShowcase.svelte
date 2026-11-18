<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import PhoneMock from './PhoneMock.svelte';

	let selectedDesktopPreview = $state('macos');
	let selectedMobilePreview = $state('ios');

	const desktopPreviews = [
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

	const mobilePreviews: { id: 'ios' | 'android'; label: string; src: string; alt: string }[] = [
		{
			id: 'ios',
			label: 'iOS',
			src: '/images/showcase/ios.webp',
			alt: 'MusicPlayerExample running on an iPhone'
		},
		{
			id: 'android',
			label: 'Android',
			src: '/images/showcase/android.webp',
			alt: 'MusicPlayerExample running on a Google Pixel'
		}
	];

	const currentDesktopPreview = $derived(
		desktopPreviews.find((preview) => preview.id === selectedDesktopPreview) ?? desktopPreviews[0]
	);

	const currentMobilePreview = $derived(
		mobilePreviews.find((preview) => preview.id === selectedMobilePreview) ?? mobilePreviews[0]
	);
</script>

<div class="relative mx-auto w-full max-w-[34rem] lg:max-w-none">
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

			<span class="font-mono text-[10px] text-ink-soft">
				<span class="sm:inline">MusicPlayerExample</span>
			</span>
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

	<PhoneMock
		class="absolute -bottom-10 -left-7 z-10 hidden w-[7.6rem] rotate-[-3deg] sm:block"
		src={currentMobilePreview.src}
		alt={currentMobilePreview.alt}
		kind={currentMobilePreview.id}
	/>
</div>
