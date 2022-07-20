console.log("querySelector.js is running...");

var test;
var check;

//querySelector
// document.querySelector("#querySelector").setAttribute("class","abc");
// test = document.getElementById("#querySelector").attributes;

document.querySelector(".querySelector").innerHTML = "This is Query Selector";
test = document.querySelector(".querySelector").innerHTML;
test = "This is Query Selector";

//querySelectorAll
document.querySelectorAll(".querySelector")[1].innerHTML = "Text changed";
document.querySelectorAll(".querySelector")[2].innerHTML = "Text changed";
document.querySelectorAll(".querySelector")[3].innerHTML = "Text changed";
// document.querySelectorAll("p.querySelectorPractise").innerHTML = "Text changed";
test = document.querySelectorAll(".querySelector")[1].innerHTML = "Text changed";




check = document.querySelectorAll(".querySelectorPractise p");

console.log(test);
console.log(check);
