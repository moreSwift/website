<script lang="ts">
	import DesktopShowcase from './DesktopShowcase.svelte';
	import MobileShowcase from './MobileShowcase.svelte';
</script>

<div class="relative mx-auto w-full max-w-[34rem] xl:max-w-none">
	<div class="xl:hidden">
		<MobileShowcase />
	</div>
	<div class="hidden xl:block">
		<DesktopShowcase />
	</div>
</div>
