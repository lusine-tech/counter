const decrease = document.querySelector("#decrease");
const increase = document.querySelector("#increase");
const reset = document.querySelector("#reset");
const num = document.querySelector("#value");

const sum = document.querySelector(".sum");
const leftNumber = document.querySelector(".left-number");
const righNumber = document.querySelector(".right-number");


const result = document.querySelector(".result");





function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };

  this.down = function () {
    return --count;
  };

  this.reset = function () {
    return (count = 0);
  };
}

let counter = new Counter();

decrease.addEventListener("click", function () {
  num.innerHTML = counter.down();
});

increase.addEventListener("click", function () {
  num.innerHTML = counter.up();
});

reset.addEventListener("click", function () {
  num.innerHTML = counter.reset();
});


function add(a) {

    return function innerFunc(b) {

        return a + b;
    }
};




sum.addEventListener("click", function () {
    let leftInputValue = Number(leftNumber.value);
    let rightInputValue = Number(righNumber.value);
    console.log("add", add(leftInputValue)(rightInputValue));
    result.innerText = add(leftInputValue)(rightInputValue);

});

//timer start
const timerEl = document.getElementById("timer-text");
const startBtn = document.getElementById("start");
const restartBtn = document.getElementById("restart");
const stopBtn = document.getElementById("stop");

let runTheClock;
let seconds = 0;
time(seconds);

function makeTwoNumber(num) {
    return (num < 10 ? "0" : "") + num;
}

function tick() {
    seconds++;
    time(seconds);
}

function time(secs) {
    const hours = Math.floor(secs / 3600);
    const minutes = Math.floor(secs / 60) - hours * 60;
    const seconds = secs % 60;

    const val = [hours, minutes, seconds].map(makeTwoNumber).join(":");
    console.log(val);
    timerEl.textContent = val;
}

function runTimer() {
    runTheClock = setInterval(tick, 1000);
}

function stopTimer() {
    clearInterval(runTheClock);
}

function resetTimer() {
    seconds = 0;
    time(seconds);
}

restartBtn.addEventListener("click", resetTimer);
stopBtn.addEventListener("click", stopTimer);
startBtn.addEventListener("click", runTimer);

//timer end

//fibonacci start
function fibonacci(num) {
    if (num <= 1) {
        return 1;
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
}


let number = 0;
document.getElementById("add").addEventListener("click", function () {
    document.getElementById("fibResult").value = fibonacci(number);
    number++;
});

document.getElementById("clear").addEventListener("click", function () {
    document.getElementById("fibResult").value = "";
    number = 0;
});


//fibonacci end