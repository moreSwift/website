<script lang="ts">
	import ArrowRight from 'phosphor-svelte/lib/ArrowRight';
	import { site } from '$lib/site';
</script>

<div class="border-b border-line bg-brand-soft/70 text-ink">
	<div class="shell flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2 text-center">
		<p class="min-w-0 text-[14px]">
			<span class="font-semibold decoration-brand/40">Swift Bundler 3.0 out now:</span>
			<span class="hidden text-ink-soft sm:inline"> Windows, Linux, Android & hot reloading</span>
		</p>
		<a
			href={site.bundlerRelease}
			target="_blank"
			rel="noreferrer"
			class="group hidden shrink-0 items-center gap-1 text-[14px] text-brand-deep hover:text-ink sm:inline-flex"
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
