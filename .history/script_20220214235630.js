const decrease = document.querySelector("#decrease");
const increase = document.querySelector("#increase");
const reset = document.querySelector("#reset");
const num = document.querySelector("#value");
const leftNumber = document.querySelector(".left-number");
const righNumber = document.querySelector(".right-number");
const sum = document.querySelector(".sum");
 let leftInputValue = leftNumber.value;
 //document.querySelector(".left-input").innerHTML = leftInput;
 let rightInputValue = righNumber.value;
 //document.querySelector(".right-input").innerHTML = rightInput;
 const result = document.querySelector



let integer = 0;
decrease.addEventListener("click", function () {
    integer -= 1;
    num.innerHTML = integer;
});

increase.addEventListener("click", function () {
    integer += 1;
    num.innerHTML = integer;
});

reset.addEventListener("click", function () {
    integer = 0;
    num.innerHTML = integer;
});


function add(a) {
   
    return function innerFunc(b) {

return a + b;
    }
};

sum.addEventListener("click", function () {
  add(leftInputValue)(rightInputValue);


});



