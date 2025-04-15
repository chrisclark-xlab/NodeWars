export default function spinWords(sentence: String) {
  const words = sentence.split(" ");
  return words
    .map((w) => {
      if (shouldSpinWord(w)) {
        return spinWord(w);
      }
      return w;
    })
    .join(" ");
}

function shouldSpinWord(word: String) {
  return word.length > 4;
}

function spinWord(word: String) {
  return word.split("").reverse().join("");
}
