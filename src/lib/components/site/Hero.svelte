<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import ArrowRight from 'phosphor-svelte/lib/ArrowRight';
	import ArrowUpRight from 'phosphor-svelte/lib/ArrowUpRight';
	import HeroShowcase from './HeroShowcase.svelte';
	import PlatformStrip from './PlatformStrip.svelte';
	import { site } from '$lib/site';
</script>

<section class="border-b border-line bg-paper">
	<div
		class="shell grid grid-cols-1 gap-14 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16 lg:py-20"
	>
		<div class="min-w-0">
			<div class="hidden items-center gap-3 sm:flex">
				<span class="h-px w-8 bg-brand" aria-hidden="true"></span>
				<span class="eyebrow">Open source Swift tooling</span>
			</div>

			<h1
				class="mt-0 text-[2.75rem] font-semibold leading-[0.99] tracking-[-0.035em] text-ink sm:mt-5 sm:text-[3.6rem] xl:text-[4.2rem]"
			>
				Native apps<br />cost more.<br />
				<span class="italic text-brand">We’re fixing that.</span>
			</h1>

			<p class="prose-lead mt-6 max-w-[33rem]">
				moreSwift is an open-source organization building tools that let you write native apps in
				Swift and ship them to macOS, Windows, Linux, iOS and Android.
			</p>

			<div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
				<Button
					href={site.quickStart}
					size="lg"
					class="h-11 gap-2 rounded-md bg-ink px-5 text-[13px] font-semibold text-paper hover:bg-ink/90"
				>
					Start building
					<ArrowRight class="size-4" weight="bold" aria-hidden="true" />
				</Button>
				<Button
					href="#projects"
					variant="outline"
					size="lg"
					class="h-11 gap-2 rounded-md border-line bg-transparent px-5 text-[13px] font-semibold text-ink shadow-none hover:bg-paper-deep"
				>
					Explore our projects
				</Button>
			</div>

			<p class="mt-6 text-[13px] leading-relaxed text-ink-soft">
				moreSwift is community funded.
				<a
					href={site.sponsor}
					target="_blank"
					rel="noreferrer"
					class="group ml-1 inline-flex items-center gap-1 font-semibold text-sponsor underline-offset-4 hover:underline"
				>
					Sponsor our work
					<ArrowUpRight
						class="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
						weight="bold"
						aria-hidden="true"
					/>
				</a>
			</p>
		</div>

		<HeroShowcase />
	</div>

	<PlatformStrip />
</section>
