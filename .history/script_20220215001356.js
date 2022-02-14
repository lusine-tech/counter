const decrease = document.querySelector("#decrease");
const increase = document.querySelector("#increase");
const reset = document.querySelector("#reset");
const num = document.querySelector("#value");

const sum = document.querySelector(".sum");
const leftNumber = document.querySelector(".left-number");
const righNumber = document.querySelector(".right-number");
 
 
 const result = document.querySelector(".result");
 



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
    let leftInputValue = +leftNumber.value;
    let rightInputValue = +righNumber.value;
    console.log("add",add(leftInputValue)(rightInputValue));
  result.innerText = add(leftInputValue)(rightInputValue);

});







