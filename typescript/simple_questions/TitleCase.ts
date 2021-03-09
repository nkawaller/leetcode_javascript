// Title-case a sentence

const TitleCase = (s: string): string => {
  return s
    .toLowerCase()
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
};

module.exports = TitleCase;

/**
 * Tests
 */

let lowerSentence = "title case a sentence in javascript";
console.log(TitleCase(lowerSentence));
