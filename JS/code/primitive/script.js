let a = 55.859632;
let b = 25;
console.log(a, typeof a)
console.log(a.toFixed(2)) // number of decimal digits
console.log(a.toPrecision(3)) // total number of digits
console.log(b.toString(2)) // it converts number into certain base
//Math Methods
console.log(Math.max(3, 5)) // 5 - maximum value
console.log(Math.min(5, 8)) //5 - minimum value
console.log(Math.sqrt(16)) //4- square root
console.log(Math.cbrt(27)) //3 - cube root
console.log(Math.pow(2, 3), 2 ** 3) //8 - 2 power 3
console.log(Math.floor(3.8)) //3 - lowest nearest integer
console.log(Math.ceil(3.2)) //4 - highest nearest integer
console.log(Math.round(3.5)) //4 - rounding up the value
console.log(Math.round(Math.random() * 10000)) // random value between 0.0 to 1.0

// strings
let cost = 55;
console.log(`the cost is ${cost}`)// template literal
console.log(" the time is 5'o clock ")
console.log(' the gandhi said " good night "')
let str= " javascript is so easy "
console.log(str.length)//23
console.log(str.charAt(1),str[1])
console.log(str.indexOf('a')) // returns index of first occurence of element
console.log(str.lastIndexOf('a')) // returns the index of last occurence of element
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.startsWith('j')) //false
console.log(str.endsWith('easy')) //true
console.log(str.split(' '))
console.log(str.trim()) //remove front and back spaces
console.log(str.replace('a','b'))









