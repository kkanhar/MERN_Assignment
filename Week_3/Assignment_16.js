const countVowels = str => (str.toLowerCase().match(/[aeiou]/g) || []).length;

const inputString = "Hello World";
console.log(inputString)
const numVowels = countVowels(inputString);
console.log("Number of vowels:", numVowels); 
