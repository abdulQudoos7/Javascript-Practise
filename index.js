// document.getElementById("demo").innerHTML = "this is first javaScript"; 

// document.getElementById("demo").innerHTML = 5 + 6

// document.write(4 + 4)

console.log("java script is running...")

// function btnFunction(){
//   document.getElementById("demo").innerHTML = 4 + 5
// }

let a, b, sum;
a = 1;
b = 4;
sum = a + b;
console.log("sum of 1 and 4 is " + sum);




function test(){
  document.getElementById("demo").innerHTML = "this is demo";
  document.getElementById("demo1").innerHTML = "this is demo1";

}


let $ = "this is $";
let $$ = " this is $$"
console.log($ + $$)

// const Object

const car = {type: "fiat", model: "500", color: "black" }
document.write(car.type)
car.owner = "jhon"
document.write(" owner of this car is ", car.owner)
car.color = "red"
document.writeln(" color of car is ", car.color)
console.log(car.color)

// car = {type: "toyota", model: "600", color: "white"}

document.getElementById("car").innerHTML = "Owner of this car is " + car.owner + "and type model and color of car is " + car.type +" "+ car.model +" "+ car.color;


// block scope

const x = 10;

{
  const x = 5;
  document.getElementById("innerBlock").innerHTML = x 
}

document.getElementById("outterBlock").innerHTML = x


// const hosting

carName = "volvo";

console.log(carName)

var carName;