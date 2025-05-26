// check if word is same backwards

let word1 = prompt("Type 1st word");  // ex. RACECAR
let word2 = prompt("Type 2nd word");  // ex. RECORDER

// flip the words
let rev1 = word1.split("").reverse().join("");  // reverse word1
let rev2 = word2.split("").reverse().join("");  // reverse word2

// show orig n reversed
console.log("Word 1:", word1);
console.log("Reversed 1:", rev1);
console.log("Is Palindrome?", word1 === rev1);  // check if dsame

console.log("Word 2:", word2);
console.log("Reversed 2:", rev2);
console.log("Is Palindrome?", word2 === rev2);  // check if dsame

// OUTPUT using the words RACECAR n RECORDER
// Word 1:
// RACECAR
// Reversed 1:
// RACECAR
// Is Palindrome?
// true
// Word 2:
// RECORDER
// Reversed 2:
// REDROCER
// Is Palindrome?
// false
