// loops are used to repeat certain statements againa and again until a particular condition false*/
/* iteration -repeatation of a loop */
//1. while: while must have initialization, condition, updation and it iterate the loops until condition proven false.

i = 5; //initalization
while (i <= 10) //condition
{
    console.log(i);
    i++; //updation
}

//2. dowhile : it also does similar to while but it checks condition at the end of the loop
i = 51;
do
{
    console.log(i);
    i++;
} while (i <= 10);

//3. standard for : for(initialization;condition;updation)
for (let i = 0; i <= 10; i++)
{
    console.log(i);
}
//"prasad" ---> "PrAsAd"
let str = "prasad";
let str1=''
for (let i = 0; i < str.length; i++)
{
    str1 += (i % 2 == 0) ? str[i].toUpperCase() : str[i].toLowerCase();
}
console.log(str1)
let arr = [5, 8, 9, 1, 2]
for (let k of arr)
{
    console.log(k)
}
for (let k in arr)
{
    console.log(k)
}
// ["Ajay Raj","John Doe","Raj shekhar","Pooja Begum"]-- ["AR","JD","RS","PB"]
let w=''
w += "Ajay Raj".split(" ").map(ele => ele[0]);
console.log(w)





