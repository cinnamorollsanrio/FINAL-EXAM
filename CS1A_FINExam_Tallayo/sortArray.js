// ask user to input numbers seperated by comma
// i use \n so its cleaner to look at
let numbersInput = prompt("Enter numbers separated by comma (Ex: 24, 65):");

// split input by comma, clean spaces, change each text to number
let numbers = numbersInput.split(",").map(num => Number(num.trim()));

// same as the first one also seperated by comma but its names
let namesInput = prompt("Enter names separated by comma (Ex: Cess, Haylie):");

// names stays as text
let names = namesInput.split(",").map(name => name.trim());

// both name and numbers combine as array
let merged = numbers.concat(names);
console.log("Merged Array:", merged);

// reverse, from largest to smallest number
let numbersSortedRev = numbers.sort((a, b) => b - a);
console.log("Numbers Sorted Reverse:", numbersSortedRev);

// alphabetically arrange
let namesSorted = names.sort();
console.log("Names Sorted Alphabetically:", namesSorted);

// OUTPUT - using the given numbers n name
// Merged Array:
// (14) [24, 65, 21, 5, 9, 32, 42, 80, 57, "...]  
// Numbers Sorted Reverse:
// (9) [80, 65, 57, 42, 32, 24, 21, 9, 5]
// Names Sorted Alphabetically:
// (5) ["Alicia", "Erica", "Jordie", "Redon...]   
