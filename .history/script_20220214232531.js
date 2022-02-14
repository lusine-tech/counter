const decrease = document.querySelector("#decrease");
const increase = document.querySelector("#increase");
const reset = document.querySelector("#reset");
const num = document.querySelector("#value");
const leftNumber = document.querySelector(".left-number");
const righNumber = document.querySelector(".right-number");
const sum = document.querySelector(".sum");



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



sum.addEventListener("click", function (leftInput, rightInput) {
    return leftInput + rightInput;

});



function getValue2() {
    let leftInput = leftNumber.value;
    document.querySelector(".left-input").innerHTML = leftInput;
    let rightInput = righNumber.value;
    document.querySelector(".-input").innerHTML = leftInput;
}