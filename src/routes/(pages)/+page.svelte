<script lang="ts">
  import ActionButton from "$lib/ActionButton.svelte";
  import ProjectCard from "$lib/ProjectCard.svelte";

  import windowsLogo from "$lib/assets/windows-logo.webp";
  import appleLogo from "$lib/assets/apple-logo.webp";
  import linuxLogo from "$lib/assets/linux-logo.webp";
  import androidLogo from "$lib/assets/android-logo.webp";

  import musicPlayerImage from "$lib/assets/music-player-appkitbackend.webp";
  import swiftBundlerImage from "$lib/assets/swift-bundler.webp";

  let projects = [
    {
      name: "SwiftCrossUI",
      overview: "A cross-platform declarative UI framework, inspired by SwiftUI.",
      tags: ["UI Framework", "Swift"],
      href: "https://swiftcrossui.dev",
      image: musicPlayerImage,
      imageAlt: "SwiftCrossUI's MusicPlayerExample running on macOS"
    },
    {
      name: "Swift Bundler",
      overview: "An Xcodeproj-less tool for creating cross-platform Swift apps.",
      tags: ["Build System", "Distribution", "Swift"],
      href: "https://swiftbundler.dev",
      image: swiftBundlerImage,
      imageAlt: "The Swift Bundler logo"
    }
  ]
</script>

<style>
  #hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
    margin-bottom: 2rem;
  }

  #tagline {
    font-weight: normal;
    text-align: center;
  }

  #call-to-action {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  #platform-logos {
    display: flex;
    gap: 0.5rem;
  }

  #platform-logos img {
    height: 2rem;
  }

  #our-work {
    width: min(120ch, 100vw - 3rem);
    position: relative;
    left: calc(min(120ch, 100vw - 3rem) * -0.5 + 50%);
    margin-top: 2rem;
  }

  .project-grid {
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 2rem;
  }

	@media screen and (max-width: 600px) {
		#hero {
		  margin-top: 2rem;
		  margin-bottom: 1rem;
		}

		.project-grid {
		  grid-template-columns: auto;
		}
	}
</style>

<section id="hero">
  <h1 id="tagline">Native apps cost more.<br> <b>We're changing that.</b></h1>
  <div id="call-to-action">
    <ActionButton title="Start building" href="https://docs.swiftcrossui.dev/tutorials/swiftcrossui/quick-start" />
    <div id="platform-logos">
      <img src={windowsLogo} alt="The Windows logo" />
      <img src={appleLogo} alt="The Apple logo" />
      <img src={androidLogo} alt="The Android logo" />
      <img src={linuxLogo} alt="The Linux logo" />
    </div>
  </div>
</section>

<section id="our-work">
  <h2>Our projects</h2>
  <div class="project-grid">
    {#each projects as project}
      <ProjectCard {...project} />
    {/each}
  </div>
</section>

