let countChars = (str, char) => str.toLowerCase().split(char.toLowerCase()).length - 1;

let str = "programming";
let char = "g";
console.log(countChars(str, char));
