let hashMap = new Map([
    [0, "Zero"],
    [1, "One"],
    [2, "Two"],
    [3, "Three"],
    [4, "Four"],
    [5, "Five"],
    [6, "Six"],
    [7, "Seven"],
    [8, "Eight"],
    [9, "Nine"],
]);

let argv = require('yargs').argv;
let number = argv._;

for (let i = 0; i < number.length; i += 1) {
    process.stdout.write(convertToString(number[i])+ ",");
}
console.log("\n");

function convertToString(number) {
    str = "";
    while (number > 0) {
        let curr = number % 10;
        number = Math.floor(number / 10);
        str = hashMap.get(curr) + str;
    }
    return str;
}