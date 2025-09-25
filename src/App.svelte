<script>
  import { get } from "svelte/store";

  let link = $state("")

  const characterNames = new Map([
    [".", "dot"],
    [":", "colon"],
    [",", "comma"],
    ["/", "slash"],
    ["\\", "backslash"],
    ["$", "currencysign"],
    ["@", "at"],
    ["?", "questionmark"],
    ["(", "openparenthesis"],
    [")", "closeparenthesis"],
    ["=", "equals"],
    ["&", "ampersand"],
    [" ", "space"]
  ])

  const lengthenWithSymbolRep = (char) => {
    let symbolRepresentation
    if (characterNames.has(char)) {
      symbolRepresentation = characterNames.get(char)
    } else {
      symbolRepresentation = char
    }

    return symbolRepresentation
  }

  const lengthenWithASCII = (char) => {
    const characterCode = char.charCodeAt(0)
    let characterRepresentation
  
    const divider = 20

    const aAmount = ((characterCode - (characterCode % divider)) / divider)
    const hAmount = characterCode % divider

    characterRepresentation = "A".repeat(aAmount) + "H".repeat(hAmount)
    return characterRepresentation
  }

  const getLengthenedCharacter = (char) => {
    let output = []

    if (/^[a-zA-Z]*$/.test(char)) {
      output.push(lengthenWithASCII(char))
    } else {
      output.push(lengthenWithSymbolRep(char))
    }
    
    return output
  }

  const lengthenLink = (link) => {
    let textBits = []
    for (const char of link) {
      textBits.push(getLengthenedCharacter(char))
    }

    let longLink = textBits.join(".")
    return longLink
  }

  let lengthenedLink = $derived(lengthenLink(link))
  let currentLocation = window.location.pathname
</script>

<main>
  <input type="text" bind:value={link}>
  <p>{link}</p>
  <p>{lengthenedLink}</p>
  <p>{currentLocation}</p>
</main>