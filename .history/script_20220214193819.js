const decrease = document.querySelector("#decrease");
const increase = document.querySelector("#increase");
const num = document.querySelector("#value");
let left


let integer = 0;
decrease.addEventListener("click", function () {
integer-=1;
num.innerHTML = integer;
});

increase.addEventListener("click", function () {
  integer += 1;
  num.innerHTML = integer;
});