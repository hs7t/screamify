<script>
  import { lengthenLink, unlengthenLink } from "../links";

  let link = $state("")

  let lengthenedLink = $derived(lengthenLink(link))
  let unlengthenedLink = $derived(unlengthenLink(lengthenedLink))
</script>

<div>
  <h1>Link too short?</h1>
  <label for="linkInput">Type in a link:</label>

  <input type="text" bind:value={link} id="linkInput">
  <p>link: {link}</p>
  <p>lengthened: {lengthenedLink}</p>
  <p>unlengthened: {unlengthenedLink}</p>
</div>