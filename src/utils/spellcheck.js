export default async function spellcheck(word) {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`
  );
  const result = await response.json();
  console.log(result[0]);
  if (!result[0]?.word) {
    return false;
  }
  return true;
}
