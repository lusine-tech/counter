const decrease = document.querySelector("#decrease");
const increase = document.querySelector("#increase");
const increase = document.querySelector("#increase");
const num = document.querySelector("#value");
const leftNumber = document.querySelector(".left-number");
const righNumber = document.querySelector(".right-number");



let integer = 0;
decrease.addEventListener("click", function () {
integer-=1;
num.innerHTML = integer;
});

increase.addEventListener("click", function () {
  integer += 1;
  num.innerHTML = integer;
});

function myclick() {
  let leftInput = leftNumber.value;
  document.querySelector(".left-input").innerHTML = leftInput;
}

 

function getValue2() {
 let rightInput = righNumber.value;
}