<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import IPhoneMock from './IPhoneMock.svelte';

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

	<IPhoneMock
		class="absolute -bottom-10 -left-7 z-10 hidden w-[7.6rem] rotate-[-3deg] sm:block"
		src="/images/showcase/ios.webp"
		alt="MusicPlayerExample running on an iPhone"
	/>
</div>
