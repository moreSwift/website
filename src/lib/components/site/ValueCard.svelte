<script lang="ts">
	import Devices from 'phosphor-svelte/lib/Devices';
	import Code from 'phosphor-svelte/lib/Code';
	import Heart from 'phosphor-svelte/lib/Heart';
	import type { Value } from '$lib/content';

	let { value }: { value: Value } = $props();

	const icons = {
		devices: Devices,
		code: Code,
		heart: Heart
	};

	const Icon = $derived(icons[value.icon]);
</script>

<div
	class="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[0_1px_0_rgba(22,19,31,0.03)] transition duration-300 hover:-translate-y-1 hover:border-iris/20 hover:shadow-[0_18px_40px_-24px_rgba(22,19,31,0.35)]"
>
	<span
		class="grid size-10 place-items-center rounded-xl bg-lilac text-iris ring-1 ring-iris/10 transition-colors group-hover:bg-iris group-hover:text-white"
	>
		<Icon class="size-[18px]" weight="duotone" aria-hidden="true" />
	</span>
	<h3 class="mt-5 text-[15px] font-bold tracking-[-0.01em] text-ink">{value.title}</h3>
	<p class="mt-2 text-[13px] leading-relaxed text-muted-foreground">{value.description}</p>
</div>
