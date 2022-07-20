console.log("DOM is running...");

var test;

//innerText method
test = document.getElementById("domPractise").innerText;
//innerHTML method
test = document.getElementById("domPractise").innerHTML;
//getAttribute method
test = document.getElementById("domPractise").getAttribute("style");
//getAttributeNode method
test = document.getElementById("domPractise").getAttributeNode("style")
//attributes method
test = document.getElementById("domPractise").attributes;
//set innerText 
document.getElementById("setInnerText").innerText = "Now this text is comming from JS file";
test = document.getElementById("setInnerText").innerText;
test = "this text is from JS file";
//set innerHTML
document.getElementById("setInnerHtml").innerHTML = "Now this text is comming from JS file";
test = document.getElementById("setInnerHtml").innerHTML;
test = "this text is from JS file";
//setAttribute
document.getElementById("setAttribute").setAttribute("class", "classFromJs xyz");
test = document.getElementById("setAttribute").getAttribute("class");
//attributes Method
document.getElementById("attributes").attributes[1].value = "abc";
test = document.getElementById("attributes").attributes;
//removeAttribute
document.getElementById("removeAttributes").removeAttribute("class");
test = document.getElementById("removeAttributes").attributes;





console.log(test);