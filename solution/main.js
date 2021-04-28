const lib = require("./mySolution");


let argv = require('yargs').argv;
let number = argv._;

console.log(lib.printNumbers(number));