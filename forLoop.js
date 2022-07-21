// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// for (let i = 0; i < cars.length; i++) {
//   const element = cars[i];
//   document.getElementById("forLoop").innerHTML = element;
//   console.log(element);
// }


const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

document.getElementById("forLoop").innerHTML = text;
2
console.log(text);
console.log(cars);
