<script lang="ts">
	import type { Snippet } from 'svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import ArrowRight from 'phosphor-svelte/lib/ArrowRight';
	import { cn } from '$lib/utils.js';

	let {
		icon,
		eyebrow = '',
		title,
		description,
		actionHref,
		actionLabel,
		actionIcon,
		tone = 'default',
		external = false,
		class: className = ''
	}: {
		icon: Snippet;
		eyebrow?: string;
		title: string;
		description: string;
		actionHref: string;
		actionLabel: string;
		actionIcon: Snippet;
		tone?: 'default' | 'sponsor';
		external?: boolean;
		class?: string;
	} = $props();

	const tones = {
		default: {
			card: 'border-white/15',
			icon: 'border-white/15 bg-white/[0.04] text-peach',
			eyebrow: 'text-peach',
			button: 'h-10 bg-paper px-4 text-[12px] text-ink hover:bg-white'
		},
		sponsor: {
			card: 'border-sponsor/40 bg-sponsor/10',
			icon: 'border-sponsor/40 bg-sponsor/10 text-sponsor-light',
			eyebrow: 'text-sponsor-light',
			button: 'h-11 bg-sponsor px-5 text-[13px] text-white hover:bg-[#9d174d]'
		}
	} as const;

	const style = $derived(tones[tone]);
</script>

<div
	class={cn(
		'mt-4 flex flex-col gap-5 rounded-lg border p-5 sm:flex-row sm:items-center sm:justify-between',
		style.card,
		className
	)}
>
	<div class="flex items-center gap-3.5">
		<span class={cn('grid size-10 shrink-0 place-items-center rounded-md border', style.icon)}>
			{@render icon()}
		</span>
		<div class="max-w-2xl">
			{#if eyebrow}
				<p class={cn('font-mono text-[10px] uppercase tracking-[0.18em]', style.eyebrow)}>
					{eyebrow}
				</p>
			{/if}
			<p
				class={cn(
					'font-display font-semibold text-paper',
					eyebrow ? 'mt-2 text-[1.6rem] leading-tight' : 'text-lg'
				)}
			>
				{title}
			</p>
			<p class={cn('text-[13px] leading-relaxed text-paper/65', eyebrow ? 'mt-2' : 'mt-1')}>
				{description}
			</p>
		</div>
	</div>

	<Button
		href={actionHref}
		class={cn('shrink-0 gap-2 rounded-md font-semibold', style.button)}
		target={external ? '_blank' : undefined}
		rel={external ? 'noreferrer' : undefined}
	>
		{@render actionIcon()}
		{actionLabel}
		<ArrowRight class="size-4" weight="bold" aria-hidden="true" />
	</Button>
</div>
