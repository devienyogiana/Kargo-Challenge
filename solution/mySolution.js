function convertToString(number) {
    const hashMap = new Map([
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
    
    str = "";
    while (number > 0) {
        let curr = number % 10;
        number = Math.floor(number / 10);
        str = hashMap.get(curr) + str;
    }
    return str;
}

function printNumbers(array) {
    str = "";
    for (let i = 0; i < array.length; i++ ) {
        str += convertToString(array[i]) + ",";
    }
    return str.slice(0, str.length - 1);
}

module.exports = {convertToString, printNumbers};