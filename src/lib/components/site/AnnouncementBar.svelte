<script lang="ts">
	import ArrowRight from 'phosphor-svelte/lib/ArrowRight';
	import { site } from '$lib/site';
</script>

<div class="border-b border-line bg-brand-soft/70 text-ink">
	<div class="shell flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2 text-center">
		<span class="size-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true"></span>
		<p class="min-w-0 font-mono text-[10px] uppercase tracking-[0.12em]">
			<a
				href={site.bundlerRelease}
				target="_blank"
				rel="noreferrer"
				class="font-semibold underline decoration-brand/40 underline-offset-4 hover:decoration-brand"
				>Swift Bundler 3.0 is out</a
			>
			<span class="hidden text-ink-soft sm:inline"> — Windows, Linux, Android & hot reload</span>
		</p>
		<a
			href={site.bundlerRelease}
			target="_blank"
			rel="noreferrer"
			class="group hidden shrink-0 items-center gap-1 font-mono text-[10px] uppercase tracking-[0.1em] text-brand-deep hover:text-ink sm:inline-flex"
		>
			Release notes
			<ArrowRight
				class="size-3 transition-transform group-hover:translate-x-0.5"
				weight="bold"
				aria-hidden="true"
			/>
		</a>
	</div>
</div>
