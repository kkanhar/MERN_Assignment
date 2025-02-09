let filterEvenNumbers = arr => arr.filter(num => num % 2 === 0);

let num = [1, 2, 3, 4, 5, 6];
let even = filterEvenNumbers(num);
console.log("Array:", num)
console.log("Even numbers:", even); 
