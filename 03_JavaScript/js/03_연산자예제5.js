const n1 = document.getElementById("num1");
const n2 = document.getElementById("num2");
const rst = document.getElementById("result");

function sum() {
    let v1 = n1.value;
    let v2 = n2.value;
    console.log(v1 + " " +v2);
    //계산할 때 Number를넣어준다.
    let total = Number(v1) + Number(v2);
    rst.innerText = total;
}

function mul() {
    let v1 = n1.value;
    let v2 = n2.value;
    console.log(v1 + " " +v2);
    let total = Number(v1) * Number(v2);
    rst.innerText = total;
}

function evenOdd() {
    let v1 = n1.value;
    let v2 = n2.value;
    const sumResult = Number(v1) + Number(v2);
    const isEven = (sumResult % 2 == 0) ? "짝수입니다": "홀수입니다";
    rst.innerText = "합 : " + sumResult + "은(는) " + isEven;
}