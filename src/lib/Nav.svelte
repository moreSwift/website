<script lang="ts">
	import logo from "$lib/assets/logo.svg";
  import "$lib/assets/jetbrainsmono.css";

  let links = [
  	["GitHub", "https://github.com/moreSwift"],
  	["Discord", "https://discord.gg/fw2trT48ny"],
  	["Sponsor", "https://github.com/sponsors/stackotter"]
  ]
</script>

<style>
	nav {
		display: flex;
		width: 100%;
		box-sizing: border-box;
		justify-content: space-between;
		font-size: 1.2rem;
		font-family: JetBrainsMono;
		font-weight: regular;
		padding: 0.3rem 0.5rem;
		align-items: center;
	}

	ul {
		padding: 0;
		margin: 0;
		list-style-type: none;
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	#tabs {
		gap: 2rem;
	}

	a {
		text-decoration: none;
		color: black;
	}

	img {
		height: 1.5rem;
		padding-top: 0.4rem;
	}

	#sponsor-link {
		color: #ef2f86;
	}
</style>

<nav>
	<ul>
		<li>
			<img src={logo} alt="The moreSwift logo" />
		</li>
		<li>
			<a href="/">moreSwift</a>
		</li>
	</ul>
	<ul id="tabs">
		{#each links as [label, link]}
			<li>
				<a href={link} id={label.toLowerCase() + "-link"}>{label}</a>
			</li>
		{/each}
	</ul>
</nav>
