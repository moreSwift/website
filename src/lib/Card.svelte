<script lang="ts">
  import TagRow from "$lib/TagRow.svelte";

  let {name, overview, tags, href, image, imageAlt} = $props();
</script>

<style>
  .card {
    position: relative;
    border-radius: 0.7rem;
    background: white;
    transition: transform ease-in 200ms, box-shadow ease-in 200ms;
    box-shadow: 0 5px 20px -5px rgba(0,0,0,0.3);
  }

  .card:hover {
    box-shadow: 0 5px 30px -5px rgba(0,0,0,0.3);
    transform: scale(101%);
  }

  .card img {
    width: 100%;
    border-radius: 0.7rem 0.7rem 0 0;
    aspect-ratio: 1.8;
    object-fit: cover;
  }

  .caption {
    --card-padding: 1.5rem;
    padding: 0.5rem var(--card-padding) var(--card-padding) var(--card-padding);
    box-sizing: border-box;
  }

  .caption h3 {
    margin: 0;
    margin-bottom: 0.3rem;
    line-height: 110%;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .overview {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2; 
    -webkit-box-orient: vertical;
  }

	@media screen and (max-width: 600px) {
	  .caption {
	    --card-padding: 1rem;
	  }

	  .tags {
	    display: none;
	  }
	}
</style>

<a href={href}>
  <div class="card">
    <img src={image} alt={imageAlt} />
    <div class="caption">
      <div class="tags">
        <TagRow tags={tags} />
      </div>
      <h3>{name}</h3>
      <div class="overview">{overview}</div>
    </div>
  </div>
</a>
