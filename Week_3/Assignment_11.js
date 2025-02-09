let arr =[5, 3, 8, 1, 2]
function sortedArrayAscending(arr){
    return arr.sort((a,b)=> a - b);
}
function sortedArrayDescending(arr){
    return arr.sort((a,b)=> b - a)
}
let sort = sortedArrayAscending(arr)
console.log("Ascending Array:", sort)

let sorted = sortedArrayDescending(arr)
console.log("Descending Array:", sorted)
