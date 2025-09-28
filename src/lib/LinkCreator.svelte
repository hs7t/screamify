<script>
  import { lengthenLink } from "../links";

  let link = $state("")

  let lengthenedLink = $derived(lengthenLink(link))
  let lengthenerAddress = $derived(window.location.host + "/" + lengthenedLink)
</script>

<div class="pane link-creator">
  <h1>Link too short?</h1>

  <div class="lengthener container">
    <div class="lengthener form">
      <label for="linkInput">Type in a link:</label>
      <input type="text" bind:value={link} id="linkInput">
    </div>

    <div class="lengthener result">
      <p>{lengthenerAddress}</p>
    </div>
  </div>
</div>

<style>
  .pane {
    width: 100%;
  }

  .lengthener.container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .lengthener.form label {
    margin-right: 0.5rem;
  }

  .lengthener.form input {
    padding: 0.8ch;
    font-size: 0.8em;
    font-family: inherit;
    background-color: var(--l-color-background-overlay);
    border: solid 1pt var(--l-color-main);
    border-radius: 4pt;
    transition: all 80ms;
  }

  .lengthener.form input:focus {
    outline: dotted 1pt var(--l-color-main);
    outline-offset: 2pt;
  } 

  .lengthener.result {
    width: 100%;
    padding: 0.8ch;
    overflow-y: auto;
    background-color: inherit;
    color: var(--l-color-main);
    border: solid 1pt var(--l-color-main);
    border-radius: 4pt;

    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .lengthener.result::-webkit-scrollbar {
    display: none;
  }
  
  .lengthener.result p {
    padding: 0;
    margin: 0;
  }
</style>