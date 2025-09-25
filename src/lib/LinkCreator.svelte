<script>
  import { get } from "svelte/store";
  import { lengthenLink } from "../links";

  let link = $state("")

  let lengthenedLink = $derived(lengthenLink(link))
  let currentLocation = window.location.pathname
</script>

<div>
  <h1>Link too short?</h1>
  <label for="linkInput">Type in a link:</label>

  <input type="text" bind:value={link} id="linkInput">
  <p>{link}</p>
  <p>{lengthenedLink}</p>
  <p>{currentLocation}</p>
</div>