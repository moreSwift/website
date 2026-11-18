<script lang="ts">
	import Section from './Section.svelte';
	import SectionLabel from './SectionLabel.svelte';
	import SectionTitle from './SectionTitle.svelte';
	import PrincipleRow from './PrincipleRow.svelte';
	import { principles } from '$lib/content';
</script>

<Section id="mission" tone="muted">
	<div class="border-t border-line pt-4">
		<SectionLabel index="02" eyebrow="About moreSwift" />

		<div class="mt-5 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
			<div>
				<SectionTitle
					title="A small collective,"
					titleAccent="building in the open."
					breakBeforeAccent
				/>
				<p
					class="mt-8 font-display text-[1.65rem] leading-[1.25] tracking-[-0.015em] text-ink sm:text-[1.9rem]"
				>
					We build the tools we want to use, then give them away.
				</p>
				<div class="mt-5 space-y-4 text-[14px] leading-relaxed text-ink-soft">
					<p>
						moreSwift began with SwiftCrossUI and grew into a home for Swift tooling that crosses
						platform boundaries. Today the organisation maintains both projects, with contributions
						from people all over the world.
					</p>
					<p>
						There is no company behind the work and no paid tier. The projects are MIT licensed,
						developed in public, and funded by sponsors and contributors who find them useful.
					</p>
				</div>
			</div>

			<div class="border-t border-line">
				{#each principles as principle, index (principle.title)}
					<PrincipleRow number={String(index + 1).padStart(2, '0')} {principle} />
				{/each}
			</div>
		</div>
	</div>
</Section>
