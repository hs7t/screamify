const URL_SETTINGS = {
  separator: ".",
  divider: 20,
};

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
  [" ", "space"],
  ["0", "zero"],
  ["1", "one"],
  ["2", "two"],
  ["3", "three"],
  ["4", "four"],
  ["5", "five"],
  ["6", "six"],
  ["7", "seven"],
  ["8", "eight"],
  ["9", "nine"],
]);

const lengthenWithSymbolRep = (char) => {
  let symbolRepresentation;
  if (characterNames.has(char)) {
    symbolRepresentation = characterNames.get(char);
  } else {
    symbolRepresentation = char;
  }

  return symbolRepresentation;
};

const lengthenWithASCII = (char) => {
  const characterCode = char.charCodeAt(0);
  let characterRepresentation;

  const aAmount =
    (characterCode - (characterCode % URL_SETTINGS.divider)) /
    URL_SETTINGS.divider;
  const hAmount = characterCode % URL_SETTINGS.divider;

  characterRepresentation = "A".repeat(aAmount) + "H".repeat(hAmount);
  return characterRepresentation;
};

const unlengthenFromASCII = (bit) => {
  const aAmount = bit.match(/A/g);
  const hAmount = bit.match(/H/g);

  const characterCode = aAmount * URL_SETTINGS.divider + hAmount;
  const char = String.fromCharCode(characterCode);
};

const findKeyForValue = (map, query) => {
  for (let key_value of map) {
    let key = key_value[0];
    let value = key_value[1];
    if (value === query) {
      return key;
    }
  }
  return undefined;
};

const getLengthenedCharacter = (char) => {
  let output = [];

  if (/^[a-zA-Z]*$/.test(char)) {
    output.push(lengthenWithASCII(char));
  } else {
    output.push(lengthenWithSymbolRep(char));
  }

  return output;
};

const getUnlengthenedBit = (bit) => {
  let output = "";

  let matchingCharacterName = findKeyForValue(bit, characterNames);
  if (matchingCharacterName) {
    return matchingCharacterName;
  } else if (bit.length === 1) {
    return bit;
  } else if (isFinite(bit)) {
    return unlengthenFromASCII(bit);
  } else return undefined;
};

const lengthenLink = (link) => {
  let textBits = [];
  for (const char of link) {
    textBits.push(getLengthenedCharacter(char));
  }

  let longLink = textBits.join(URL_SETTINGS.separator);
  return longLink;
};

const decodeLink = (link) => {
  let textBits = link.split(URL_SETTINGS.separator);
  let plaintext = "";
  for (let bit of textBits) {
    {
      plaintext += getUnlengthenedBit(bit);
    }
  }
  return plaintext;
};

export { lengthenLink, decodeLink };
