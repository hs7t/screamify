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
    <LinkReader {currentLocation} />
  {/if}
</main>

<style>
  main {
    width: 70%;
    margin: auto;
    justify-content: center;
  }
</style>