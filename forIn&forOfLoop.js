console.log("forInLoop.js is running...");
//object iteration via for in loop
let obj = {
  fName : 'jhon',
  lName : 'doe',
  age : 23,
  city : 'unknown'
};
for (const a in obj) {
    console.log(obj[a]);
}
//string iteration via for in loop
let str = 'This is a string';
for(let i in str){
  console.log(str[i]);
};

//for of loop

//array iteration via for of loop.
console.log('for..of loop starts here....')
let arr = ["This","is","forOf","loop","used","at","an","array","haha","HAHA","hahaaaa"];
for(let j of arr){
  console.log(j);
};


//forEach()
let arr1 = ["This","is","forEach","method"];
arr1.forEach(element => {
  console.log(element);
});
