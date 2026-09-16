<script lang="ts">
  import ActionButton from "$lib/ActionButton.svelte";
  import Card from "$lib/Card.svelte";

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
      imageAlt: "SwiftCrossUI's MusicPlayerExample running on macOS",
    },
    {
      name: "Swift Bundler",
      overview: "An Xcodeproj-less tool for creating cross-platform Swift apps.",
      tags: ["Build System", "Distribution", "Swift"],
      href: "https://swiftbundler.dev",
      image: swiftBundlerImage,
      imageAlt: "The Swift Bundler logo",
    }
  ]

  let videos = [
    {
      name: "Development update (February & March 2026)",
      overview: "In February and March our feature parity with SwiftUI improved quite a bit. In addition to all of our new features, we also have some exciting community projects to showcase!",
      href: "https://www.youtube.com/watch?v=RzT7_priAE8",
      tags: ["Dev update"],
      image: "/images/video-thumbnails/feb-march-2026.webp",
      imageAlt: "A video thumbnail showing the community showcase segment of the February and March 2026 development update video"
    },
    {
      name: "SwiftCrossUI: Swift apps, everywhere",
      overview: "Mia Koring gave a talk about SwiftCrossUI at the 2026 pre-FOSDEM Swift meetup",
      href: "https://www.youtube.com/watch?v=EC9qVCYBVyk",
      tags: ["Conference"],
      image: "/images/video-thumbnails/mia-koring-pre-fosdem-2026.webp",
      imageAlt: "A random freezeframe from the recording of Mia Koring's talk at the pre-FOSDEM Swift meetup"
    },
    {
      name: "Development update (December 2025 & January 2026)",
      overview: "This is the first SwiftCrossUI development update. We cover all of the major contributions made across both months, and showcase some exciting projects from the community.",
      href: "https://www.youtube.com/watch?v=HgRO7eIHkyE",
      tags: ["Dev update"],
      image: "/images/video-thumbnails/dec-2025-jan-2026.webp",
      imageAlt: "A video thumbnail showing the community showcase segment of the December 2025 and January 2026 development update video"
    },
  ]
</script>

<style>
  section {
    margin-bottom: 4rem;
  }

  #hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
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

  .wide-content {
    width: min(120ch, 100vw - 3rem);
    position: relative;
    left: calc(min(120ch, 100vw - 3rem) * -0.5 + 50%);
  }

  .double-column {
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 2rem;
  }

	@media screen and (max-width: 600px) {
		#hero {
		  margin-top: 2rem;
		  margin-bottom: 3rem;
		}

		section {
		  margin-bottom: 2rem;
		}

		.double-column {
		  grid-template-columns: auto;
		}
	}
</style>

<section id="hero">
  <h1 id="tagline">Native apps cost more.<br> <b>We're fixing that.</b></h1>
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

<section id="our-work" class="wide-content">
  <h2>Our projects</h2>
  <div class="double-column">
    {#each projects as project}
      <Card {...project} />
    {/each}
  </div>
</section>

<section id="videos" class="wide-content">
  <h2>Videos</h2>
  <div class="double-column">
    {#each videos as video}
      <Card {...video} />
    {/each}
  </div>
</section>
