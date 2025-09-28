<script>
  import { lengthenLink } from "../links";

  let link = $state("")

  let lengthenedLink = $derived(lengthenLink(link))
  let lengthenerAddress = $derived(window.location.host + "/" + lengthenedLink)

  function copyLengthened() {
    navigator.clipboard.writeText(lengthenerAddress)
  }
</script>

<section class="link-creator">
  <header>
    <span class="title-box">
      <h1>Link too short?</h1>
    </span>
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

    <div class="lengthener result container">
      <div class="lengthener result text">
        <p>{lengthenerAddress}</p>
      </div>
      <button onclick={copyLengthened}>copy</button>
    </div>
  </div>

  <footer>
    <p>🗣️ screamify by <a href="https://hvii.cc">Ali</a></p>
    <p><a href="https://github.com/hs7t/screamify">GitHub</a></p>
  </footer>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    padding-top: 10vh;
    width: 100%;
    gap: 3rem;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    opacity: 0.8;
  }

  footer p {
    padding: 0;
    margin: 0;
  }

  header {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  header .title-box {
    background-color: white;
    border-radius: 5pt;
    transform: rotate(-5deg);
    padding: 0.8ch;
    transition: all 500ms;
  }

  header .title-box:hover {
    transform: rotate(185deg);
  }

  header .title-box:active, header img:active {
    transform: scale(1.2);
  }
  
  header .title-box h1 {
    margin: 0;
    padding: 0;
  }

  header img {
    width: 30%;
    transition: all 100ms;
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
    outline: dashed 1pt var(--l-color-main);
    outline-offset: 2pt;
  } 

  .lengthener.result.container {
    display: flex;
    flex-direction: row;
  }

  .lengthener.result button {
    border: solid 1pt var(--l-color-main);
    background-color: var(--l-color-background-overlay);
    font-family: inherit;
    font-size: inherit;
    border-radius: 4pt;
    padding: 0.8ch;
    transition: all 120ms;
  }

  .lengthener.result button:hover {
    transform: scale(0.95);
    outline: solid 1pt var(--l-color-main);
    outline-offset: 2pt;
  }

  .lengthener.result button:active {
    transform: scale(1.1) rotate(-2deg);
    outline: none;
  }

  .lengthener.result.text {
    flex-grow: 1;
    padding: 0.8ch;
    overflow-y: auto;
    background-color: var(--l-color-background-overlay-secondary);
    color: var(--l-color-main);
    border: dashed 1pt var(--l-color-main);
    border-radius: 4pt;

    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .lengthener.result::-webkit-scrollbar {
    display: none;
  }
  
  .lengthener.result.text p {
    padding: 0;
    margin: 0;
  }
</style>