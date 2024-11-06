
let count = 0;
const result = document.getElementById("result1");
const input = document.getElementById("input1");


//const는 변경이 되지 않는 숫자(상수)를 담는 공간
function minus() {
    const vl = Number(input.value);
    count -= vl;
    //input에 작성한 값은 value라는 속성으로 작성된 값 가져오기를 할 수 있다
    result.innerText -= count;
}

function plus() {
    const vl = Number(input.value);
    //result.innerText = 글자형식으로 취급될 수 있기 때문에 동일하게 number로 설정
    count += vl;
    result.innerText = count;
    /* count라는 변수를 사용해 const 변수가 들어가도 변결될 값을 수정 & 저장 */
}

function mul() {
    result.innerText *= Number(document.getElementById("input1").value);
}