<script>
  import { get } from "svelte/store";
  import { lengthenLink } from "./links";

  let link = $state("")

  let lengthenedLink = $derived(lengthenLink(link))
  let currentLocation = window.location.pathname
</script>

<main>
  <input type="text" bind:value={link}>
  <p>{link}</p>
  <p>{lengthenedLink}</p>
  <p>{currentLocation}</p>
</main>