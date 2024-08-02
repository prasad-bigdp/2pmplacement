console.log("hello world")
console.log(k)
var a = 25;
var a = 30; // redeclaration is possible using var
a = 55; // reassigning is allowed using var
console.log(a);
console.log(b)
let b = 25;
// let b = 30; let and const cannot redeclare
b = 55; // reassigning is allowed using let
console.log(b);
const c = 25;
// c = 55; cannot reassign const value
// var is called funtion scoped variable
// let and const are called block scoped variables
function display ()
{
    if (true)
    {
        let x = 66;
    }
   console.log(x)
}
display()

/* write a html and console sum of two values using internal and external js , use proper comments also */