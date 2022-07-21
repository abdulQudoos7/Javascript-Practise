console.log("array.js is running...");

//toSring in array.
//toString method converts the array into a string.

let arr = [1,2,3,4,5];
test = arr.toString();
console.log(test);

let arr1 = ["this","is","a","string","array"];
console.log(arr1.toString());


//join() in array.
//join() is working like toString() but it differentiate string with given parameter.

let arr2 = ["this","is","a","string","array"];
console.log(arr2.join("*"));

// array push().
//push() add new value at the last index of array

let arr3 = ["this","is","push","method","of","array","and","the","result","is","=>",];
console.log(arr3)
arr3.push("pushMethod");
console.log(arr3);

//array pop
//pop() removes the last element of the array.

let arr4 = ["this","is","pop","method","of","array","and","the","result","is","=>","popMethod"];
console.log(arr4);
arr4.pop();
console.log(arr4);

//shift()
//shift() is used to remove first element of the array

let arr5 = ["shiftMethod","<=","this","is","shift","method","of","array","and","the","result","is","element","removed"];
console.log(arr5);
arr5.shift();
console.log(arr5);

//unshift()
//unshift() is used to add element at the first index of the array.

let arr6 = ["<=","this","is","unshift","method","of","array","and","the","result","is","element","removed"];
console.log(arr6);
arr6.unshift("unshift");
console.log(arr6);

// changing / replace value of index using index number[].
let arr7 = ["apple","banna","mango","orange"];
console.log(arr7);
arr7[2] = "kiwi";
console.log(arr7);

//array.length method;
let arr9 = ["apple","banna","mango","orange"];
console.log("length of arr9 is => " + arr9.length);

//adding element at last of array without push().
let arr8 = ["apple","banna","mango","orange"];
console.log(arr8);
arr8[arr8.length] = "peach";
console.log(arr8);

//delete method in array
let arr10 = ["apple","banna","mango","orange"];
console.log(arr10);
delete arr10[2];
console.log(arr10);

// merging arrays 
let fruits1 = ["apple","banna","mango","orange"];
let fruits2 = ["kiwi","grapes","peach","pineapple"];
a = fruits1;
b = fruits2;
console.log("fruits in array fruits1 are => " + a );
console.log("fruits in array fruits2 are => " + b );
let fruits = fruits1.concat(fruits2);
console.log(fruits);

// merging three arrays
console.log("merging three arrays");
let fruits3 = ["apple","banna","mango","orange"];
let fruits4 = ["kiwi","grapes","peach","pineapple"];
let fruits5 = ["pear","watermelon","strawberry","pineapple"];
console.log("fruits in array fruits3 are => " + fruits3 );
console.log("fruits in array fruits4 are => " + fruits4 );
console.log("fruits in array fruits5 are => " + fruits5 );
let mixFruits = fruits3.concat(fruits4,fruits5);
console.log(mixFruits);

//splice() 
console.log("splice()");
let fruits6 = ["apple","banna","mango","orange"];
console.log("fruits in array fruits6 are => " + fruits6 );
fruits6.splice(2, 0, "pear","peach","strawberry");
console.log(fruits6);
fruits6.splice(2, 1);
console.log(fruits6);
let removed = fruits6.splice(1, 2, "Lemon", "Kiwi");
console.log(fruits6);
console.log("removed fruits are "+ removed);














