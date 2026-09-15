<script lang="ts">
  import Tag from "./Tag.svelte";

  let {tags} = $props();
</script>

<style>
  .tag-row {
    margin-bottom: 0.3rem;
    gap: 0.5rem;
    display: flex;
    flex-wrap: wrap;
  }
</style>

{#if tags.length != 0}
  <div class="tag-row">
    {#each tags as tag}
      <Tag content={tag} />
    {/each}
  </div>
{/if}
