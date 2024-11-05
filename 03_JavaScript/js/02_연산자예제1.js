const number1 = document.getElementById("input1");
const number2 = document.getElementById("input2");
const number3 = document.getElementById("input3");
const result = document.getElementById("calcResult");

/*
    const value1 = number1.value;를 function 밖에 선언하면 안되는 이유
    function 먼저 읽기 때문에 number1.value, number2.value.. 가 
    0으로 초기화된다.
*/ 

/* 
    console.log(변수명) : javascript로 설정한 값을 확인하는 방법
*/
console.log("개발자가 코드 확인하는 공간");


console.log("==== plus 기능 들어가기 전");
const value1 = number1.value;

console.log("값1 : " + value1);

function plus() {
    console.log("==== plus 기능 들어간 후");
    const value1 = number1.value;
    console.log("값1 : " + value1);
    //plus()를 통해 함수가 호출 되면 실행
    result.innerText = Number(number1.value) + Number(number2.value) + Number(number3.value);
}

function multi() {
    result.innerText = Number(number1.value) * Number(number2.value) * Number(number3.value);
}

