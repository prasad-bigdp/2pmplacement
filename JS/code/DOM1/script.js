console.log(document)
//DOM selection
const x1 = document.getElementsByTagName('p')
console.log(x1[0]);
const x2 = document.getElementsByClassName('para')
console.log(x2[0])
const x3 = document.getElementById('pa');
console.log(x3)
const x4 = document.querySelector('p')
console.log(x4)
const x5 = document.querySelectorAll("p")
console.log(x5)
// Manipulation
function fun ()
{
   // x3.textContent = "Byeeeeeeeeeeeeeeeeeeeee";
    // alert(x3.innerText)
    x3.innerHTML = `<b>Bye Bye </b>`
    x3.style.display = 'none';
}
function back ()
{
    x3.style.display= 'block'
}