<script lang="ts">
	import Section from './Section.svelte';
	import SectionAction from './SectionAction.svelte';
	import SectionHeading from './SectionHeading.svelte';
	import ProjectCard from './ProjectCard.svelte';
	import GithubLogo from 'phosphor-svelte/lib/GithubLogo';
	import { projects } from '$lib/content';
	import { site } from '$lib/site';
</script>

<Section id="projects">
	<SectionHeading title="Our projects.">
		<SectionAction href={site.github} label="View the org on GitHub" external>
			{#snippet icon()}
				<GithubLogo class="size-4" aria-hidden="true" />
			{/snippet}
		</SectionAction>
	</SectionHeading>

	<div class="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
		{#each projects as project (project.id)}
			<ProjectCard {project} />
		{/each}
	</div>
</Section>
