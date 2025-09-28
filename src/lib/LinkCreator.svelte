<script>
  import { lengthenLink } from "../links";

  let link = $state("")

  let lengthenedLink = $derived(lengthenLink(link))
  let lengthenerAddress = $derived(window.location.host + "/" + lengthenedLink)
</script>

<div>
  <h1>Link too short?</h1>
  <label for="linkInput">Type in a link:</label>

  <input type="text" bind:value={link} id="linkInput">
  <p>link: {link}</p>
  <p>{lengthenerAddress}</p>
</div>