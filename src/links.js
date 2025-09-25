const URL_SEPARATOR = ".";

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

  const divider = 20;

  const aAmount = (characterCode - (characterCode % divider)) / divider;
  const hAmount = characterCode % divider;

  characterRepresentation = "A".repeat(aAmount) + "H".repeat(hAmount);
  return characterRepresentation;
};

const getUnlengthenedBit = (bit) => {
  let output = "";

  if (characterNames.has(bit)) {
  }
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

const lengthenLink = (link) => {
  let textBits = [];
  for (const char of link) {
    textBits.push(getLengthenedCharacter(char));
  }

  let longLink = textBits.join(URL_SEPARATOR);
  return longLink;
};

const decodeLink = (link) => {
  let textBits = link.split(URL_SEPARATOR);

  for (let bit of textBits) {
    {
    }
  }
};

export { lengthenLink };
