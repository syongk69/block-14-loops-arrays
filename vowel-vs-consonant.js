//input string variables in an array to check for number of consonants and vowels
// use FOR loops to check for number of consonants and vowels
// output using console.log to show number of consonants and vowels for each string variable

// input string variables in an array
const string = ["hello", "ukelele", "awesome", "onomonopia", "textbook"];

// use FOR loop for each string variable in an array
for (let j = 0; j < string.length; j++) {
  // reset consonants to 0
  let consonants = 0;
  // reset vowels to 0
  let vowels = 0;
  // assign each string variable in an array to word variable
  const word = string[j];
  // use FOR loop to check a string variable from an array
  for (let i = 0; i < word.length; i++) {
    // IF-ELSE statement to check for number of consonants and vowels
    if (
      word[i] === "a" ||
      word[i] === "e" ||
      word[i] === "i" ||
      word[i] === "o" ||
      word[i] === "u"
    ) {
      // count number of vowels
      vowels++;
      // count number of consonants
    } else {
      consonants++;
    }
  }

  // output using console.log to show number of consonants and vowels for each string variable
  console.log(
    word + " has " + consonants + " consonants and " + vowels + " vowels."
  );
}
