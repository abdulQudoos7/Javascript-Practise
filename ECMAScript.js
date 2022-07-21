console.log("ECMAScript practise is running...");

const obj = {
  name : "ECMAScript",
  version : "es6",
  year : 2015,
};

document.getElementById("obj").innerHTML = obj.name;

names = obj.name;

document.getElementById("destruction").innerText = names;
// object destructing
const { version, year } = obj; 

document.getElementById("destruction1").innerHTML = version;

check = document.getElementById("destruction1").innerHTML;

check = version;


console.log(names);
console.log(version);


document.getElementById("templateString").innerHTML = `This is template string of ${names} and version is ${version} released in ${year}.`;

let abc = () => {
  return "This is simple arrow function";
};

document.getElementById("arrowFunction").innerHTML = abc();

console.log(abc());

let bcd = (a,b) => a + b;
document.getElementById("arrowFunction1").innerHTML = bcd(4,6);
console.log(bcd(2,2));

