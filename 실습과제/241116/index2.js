const firstInput = document.getElementById("first_input");
const secondInput = document.getElementById("second_input");
const calculator = document.getElementById("calculator");
const index2Result = document.getElementById("index2_result");

function index2Button() {
    if (firstInput.value.trim().length == 0 || secondInput.value.trim().length == 0) {
        cantProcess();
        return;
    }
    const selected = calculator.value;
    if (selected == "plus") {
        plus();
        return;
    }
    if (selected == "minus") {
        minus();
        return;
    }
    if (selected == "multiply") {
        multiply();
        return;
    }
    if (selected == "divide") {
        divide();
        return;
    }
    remainder();
    return;
}

function plus() {
    console.log("plus 시작");
    index2Result.className = "normal";
    index2Result.innerText = Number(firstInput.value) + Number(secondInput.value);
    return;
}

function minus() {
    console.log("minus 시작");
    index2Result.className = "normal";
    index2Result.innerText = Number(firstInput.value) - Number(secondInput.value);
    return;
}

function multiply() {
    console.log("multiply 시작");
    index2Result.className = "normal";
    index2Result.innerText = Number(firstInput.value) * Number(secondInput.value);
}

function divide() {
    if (secondInput.value == "0") {
        cantProcess();
        return;
    }
    index2Result.className = "normal";
    index2Result.innerText = Number(firstInput.value) / Number(secondInput.value);    
}

function remainder() {
    console.log("remainder 시작");
    if (secondInput.value == "0") {
        cantProcess();
        return;
    }
    index2Result.className = "normal";
    index2Result.innerText = Number(firstInput.value) % Number(secondInput.value);
}

function cantProcess() {
    index2Result.innerText = "연산불가";
    index2Result.className = "cant";
}