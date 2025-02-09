let replaceWord = (str, oldWord, newWord) => str.replaceAll(oldWord, newWord);

let str = "I love JavaScript. JavaScript is awesome.";
let oldWord = "JavaScript";
let newWord = "Python";
console.log(replaceWord(str, oldWord, newWord));
