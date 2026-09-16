<script lang="ts">
	import logo from "$lib/assets/logo.svg";

  let links = [
  	["Sponsor", "https://opencollective.com/moreswift"],
  	["GitHub", "https://github.com/moreSwift"],
  	["Discord", "/discord"],
  ]
</script>

<style>
	nav {
		display: flex;
		width: 100%;
		box-sizing: border-box;
		justify-content: space-between;
		font-size: 1.7rem;
		font-weight: 500;
		padding: 0.3rem 0.5rem;
		align-items: center;
		max-width: 120ch;
		margin: auto;
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
		padding-top: 0.3rem;
	}

	#sponsor-link {
		color: #ef2f86;
	}

	@media screen and (max-width: 600px) {
		nav {
			font-size: 1rem;
		}

		img {
			padding-top: 0.2rem;
		}

		#tabs {
			gap: 1rem;
		}
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
