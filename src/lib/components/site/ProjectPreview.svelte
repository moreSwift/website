<script lang="ts">
	import type { Project } from '$lib/content';
	import CodeWindow from './CodeWindow.svelte';

	let { project }: { project: Project } = $props();
</script>

{#if project.id === 'swiftcrossui'}
	<div class="flex h-full w-full items-center justify-center p-4 sm:p-5">
		<img
			src="/images/showcase/music-player-macos.webp"
			alt="The MusicPlayerExample app running on macOS"
			width="1600"
			height="861"
			loading="lazy"
			class="max-h-full w-auto max-w-full rounded-[3px] border border-ink/10 object-contain"
		/>
	</div>
{:else if project.id === 'swift-bundler'}
	<div class="flex h-full items-center justify-center p-4 sm:p-5">
		<CodeWindow title="sbun — zsh" class="w-full">
			<div class="space-y-1.5 font-mono text-[10.5px] leading-relaxed">
				<p class="text-paper/85">
					<span class="text-peach">$</span> sbun bundle -p macOS --universal
				</p>
				<p class="text-paper/40">✓ HelloWorld.app</p>
				<p class="text-paper/40">✓ signed and ready to ship</p>
				<p class="pt-1 text-paper/85">
					<span class="text-peach">$</span> sbun run --hot
				</p>
				<p class="text-peach">● hot reload connected</p>
			</div>
		</CodeWindow>
	</div>
{/if}
