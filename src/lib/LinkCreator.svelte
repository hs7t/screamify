<script>
  import { lengthenLink } from "../links";

  let link = $state("")

  let lengthenedLink = $derived(lengthenLink(link))
  let lengthenerAddress = $derived(window.location.host + "/" + lengthenedLink)
</script>

<section class="link-creator">
  <header>
    <h1>Link too short?</h1>
    <img 
      src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/6a8e54dbcb7a0d25e3e488be17a56e87c0c3b356_largebobbycolor.svg" 
      alt="a pineapple-shaped character with a bubble reading 'https'"
    >
  </header>

  <div class="lengthener container">
    <div class="lengthener form">
      <label for="linkInput">Type in a link:</label>
      <input type="text" bind:value={link} id="linkInput">
    </div>

    <div class="lengthener result">
      <p>{lengthenerAddress}</p>
    </div>
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 3rem;
  }

  header {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  header img {
    width: 30%;
  }

  .lengthener.container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }

  .lengthener.form {
    display: flex;
    align-items: baseline;
  }

  .lengthener.form label {
    margin-right: 0.5rem;
  }

  .lengthener.form input {
    padding: 0.8ch;
    font-size: 0.8em;
    flex-grow: 1;
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
    flex-grow: 1;
    padding: 0.8ch;
    overflow-y: auto;
    background-color: inherit;
    color: var(--l-color-main);
    border: dashed 1pt var(--l-color-main);
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