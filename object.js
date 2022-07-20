console.log("object file is running...")

//Object

let obj = {
  firstName : "Abdul",
  lastName : "Qudoos",
  email : "abc@xyz.com",
  address : "Mecleod Gunj",
  objArray : ["arrayObj1","arrayObj2","arrayObj3","arrayObj4",],
  obj2 : {
    edu : "BSCS",
    uni : "IUB",
  },
  fullName : function () {
    // return (obj.firstName + " " + obj.lastName);
    return (this.firstName + " " + this.lastName);
  },
  Salary : function(){
    return 20000;
  },
  
};

document.getElementById("object").innerHTML = obj.email;
console.log(obj);
document.getElementById("objArray").innerHTML = obj.objArray;
document.getElementById("objArray1").innerHTML = obj.objArray[1];
document.getElementById("objfunction").innerHTML = obj.Salary();
document.getElementById("objfunction1").innerHTML = obj.fullName();
document.getElementById("objobj").innerHTML = obj.obj2.edu;


// object second method

let secondObj = new Object();
secondObj.firstName = "main nahi";
secondObj.lastName = "bataon ga";

console.log(secondObj);