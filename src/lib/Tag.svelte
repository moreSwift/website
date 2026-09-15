<script lang="ts">
  let {content} = $props();
</script>

<style>
  .tag {
    padding: 0.2rem 0.4rem;
    font-size: 0.9rem;
    background: lightgray;
    border-radius: 0.4rem;
  }
</style>

<span class="tag">
  {content}
</span>
