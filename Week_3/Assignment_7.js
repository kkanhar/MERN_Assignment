let numbers =[]
for(let i=0; i<5; i++){
    let input = prompt(`Enter number ${i+1}:`)
    numbers.push(Number(input));
}
let sum = 0;
for(let i=0; i<numbers.length; i++)
{
    sum += numbers[i];
}
console.log("Sum of numbers:", sum)
