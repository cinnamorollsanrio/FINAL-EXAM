// get names using prompt, separate with comma
let namesInput = prompt("Enter 5 names (ex: Cess, Melody):");

// same as the name but its age
let agesInput = prompt("Enter 5 ages (ex: 11, 10):");

// split names into array, trim spaces
let subArray1 = namesInput.split(",").map(x => x.trim());

// split age, trim n make number
let subArray2 = agesInput.split(",").map(x => Number(x.trim()));

// make new array [name, age]
let mdArray = [];

for (let i = 0; i < subArray1.length; i++) {
    mdArray.push([subArray1[i], subArray2[i]]);
}

// show each name n age per line
console.log("Restructured Multi-Dimensional Array:");
for (let pair of mdArray) {
    console.log(pair); // [name, age]
}

// OUTPUT - using the given number n names
// Enter 5 names (ex: Cess, Melody):Genevieve, Juan, Luna, Gabriel, Elise
// Enter 5 ages (ex: 11, 10):24, 65, 21, 5, 9
// Restructured Multi-Dimensional Array:
// [ 'Genevieve', 24 ]
// [ 'Juan', 65 ]
// [ 'Luna', 21 ]
// [ 'Gabriel', 5 ]
// [ 'Elise', 9 ]
