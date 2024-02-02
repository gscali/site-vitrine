<script lang="ts">
  import Icon from '@iconify/svelte';

  let elem: HTMLDivElement;

  let data = [
    {
    image: "https://picsum.photos/seed/1/300/200",
    name: "Loi Carrez",
    description: "Laboris qui duis quis cupidatat laboris occaecat sit elit labore ad.",
  },
  {
    image: "https://picsum.photos/seed/2/300/200",
    name: "Diagnostic amiante",
    description: "Elit est velit laborum ut deserunt."
  },
  {
    image: "https://picsum.photos/seed/3/300/200",
    name: "Diagnostic plomb",
    description: "Aliquip enim cupidatat consectetur sunt dolor officia sint ipsum consequat dolor.",
  },
  {
    image: "https://picsum.photos/seed/4/300/200",
    name: "Diagnostic gaz",
    description: "Reprehenderit ullamco exercitation dolor eu culpa.",
  },
  {
    image: "https://picsum.photos/seed/5/300/200",
    name: "Diagnostic électricité",
    description: "Lorem nisi culpa fugiat non id tempor.",
  },
  {
    image: "https://picsum.photos/seed/6/300/200",
    name: "Diagnostic termites",
    description: "Dolore consequat voluptate non pariatur voluptate cupidatat esse officia aute.",
  },
  {
    image: "https://picsum.photos/seed/7/300/200",
    name: "Diagnostic ERNMT",
    description: "Laborum veniam aliqua consectetur dolore proident tempor.",
  },
  {
    image: "https://picsum.photos/seed/8/300/200",
    name: "Diagnostic DPE",
    description: "Ullamco esse deserunt do do sunt tempor minim cillum eiusmod sunt eu laboris.",
  },
  {
    image: "https://picsum.photos/seed/9/300/200",
    name: "Diagnostic blabblabla",
    description: "Laboris qui duis quis cupidatat laboris occaecat sit elit labore ad.",
  },
  ];

  function multiColumnLeft(): void {
    let x = elem.scrollWidth;
    if (elem.scrollLeft !== 0) x = elem.scrollLeft - elem.clientWidth;
    elem.scroll(x, 0);
  }

  function multiColumnRight(): void {
    let x = 0;
    // -1 is used because different browsers use different methods to round scrollWidth pixels.
    if (elem.scrollLeft < elem.scrollWidth - elem.clientWidth - 1) x = elem.scrollLeft + elem.clientWidth;
    elem.scroll(x, 0);
  }
            
</script>

<div class="container mx-auto flex flex-col items-center pt-8 pb-16">
  <div class="flex flex-col bg-surface-500 w-[80%] gap-8">
    <div class="grid grid-cols-3 gap-8 place-items-center">
      <div class="h-1 bg-secondary-500/50 rounded-md w-full" />
      <h2 class="text-4xl font-bold text-secondary-500">NOS DIAGNOSTICS</h2>
      <div class="h-1 bg-secondary-500/50 rounded-md w-full" />
    </div>

    <div class="grid grid-cols-[auto_1fr_auto] gap-4 items-center">
      <!-- Button: Left -->
      <button type="button" class="btn-icon" on:click={multiColumnLeft}>
        <Icon icon="mingcute:arrow-left-fill" class="w-8 h-8 text-secondary-500" />
      </button>
      <!-- Carousel -->
      <div bind:this={elem} class="snap-x snap-mandatory scroll-smooth flex gap-2 pb-2 overflow-x-auto">
        {#each data as diagnostic}
          <div class="shrink-0 w-[24%] snap-start">
            <img
              class="rounded-container-token hover:brightness-125"
              src={diagnostic.image}
              alt={diagnostic.name}
              title={diagnostic.name}
              loading="lazy"
            />
            <div class="flex flex-col justify-center card p-2 variant-filled-surface m-3 drop-shadow-md gap-2">
              <h3 class="text-md font-bold text-secondary-500">{diagnostic.name}</h3>
              <p class="text-xs text-gray-700">{diagnostic.description}</p>
            </div>
          </div>
        {/each}
      </div>
      <!-- Button-Right -->
      <button type="button" class="btn-icon" on:click={multiColumnRight}>
        <Icon icon="mingcute:arrow-right-fill" class="w-8 h-8 text-secondary-500" />
      </button>
    </div>
  </div>
</div> 