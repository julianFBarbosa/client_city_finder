export function normalizeWords(words) {
  const splittedWords = words.split(" ");

  return splittedWords.map(
    (word) => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`
  );
}
