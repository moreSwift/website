<script lang="ts">
  let {title, href} = $props();
</script>

<style>
  a {
    text-decoration: none;
    color: white;
    background: #5576ee;
    border-radius: 0.25rem;
    padding: 0.6rem 1rem;
    font-weight: 500;
    font-size: 1.2rem;
  }
</style>

<a href={href} role="button">{title}</a>
