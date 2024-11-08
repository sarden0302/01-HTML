/* 두 수가 같은지 비교 */
const v1 = document.getElementById("number1");
const v2 = document.getElementById("number2");
const r1 = document.getElementById("result1");

function 비교하기1() {
    /* 3항 연산자
        ( 조건부  ) ? true일 때 실행될 값  : false일 때 실행될 값;
    */ 
   /*
        innerHTML = <태그>content</태그> 까지 입력 가능
        innerText = content만 입력 가능
   */ 
    const alertResult = (v1.value == v2.value)? "같습니다" : "같지 않습니다";
    r1.innerText = (v1.value == v2.value)? "같습니다" : "같지 않습니다";
    r1.style.color = (v1.value == v2.value)? "orange" : "red";
    r1.style.backgroundColor = (v1.value == v2.value)? "black" : "white";
    
    alert(alertResult);
    /* 
        alert()로 보낼 값은 input으로 받은 값만 보낼 수 있다.
        span으로 받을 시 undefined 생성
    */
}

const in3 = document.getElementById("input3");
const in4 = document.getElementById("input4");
const r2 = document.getElementById("result2");

function 비교하기2() {
    r2.innerText = (in3.value > in4.value) ? "좌측 숫자 값이 더 큽니다" : "우측 값이 더 크거나 같습니다";
    r2.style.color = (in3.value > in4.value) ? "yellowgreen" : "lightblue";
}