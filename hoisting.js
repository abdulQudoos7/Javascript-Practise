//Hoisting
console.log("Hoisting in js running...");


console.log("result before initializing " + result);
var result = 123;
console.log("result after initializing " + result);



function whoAmI(){
  console.log("My name before initializing " + name);
  var name = "Abdul Qudoos";
  console.log("My name after initializing " + name);
};
whoAmI();
