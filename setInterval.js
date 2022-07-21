console.log("setInterval is running...")
let a = 0;
function forward() {
  a = a + 10;
  if (a == 200) {
    clearInterval(stop);
  } else {
    // console.log(a);
    let anim = document.getElementById("test");
    anim.style.marginLeft = a + 'px';
  }
};

//second function
function calling(){
  console.log("CALLING");
};

// var stop = setInterval(forward, 500);
var stop = setInterval(function(){
  forward()
  calling()
}, 500);
// var stopcalling = setInterval(calling, 500);

function btnStop(){
  clearInterval(stop);
}