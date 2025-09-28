<script>
  import { get } from "svelte/store";
  import LinkCreator from "./lib/LinkCreator.svelte";
  import LinkReader from "./lib/LinkReader.svelte";
  let currentLocation = window.location.pathname

</script>

<main>
  {#if currentLocation === "/"}
    <LinkCreator />
  {:else}
    <LinkReader />
  {/if}
</main>