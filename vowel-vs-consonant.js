let string = ["hello", "ukelele", "awesome", "onomonopia", "textbook"];

for (let j = 0; j < string.length; j++) {
  let consonants = 0;
  let vowels = 0;
  let word = string[j];
  for (let i = 0; i < word.length; i++) {
    if (
      word[i] == "a" ||
      word[i] == "e" ||
      word[i] == "i" ||
      word[i] == "o" ||
      word[i] == "u"
    ) {
      vowels++;
    } else {
      consonants++;
    }
  }

  console.log(
    word + " has " + consonants + " consonants and " + vowels + " vowels."
  );
}
