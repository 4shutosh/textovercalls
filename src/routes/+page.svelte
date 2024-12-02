<script lang="ts">
  import SelectorText from "./components/SelectorText.svelte";
  import FlipperImageText from "./components/FlipperImageText.svelte";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import { explanations } from "../strings";
  import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION } from "../lib/siteconfig";
  let currentIndex = 0;
  let isFlipped = false;
  const isLargeScreen = writable(false);

  // Function to check the current screen width
  const checkBreakpoint = () => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    isLargeScreen.set(mediaQuery.matches);
  };

  // On mount, check the breakpoint and set the listener
  onMount(() => {
    checkBreakpoint(); // Initial check
    window.addEventListener("resize", checkBreakpoint); // Listen for window resize

    // Clean up the event listener when component is destroyed
    return () => {
      window.removeEventListener("resize", checkBreakpoint);
    };
  });
</script>

<svelte:head>
  <title>{SITE_TITLE}</title>
  <link rel="canonical" href={SITE_URL} />
  <link
    rel="alternate"
    type="application/rss+xml"
    href={SITE_URL + "/api/rss.xml"}
  />
  <meta property="og:url" content={SITE_URL} />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={SITE_TITLE} />
  <meta name="Description" content={SITE_DESCRIPTION} />
  <meta property="og:description" content={SITE_DESCRIPTION} />
  <!-- <meta property="og:image" content={DEFAULT_OG_IMAGE} /> -->
  <meta name="twitter:card" content="summary" />
  <meta
    name="theme-color"
    content="#FFFFFF"
    media="(prefers-color-scheme: light)"
  />
  <meta
    name="theme-color"
    content="#110f0f"
    media="(prefers-color-scheme: dark)"
  />
  <meta name="twitter:title" content={SITE_TITLE} />
  <meta name="twitter:description" content={SITE_DESCRIPTION} />
  <!-- <meta name="twitter:image" content={DEFAULT_OG_IMAGE} /> -->

  <script
    src="https://identity.netlify.com/v1/netlify-identity-widget.js"
  ></script>
</svelte:head>

<div
  class="flex flex-col justify-center items-center max-w-full overflow-x-hidden mx-4"
>
  <h1
    class="lg:w-3/5 mt-16 w-full
        text-black font-lato font-medium text-4xl lg:text-6xl"
  >
    text over calls
  </h1>

  <div
    class="mt-8 lg:w-3/5 text-gray-800 font-lato font-light text-md lg:text-xl flex flex-col"
  >
    <p class="mt-4">
      Have you ever been deep in focus, only to be interrupted by an unexpected
      call? It breaks your momentum, wastes time, leaves you distracted, and
      derails your day.
    </p>

    <p class="mt-4">
      Texts are great. Done right, they let you communicate without disrupting
      someone’s work, save time, and boost productivity.
    </p>

    <p class="mt-4">
      Explain what you need, why it matters, and how urgent it is, all in the
      most concise way possible. This way, you respect each other’s time and
      make things easier for everyone.
    </p>
  </div>
  <div
    class="sticky top-0 bg-white w-full text-gray-800
	mt-2 lg:mt-10
	font-lato font-light text-md lg:text-xl flex justify-center items-center"
  >
    <!-- <ScrollingText bind:currentIndex /> -->
    <SelectorText bind:currentIndex bind:isFlipped />
  </div>

  <div class="lg:w-4/5 w-full flex lg:flex-row my-4">
    <!-- <img src={images[selectedIndex]} /> -->
    <!-- <img
      src={conversationGood}
      loading="lazy"
      class="lg:w-3/5 shadow-xl rounded-sm"
    /> -->

    <div class="lg:w-3/5">
      <FlipperImageText bind:currentIndex bind:isFlipped />
    </div>

    {#if $isLargeScreen}
      <div
        class="text-gray-800 font-lato font-light lg:w-2/5
	  text-lg lg:text-xl flex justify-center items-center lg:ml-4"
      >
        {#if currentIndex === 0}
          {@html explanations.bad}
        {:else if currentIndex === 1}
          {@html explanations.good}
        {:else if currentIndex === 2}
          {@html explanations.great}
        {/if}
      </div>
    {/if}
  </div>

  <div
    class="mt-4 lg:w-3/5 text-gray-800 font-lato font-light text-md lg:text-xl flex flex-col"
  >
    <p class="mt-4">
      Calls have their place—urgent matters and real-time collaboration—but not
      every issue demands an interruption.
    </p>

    <p class="mt-4">
      Before scheduling or dialing, ask yourself: can this be solved with a
      simple text or email?
    </p>
  </div>

  <hr class="w-full mt-10 bg-gray-700" />

  <div
    class="lg:w-3/5 my-2 w-full text-sm flex flex-row gap-4 font-lato font-light italic
	text-gray-700 items-center justify-center"
  >
    <a
      href="https://github.com/4shutosh/textovercalls"
      class="hover:underline"
      target="_blank">Source Code</a
    >
    <a
      href="https://x.com/4shutoshSingh"
      class="hover:underline"
      target="_blank">Creator</a
    >
  </div>
</div>
