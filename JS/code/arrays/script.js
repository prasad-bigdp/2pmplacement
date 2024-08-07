//arrays are used to store the values
let arr = [2, 5, 8, 4, 1];
console.log(arr[0] + arr[3])
// arrays have some default methods
console.log(arr.length) // no.of elements 
console.log(arr.push(5, 8, 7))// push is used to add values at the end of the array
console.log(arr)
console.log(arr.pop()) // remove last element of the array
console.log(arr)
console.log(arr.unshift(1, 2, 3))//unshift is used to add values at the start of the array
console.log(arr)
console.log(arr.shift())// shift is used to remove first element of the array
console.log(arr)
console.log(arr.splice(3, 3,10,11,12))// splice(starting-index,deleteCount,elements to add in that index)
console.log(arr)
// arr=[10,11,12,13,14] arr.splice(2,1,25)
 let friends= [ "john","ross","rachel","monika","phoebe","brad"]
// Remove "brad", add "joey"
friends.pop();friends.push("joey")
// remove "john" add "chandler"
friends.shift();friends.unshift("chandler")
// between rachel and monika , add "ursella"
friends.splice(3, 0, "ursella")
arr = [2, 3, 1, 4,3, 5];
console.log(arr.indexOf(3), arr.lastIndexOf(3), arr[2]);
console.log(arr.reverse());
arr=[1,5,4,11]
console.log(arr.sort())
console.log(arr.concat(1, 2, 3))
arr=[5,8,7,1,6]
// forEach
arr.forEach(function (x, y) {
	console.log(x * 2, y)
})  // write a foreach for above array which prints square of the number
let arr2=arr.forEach(function (x) {
    return x*x;
}) 
console.log(arr2)
let arr3 = arr.map(function (x) {
	return x*x
})
console.log(arr3)
// use map to iterate through array and return true/false if number is even or odd
// [5,8,2,1,4]-->[false,true,true,false,true]
let res = arr.map(function (ele)
{
    return ele % 2 == 0;
})
console.log(res)
let res2 = arr.filter(function (ele) {
	return ele % 2 == 0
})
console.log(res2)
arr=[5,4,8,1,4]
let result = arr.reduce(function (prev,curr)
{
    return prev + curr;
}, 10)
console.log(result)