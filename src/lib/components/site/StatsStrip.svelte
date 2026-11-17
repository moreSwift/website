<script lang="ts">
	const stats = [
		{ value: '2', label: 'open-source projects' },
		{ value: '6', label: 'native platforms' },
		{ value: 'MIT', label: 'licensed' },
		{ value: 'Open', label: 'developed in public' }
	];
</script>

<div class="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
	{#each stats as stat (stat.label)}
		<div class="bg-card px-5 py-5">
			<p class="font-display text-[1.9rem] font-semibold leading-none text-ink">{stat.value}</p>
			<p class="mt-2 font-mono text-[9px] uppercase leading-snug tracking-[0.12em] text-ink-soft">
				{stat.label}
			</p>
		</div>
	{/each}
</div>
