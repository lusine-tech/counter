const decrease = document.querySelector("#decrease");
const increase = document.querySelector("#increase");
const num = document.querySelector("#value");
let leftNumber = document.querySelector(".left-number");
let righNumber = document.querySelector(".right-number");
let leftInput = document.querySelector(".left-input");
let rightInput = document.querySelector(".right-input");


let integer = 0;
decrease.addEventListener("click", function () {
integer-=1;
num.innerHTML = integer;
});

increase.addEventListener("click", function () {
  integer += 1;
  num.innerHTML = integer;
});

leftInput = leftNumber.value;
rightInput; 