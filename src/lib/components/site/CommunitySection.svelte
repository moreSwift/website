<script lang="ts">
	import Section from './Section.svelte';
	import SectionHeading from './SectionHeading.svelte';
	import CommunityCard from './CommunityCard.svelte';
	import CommunityCallout from './CommunityCallout.svelte';
	import DiscordLogo from 'phosphor-svelte/lib/DiscordLogo';
	import Heart from 'phosphor-svelte/lib/Heart';
	import { communityLinks } from '$lib/content';
	import { site } from '$lib/site';
</script>

<Section id="community" tone="dark">
	<SectionHeading
		title="Built in the open."
		titleAccent="Powered by you."
		breakBeforeAccent
		lead="moreSwift is maintained by contributors around the world. Join the community, follow our work, or even help fund it."
		inverted
	/>

	<div class="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
		{#each communityLinks as link (link.title)}
			<CommunityCard {link} />
		{/each}
	</div>

	<CommunityCallout
		title="Building something with our projects?"
		description="Share your project in the Discord community and it could feature in the next development update."
		actionHref={site.discord}
		actionLabel="Share it on Discord"
	>
		{#snippet icon()}
			<Heart class="size-[18px]" weight="fill" aria-hidden="true" />
		{/snippet}
		{#snippet actionIcon()}
			<DiscordLogo class="size-4" aria-hidden="true" />
		{/snippet}
	</CommunityCallout>
</Section>
