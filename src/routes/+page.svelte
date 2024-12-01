<script lang="ts">
  import SelectorText from "./components/SelectorText.svelte";
  import FlipperImageText from "./components/FlipperImageText.svelte";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  let currentIndex = 0;

  const images: string[] = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYj9b1VTUS-AFI_MxT1Z-7ze-DinKc_O1HBg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYj9b1VTUS-AFI_MxT1Z-7ze-DinKc_O1HBg&s",
    "https://i.redd.it/a-little-fanart-of-saul-i-made-based-in-a-shitpost-picture-v0-rv5mdzwpbjra1.jpg?width=710&format=pjpg&auto=webp&s=7944beb499c69e36abed8b26067b262a076c6aae",
  ];
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
    class="mt-8 lg:w-3/5 text-gray-800 font-lato font-light text-lg lg:text-xl flex flex-col"
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
	font-lato font-light text-lg lg:text-xl flex justify-center items-center"
  >
    <!-- <ScrollingText bind:currentIndex /> -->
    <SelectorText bind:currentIndex />
  </div>

  <div class="lg:w-4/5 w-full flex lg:flex-row mt-4">
    <!-- <img src={images[selectedIndex]} /> -->
    <!-- <img
      src={conversationGood}
      loading="lazy"
      class="lg:w-3/5 shadow-xl rounded-sm"
    /> -->

    <div class="lg:w-3/5">
      <FlipperImageText />
    </div>

    {#if $isLargeScreen}
      <div
        class="text-gray-800 font-lato font-light mt-4 lg:w-2/5
	  text-lg lg:text-xl flex justify-center items-center lg:ml-4"
      >
        {#if currentIndex === 0}
          Pinkman starts poorly, calling Heisenberg directly without context.<br
          />He isn’t concise, doesn’t gather or share all relevant information,
          and fails to understand the issue.<br /> Midway, Heisenberg remains unclear
          about the problem and unable to assist.
        {:else if currentIndex === 1}{:else if currentIndex === 2}{/if}
      </div>
    {/if}
  </div>
</div>
