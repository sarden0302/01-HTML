function calc() {
    const n1 = document.getElementById("number1");
    const n2 = document.getElementById("number2");
    const r = document.getElementById("res");

    const comp = (Number(n1.value) > Number(n2.value)) ? "첫 번째 숫자가 더 큽니다." : "두 번쨰 숫자가 더 크거나 같습니다.";
    const add = Number(n1.value) + Number(n2.value);
    const mul = Number(n1.value) * Number(n2.value);
    const sub = Number(n1.value) - Number(n2.value);    

    r.innerText = comp + "\n더하기 결과 : " + add + "\n곱하기 결과 : " + mul + "\n빼기 결과 : " + sub; 

}