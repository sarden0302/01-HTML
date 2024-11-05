//변수를 선언해서 기능만들기
//document(문서) : HTML 문서(파일) 안에서
//getElementById : 요소들 중 id 값 가져오기
const num1 = document.getElementById("input1");
const num2 = document.getElementById("input2");
const finalResult = document.getElementById("result");

function plus() {
  /* input에서 type을 number로 설정해줘도 input 태그 
                    안에서 작성된 값은 문자열
                */
  //finalResult.innerText = num1.value + num2.value;
  /* 해결방법
                    데이터파싱(data parsing) : 문자 -> 숫자로 변경
                    Number()
                */
  finalResult.innerText = Number(num1.value) + Number(num2.value);
}

function minus() {
    finalResult.innerText = Number(num1.value) - Number(num2.value);
}

function multi() {
    finalResult.innerText = Number(num1.value) * Number(num2.value);
}

function division() {
    finalResult.innerText = Number(num1.value) / Number(num2.value);
}

function remainder() {
    finalResult.innerText = Number(num1.value) % Number(num2.value);
}

