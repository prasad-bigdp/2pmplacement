// There are basic data types number,string,boolean,undefined,null,array,function,object. there are some advanced data types
// set - set is used to store or manipulate unique value
let s = new Set();
console.log(s);
s.add(5); // used to add values
s.add(2);
s.add(2);
console.log(s)
// delete is used for deleting, clear is used to clear whole set and has will check whether the element existed or not

// Map is used to take values whose key values are unique
let m = new Map();
m.set('name', 'prasad');
m.set('name','raj')
console.log(m.get('name'), m)

// date
let dt = new Date();
console.log(dt)
console.log(dt.getTime()) //time in milliseconds from mid night
console.log(dt.toLocaleTimeString())
dt.setDate(25)
console.log(dt);


//Regex
// they are used to create patterns
let re= /[A-Za-z]{3}/
console.log("hai bye something".match(re))
















