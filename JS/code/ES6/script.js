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

function display (a, b, ...c)
{
  let arr=[...c]
  console.log(a,b,c)
}
display(5, 4, 3, 5, 8)

class Car
{
  name; price; color;
}
/* create a class Electronis and create two objects and assign values and console them */
let obj1 = new Car()
obj1.name="kia"
let obj2 = new Car()
obj2.name = "mercedes"
console.log(obj1.name,obj2.name)


class Employee
{
  ename; eid; esalary;
  constructor(i,n,s)
  {    
    this.eid = i;  // this is a current calling object
    this.esalary = s;
    this.ename=n
  }
  getData ()
  {
    console.log(this.eid,this.ename,this.esalary)
  }
}
console.log(typeof Employee)
let emp2 = new Employee(1234, "prasad", 80000)
emp2.getData()

/* create a class teacher and use constructor to asiign values for tname,tid,tsalry and create teacher objects and print in console */
 class Manager extends Employee
{
  team;
  constructor(i, n, s, t)
  {
    super(i, n, s);
    this.team = t;
  }
}


/* use inheritance and declare a class principle extending teacher with attribute like profit */

export { Manager, Employee, arr }
export default display






