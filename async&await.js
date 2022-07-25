console.log('async function is running...');

//async function

let test = async ()=>{
  console.log("1 : message.");
  console.log("2 : message.");
  await console.log("3 : message.");
  console.log("4 : message.");
  console.log("5 : message.");
};
console.log("Message before aysnc function.");
test();
console.log("Message after aysnc function.");
console.log("Message after aysnc function.");
console.log("Message after aysnc function.");
console.log("Message after aysnc function.");
