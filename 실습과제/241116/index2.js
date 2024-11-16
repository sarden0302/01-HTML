const firstInput = document.getElementById("first_input");
const secondInput = document.getElementById("second_input");
const calculator = document.getElementById("calculator");
const index2Result = document.getElementById("index2_result");

function index2Button() {
    if (firstInput.value.trim().length == 0 || secondInput.value.trim().length == 0) {
        index2Result.innerText = "연산불가";
        index2Result.className = "cant";
        return;
    }
    const option = (calculator.option[calculator.selectedIndex].value);
    console.log(option);
}

function plus() {

}

function minus() {

}

function multiply() {

}

function divide() {

}

function remainder() {

}