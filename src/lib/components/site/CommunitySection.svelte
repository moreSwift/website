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
		index="04"
		eyebrow="Community"
		title="Built in the open."
		titleAccent="Funded by you."
		breakBeforeAccent
		lead="moreSwift is maintained by contributors around the world. Join the discussion, follow the work, or help fund the next platform."
		inverted
	/>

	<div class="mt-10 grid gap-4 md:grid-cols-3">
		{#each communityLinks as link (link.title)}
			<CommunityCard {link} />
		{/each}
	</div>

	<CommunityCallout
		title="Building something with our tools?"
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

	<CommunityCallout
		tone="sponsor"
		eyebrow="Support the work"
		title="Help keep moreSwift moving."
		description="Sponsorships fund maintenance, documentation, CI and new platform support. Every contribution goes back into the open-source tools."
		actionHref={site.sponsor}
		actionLabel="Sponsor on Open Collective"
		external
	>
		{#snippet icon()}
			<Heart class="size-[18px]" weight="fill" aria-hidden="true" />
		{/snippet}
		{#snippet actionIcon()}
			<Heart class="size-4" weight="fill" aria-hidden="true" />
		{/snippet}
	</CommunityCallout>
</Section>
