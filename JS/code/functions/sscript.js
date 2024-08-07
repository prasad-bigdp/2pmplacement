// simple 
function display () // function declaration
{
    console.log("hello i'm a function")
    // function definition/body
}
console.log("hello world")
display();
// function can also have parameters and default values
function add (a, b=10)
{
    console.log("the addition is "+(a+b))
}
add(5, 3);
add(5);

// functions can return values
function sum (a, b)
{
    return a + b;
}
var sum = function (a, b) // function expression
{
    return a + b;
}
console.log(sum)
let x = sum(5, 6)
console.log(x)
var sum = (a, b) => a + b; //arrow functions





/* write a function  that calculates and prints square and cube of a number , use arrow function and function expression */
function sqaCube (a)
{
    console.log(a * a);
    console.log(a * a * a);
}
sqaCube(5)
/*Write a function that returns first and last letters of a given name in uppercase, try arrow/function */
/*input:"Prasad", output :"PD"*/
function strName (str)
{
    return str[0] + str[str.length-1].toUpperCase();
}
let result = strName("Prasad")
console.log(result)
//callbacks
// callback is a function which is passed as a parameter to another function
function mad ()
{
  console.log("i'm mad")
}
function bad (a,b)
{
    console.log(b)
    console.log("I'm bad"+a);
    b();
}
bad(5,mad)




function addCart ()
{
    console.log("item is added successfully")
}
function cart (a)
{
    a()
    console.log("proceed to checkout")
}
function Checkout (b)
{
    b(addCart)
    console.log("do the payment")
}
Checkout(cart)


// closures means inner function remeber outer function values even after outer function execution ended
function x2 (){
    var count = 0;
    function y(){
        count++;
        console.log(count)
    }
    return y;
}
let z = x2();
console.log(z);
z();
z();









