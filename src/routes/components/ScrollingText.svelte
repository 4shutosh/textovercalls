<script lang="ts">
  const words: string[] = ["poor", "good", "great"];
  export let currentIndex = 0;
  let startY: number = 0;
  let isScrolling: boolean = false;

  function handleTouchStart(event: TouchEvent) {
    startY = event.touches[0].clientY;
    isScrolling = false; // Reset scrolling here
  }

  function handleTouchMove(event: TouchEvent) {
    const currentY = event.touches[0].clientY;
    const diff = startY - currentY;

    if (Math.abs(diff) > 20) {
      if (diff > 0 && currentIndex < words.length - 1) {
        currentIndex++;
      } else if (diff < 0 && currentIndex > 0) {
        currentIndex--;
      }
      startY = currentY;
      isScrolling = true; // Set scrolling only on significant movement
    }
  }

  function handleClick(index: number) {
    if (!isScrolling) {
      // Prevent click interference
      currentIndex = index;
    }
  }
</script>

<!-- style="width: {Math.max(...words.map((word) => word.length)) * 0.6}rem" -->
<!-- style="transform: translateY({(i - currentIndex + 1) * 2}rem)" -->

<span class="inline-flex items-center mt-1">
  Here's how to text in a&nbsp;
  <div
    class="inline-flex overflow-hidden cursor-pointer touch-none h-24"
    style="width: {Math.max(...words.map((word) => word.length)) * 0.6}rem"
    on:touchstart={handleTouchStart}
    on:touchmove={handleTouchMove}
    on:touchend={() => (isScrolling = false)}
  >
    {#each words as word, i}
      <div
        id={`word-${i}`}
        class="absolute transition-transform duration-200 h-8 flex
        {i === 0
          ? 'text-red-500'
          : i === 1
            ? 'text-orange-500'
            : i === 2
              ? 'text-green-500'
              : 'text-gray-700'}
              {i === currentIndex ? 'text-opacity-100' : 'text-opacity-50'}
        items-center font-lato font-medium"
        style="transform: translateY({(i - currentIndex + 1) * 2}rem)"
        on:click={() => handleClick(i)}
        role="button"
        tabindex="0"
      >
        {word}
      </div>
    {/each}
  </div>
  way.
</span>

<style>
  div {
    user-select: none;
    -webkit-user-select: none;
  }
</style>
