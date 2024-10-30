const text = "This is a test, sentence test with some bad words.";

const highlightForbiddenWords = (string: string, words: string[]): string => {
  if (!words || !Array.isArray(words)) {
    throw new Error('Argument words must be an array');
  }

  let newString: string = text;
  const getRegExp = word => new RegExp(`\\b${word}\\b`,'gi');

  words.forEach(word => {
    newString = newString.replace(getRegExp(word),`<del>${word}</del>`);
  });

  return newString;
}

document.addEventListener("DOMContentLoaded", (event) => {
  const forbiddenWords = prompt("Please enter forbidden words", "");

  if (forbiddenWords) {
    document.getElementById('text').innerHTML = highlightForbiddenWords(text, forbiddenWords.split(/, | |,/));
  }
});