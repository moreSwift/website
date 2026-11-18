<script lang="ts">
	import Section from './Section.svelte';
	import SectionAction from './SectionAction.svelte';
	import SectionHeading from './SectionHeading.svelte';
	import VideoCard from './VideoCard.svelte';
	import YoutubeLogo from 'phosphor-svelte/lib/YoutubeLogo';
	import { videos } from '$lib/content';
	import { site } from '$lib/site';
</script>

<Section id="videos">
	<SectionHeading index="03" eyebrow="Videos" title="Keep up with" titleAccent="our progress.">
		<SectionAction href={site.youtube} label="Watch on YouTube" external>
			{#snippet icon()}
				<YoutubeLogo class="size-4 text-brand" weight="fill" aria-hidden="true" />
			{/snippet}
		</SectionAction>
	</SectionHeading>

	<div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
		{#each videos as video (video.id)}
			<VideoCard {video} />
		{/each}
	</div>
</Section>
