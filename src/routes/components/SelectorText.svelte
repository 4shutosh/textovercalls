<script lang="ts">
  const words: string[] = ["poor", "good", "great"];
  export let currentIndex = 0;

  function handleClick(index: number) {
    // Prevent click interference
    currentIndex = index;
  }
</script>

<div class="flex flex-row">
  Here's how to text in a
  {#each words as word, i}
    <div
      class="lg:mx-1 cursor-pointer {i === currentIndex
        ? 'font-medium'
        : 'font-light'} px-2 rounded-full {i === 0
        ? 'text-red-600'
        : i === 1
          ? 'text-orange-600'
          : i === 2
            ? 'text-green-600'
            : 'text-gray-600'}
            {i === 0 && currentIndex == i
        ? 'bg-red-100'
        : i === 1 && currentIndex == i
          ? 'bg-orange-100'
          : i === 2 && currentIndex == i
            ? 'bg-green-100'
            : 'bg-white'}"
      on:click={() => handleClick(i)}
    >
      {word}
    </div>
    {#if i != words.length - 1}
      /
    {/if}
  {/each}
  way.
</div>
