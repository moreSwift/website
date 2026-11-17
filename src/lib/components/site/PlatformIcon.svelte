<script lang="ts">
	import AppleLogo from 'phosphor-svelte/lib/AppleLogo';
	import WindowsLogo from 'phosphor-svelte/lib/WindowsLogo';
	import LinuxLogo from 'phosphor-svelte/lib/LinuxLogo';
	import AndroidLogo from 'phosphor-svelte/lib/AndroidLogo';
	import type { Platform } from '$lib/content/platforms';

	let { name, class: className = 'size-4' }: { name: Platform['icon']; class?: string } = $props();
</script>

{#if name === 'apple'}
	<AppleLogo class={className} weight="fill" aria-hidden="true" />
{:else if name === 'windows'}
	<WindowsLogo class={className} weight="fill" aria-hidden="true" />
{:else if name === 'linux'}
	<LinuxLogo class={className} weight="fill" aria-hidden="true" />
{:else if name === 'android'}
	<AndroidLogo class={className} weight="fill" aria-hidden="true" />
{/if}
