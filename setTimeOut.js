console.log("setTimeOut Method is runnig");

//setTimeOut Method 

function timeout() {
  document.getElementById("setTimeOut").innerHTML = "ThAaaaAAA";

  setTimeout(() => {
    a = document.getElementById("setTimeOut");
    a.style.color = "red";
  }, 2000);


}

let test = setTimeout(timeout, 5000);


//clearTimeOut
function clearTimeOut() {
  clearTimeout(test);
}
