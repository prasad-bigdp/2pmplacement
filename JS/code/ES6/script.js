let s = 0;
function sum (...a)
{
  const newArr=[4,5,...a,6]
}
sum(2,3,6,7);
console.log(s)

// destructuring
let arr = [5, 6, 7];
let [x, y, z] = arr;
console.log(x);
let obj = { name: "raj", age: 50 }
console.log(obj.age)
const { name, age } = obj;
console.log(age)
