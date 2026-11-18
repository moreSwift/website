<script lang="ts">
	import '@fontsource-variable/literata/wght.css';
	import '@fontsource-variable/literata/wght-italic.css';
	import '@fontsource-variable/ibm-plex-sans/wght.css';
	import '@fontsource-variable/ibm-plex-sans/wght-italic.css';
	import '@fontsource/spectral/600.css';
	import '@fontsource/spectral/600-italic.css';
	import '@fontsource/ibm-plex-serif/600.css';
	import '@fontsource/ibm-plex-serif/600-italic.css';
	import '@fontsource-variable/libre-franklin/wght.css';
	import '@fontsource-variable/libre-franklin/wght-italic.css';
	import '@fontsource-variable/bitter/wght.css';
	import '@fontsource-variable/bitter/wght-italic.css';
	import { Badge } from '$lib/components/ui/badge/index.js';

	const options = [
		{
			name: 'Source Serif 4',
			category: 'Current · serif',
			family: "'Source Serif 4 Variable', serif",
			current: true,
			note: 'Humanist and editorial — the current heading. Included as the baseline.'
		},
		{
			name: 'Spectral',
			category: 'Serif',
			family: "'Spectral', serif",
			note: 'A calmer transitional serif. Less fashion editorial, more published book.'
		},
		{
			name: 'Literata',
			category: 'Serif',
			family: "'Literata Variable', serif",
			note: 'Warm and bookish, built for long reading. Public-library rather than luxury-brand.'
		},
		{
			name: 'IBM Plex Serif',
			category: 'Serif',
			family: "'IBM Plex Serif', serif",
			note: 'Technical and open-source in character, with a slight engineering edge.'
		},
		{
			name: 'Bitter',
			category: 'Slab serif',
			family: "'Bitter Variable', serif",
			note: 'Sturdy and tool-like. A much more grounded, unpretentious voice.'
		},
		{
			name: 'IBM Plex Sans',
			category: 'Sans',
			family: "'IBM Plex Sans Variable', sans-serif",
			note: 'Humanist technical sans. Scale and weight carry the heading with no serif performance.'
		},
		{
			name: 'Libre Franklin',
			category: 'Sans',
			family: "'Libre Franklin Variable', sans-serif",
			note: 'Civic, plain-spoken grotesque. Institutional in a good way — no trendiness.'
		}
	];
</script>

<svelte:head>
	<title>Display type options — moreSwift</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<div class="shell py-12 sm:py-16">
	<div class="border-t border-line pt-4">
		<div class="flex flex-wrap items-center justify-between gap-4">
			<p class="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">
				<span class="text-brand">Internal</span>
				<span class="px-1.5">/</span>
				Display type study
			</p>
			<p class="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-soft">
				Not applied to the live site
			</p>
		</div>

		<div class="mt-5 max-w-3xl">
			<h1
				class="text-[2.25rem] font-semibold leading-[1.04] tracking-[-0.025em] text-ink sm:text-[2.9rem]"
			>
				Which voice should moreSwift use?
			</h1>
			<p class="mt-4 text-[15px] leading-relaxed text-ink-soft">
				The same tagline in seven display typefaces. Each sample uses the same size, weight and
				colour treatment, including the italic accent, so you can judge the whole heading in
				context.
			</p>
		</div>
	</div>

	<div class="mt-10">
		{#each options as option, index (option.name)}
			<section class="border-t border-line py-8 sm:py-10">
				<div class="grid gap-6 lg:grid-cols-[13rem_1fr] lg:gap-12">
					<div>
						<p class="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft">
							<span class="text-brand">{String(index + 1).padStart(2, '0')}</span>
							<span class="px-1.5">/</span>
							{option.category}
						</p>
						<div class="mt-3 flex flex-wrap items-center gap-2">
							<h2 class="text-[17px] font-bold tracking-[-0.01em] text-ink">{option.name}</h2>
							{#if option.current}
								<Badge
									variant="outline"
									class="h-auto rounded-full border-brand/25 bg-brand-soft/60 px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.08em] text-brand"
								>
									Current
								</Badge>
							{/if}
						</div>
						<p class="mt-3 text-[13px] leading-relaxed text-ink-soft">{option.note}</p>
					</div>

					<div class="min-w-0">
						<p
							class="text-[2.35rem] font-semibold leading-[1.02] tracking-[-0.03em] text-ink sm:text-[3.2rem] lg:text-[4rem]"
							style={`font-family: ${option.family};`}
						>
							Native apps<br />cost more.<br />
							<span class="italic text-brand">We’re fixing that.</span>
						</p>
					</div>
				</div>
			</section>
		{/each}
	</div>

	<p
		class="border-t border-line pt-5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-soft"
	>
		Current live heading: Source Serif 4
	</p>
</div>
