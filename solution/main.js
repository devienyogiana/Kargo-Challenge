const lib = require("./mySolution"); //getting function from mySolution.js


let argv = require('yargs').argv; // getting input from user
let number = argv._; //saving the array

console.log(lib.printNumbers(number)); // Displaying the input to the user