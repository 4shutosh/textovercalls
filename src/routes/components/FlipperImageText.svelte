<script>
  import { onMount } from "svelte";

  let isFlipped = false;
  let isBrowser = false;

  onMount(() => {
    isBrowser = true;
  });

  const handleFlip = () => {
    if (!isBrowser) return;

    const isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;
    if (!isLargeScreen) {
      isFlipped = !isFlipped;
    }
  };
</script>

<div
  class="relative cursor-pointer lg:cursor-default [perspective:1000px]"
  on:click={handleFlip}
>
  <div
    class="relative transition-transform duration-700 [transform-style:preserve-3d]"
    class:rotate-y-180={isFlipped}
  >
    <!-- Front side -->
    <div class="[backface-visibility:hidden]">
      <div class="relative">
        <img
          src={"conversationGood"}
          loading="lazy"
          alt="Conversation"
          class="object-cover rounded-lg shadow-lg"
        />
        <div class="absolute top-2 right-2 lg:hidden">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            class="fill-red-600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"
            />
          </svg>
        </div>
      </div>
    </div>

    <!-- Back side -->
    <div
      class="absolute inset-0 bg-white rounded-lg shadow-lg p-4 [transform:rotateY(180deg)] [backface-visibility:hidden] lg:hidden"
    >
      <div
        class="flex flex-col h-full font-lato font-light text-lg justify-center items-center space-y-4"
      >
        Pinkman starts poorly, calling Heisenberg directly without context.<br
        />He isn’t concise, doesn’t gather or share all relevant information,
        and fails to understand the issue.<br /> Midway, Heisenberg remains unclear
        about the problem and unable to assist.
      </div>
    </div>
  </div>
</div>

<style>
  .rotate-y-180 {
    transform: rotateY(180deg);
  }
</style>
