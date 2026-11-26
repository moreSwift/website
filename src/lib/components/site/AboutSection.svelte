<script lang="ts">
	import Section from './Section.svelte';
	import SectionLabel from './SectionLabel.svelte';
	import SectionTitle from './SectionTitle.svelte';
	import PrincipleRow from './PrincipleRow.svelte';
	import { principles } from '$lib/content';
</script>

<Section id="principles" tone="muted">
	<div>
		<div class="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
			<div>
				<SectionTitle title="Our principles." titleAccent="" />
				<div class="mt-5 space-y-4 text-[18px] leading-relaxed text-ink-soft">
					<p>
						moreSwift began with SwiftCrossUI and grew into a home for cross platform Swift tooling.
						Today the organisation maintains SwiftCrossUI and Swift Bundler, with contributions from
						people all over the world.
					</p>
					<p>
						Our projects are FOSS licensed, developed in public, and funded by sponsors and
						contributors who believe in what we do.
					</p>
				</div>
			</div>

			<div>
				{#each principles as principle, index (principle.title)}
					<PrincipleRow
						number={String(index + 1).padStart(2, '0')}
						isLast={principles.length - 1 === index}
						{principle}
					/>
				{/each}
			</div>
		</div>
	</div>
</Section>
