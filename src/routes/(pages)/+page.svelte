<script lang="ts">
  import ActionButton from "$lib/ActionButton.svelte";
  import musicPlayerImage from "$lib/assets/music-player-appkitbackend.webp";
  import "$lib/assets/jetbrainsmono.css";

  import windowsLogo from "$lib/assets/windows-logo.webp";
  import appleLogo from "$lib/assets/apple-logo.webp";
  import linuxLogo from "$lib/assets/linux-logo.webp";
</script>

<style>
  #hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 6rem;
    margin-bottom: 5rem;
  }

  #tagline {
    font-family: "JetBrainsMono";
    font-weight: bold;
    padding-bottom: 0.8rem;
    text-align: center;
  }

  #hero-image {
    width: min(140%, 95vw);
    border-radius: 1rem;
    margin-left: 50%;
    transform: translateX(-50%);
  }

  #call-to-action {
    position: relative;
    display: flex;
    align-items: center;
  }

  #platform-logos {
    position: absolute;
    left: calc(100% + 1rem);
    display: flex;
    gap: 0.5rem;
  }

  #platform-logos img {
    height: 1.5rem;
  }

	@media screen and (max-width: 600px) {
		#hero {
		  margin-top: 3rem;
		  margin-bottom: 3rem;
		}
	}
</style>

<section id="hero">
  <h1 id="tagline">Target 6 platforms, with one Swift codebase.</h1>
  <div id="call-to-action">
    <ActionButton title="Start building" href="https://docs.swiftcrossui.dev/tutorials/swiftcrossui/quick-start" />
    <div id="platform-logos">
      <img src={windowsLogo} alt="The Windows logo" />
      <img src={appleLogo} alt="The Apple logo" />
      <img src={linuxLogo} alt="The Linux logo" />
    </div>
  </div>
</section>

<img id="hero-image" src={musicPlayerImage} alt="SwiftCrossUI's MusicPlayer example app running on macOS" />
