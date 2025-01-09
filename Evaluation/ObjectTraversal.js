// to traverse the Object the we need to go for for...in loop

// let person = {
//   name: "Abhishek",
//   age: 30,
//   dept: "IT",
// };

// for (const key in person) {
//   console.log(`${key} : ${person[key]}`);
// }

// mapping character "ABHI" {`1 : A, 2 : B, 3 : H, 4 : I`}

// function mappingChar(str) {
//   let charMap = {};
//   for (let i = 0; i < str.length; i++) {
//     charMap[i + 1] = str[i];
//   }
//   console.log(charMap);
// }
// mappingChar("ABHI");

// Traversing the Frequency Object

// function getCharacterFreq(str) {
//   for (let char in str) {
//     console.log(`${char} appears in ${str[char]} times`);
//   }
// }
// getCharacterFreq("aabbbcdddd");

function firstNonRepeatingCharacter(str) {
  let frequency = {};

  for (let i = 0; i < str.length; i++) {
    if (frequency[str[i]] === 1) {
      return str[i]; // Return the first character with frequency 1
    }
  }

  return null; // Return null if no non-repeating character is found
}

console.log(firstNonRepeatingCharacter("aabccde")); // Output: "b"
