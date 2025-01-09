function firstNonRepeatingCharacter(str) {
  let frequency = getCharacterFrequency(str);

  for (let i = 0; i < str.length; i++) {
    if (frequency[str[i]] === 1) {
      return str[i]; // Return the first character with frequency 1
    }
  }
  return null; // Return null if no non-repeating character is found
}
console.log(firstNonRepeatingCharacter("aabccde")); // Output: "b"
