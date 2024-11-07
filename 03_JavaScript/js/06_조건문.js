const input1 = document.getElementById("input1");

function check1() {
    const v1 = Number(input1.value);

    // if (true일 경우) { 실행하기!; }
    if (0 < v1) {
        alert("0보다 큰 양수입니다");
    }
    
    if (v1 <= 0) {
        alert("0보다 같거나 0보다 작은 수 입니다.");
    }
}
