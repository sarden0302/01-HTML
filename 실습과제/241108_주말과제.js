let balance = 10000;
const output = document.getElementById("output");
output.innerText = balance;

function deposit() {
    const amount = document.getElementById("amount");
    if (amount.value == 0) {
        alert("금액을 입력하세요");
    } else {
        const password = prompt("비밀번호를 입력하세요 (정답 : 0000)");
        if (password != "0000") {
            alert("비밀번호 일치 x");
        } else {
            alert("비밀번호 0");
           
            balance += Number(amount.value);
            output.innerText = balance;
            amount.value = "";
        }
    }
    
}

function withdraw() {
    const amount = document.getElementById("amount");
    if (amount.value == 0) {
        alert("금액을 입력하세요");
    } else {
        const password = prompt("비밀번호를 입력하세요 (정답 : 0000)");
        if (password != "0000") {
            alert("비밀번호 일치 x");
        } else { 
            alert("비밀번호 0");
            if ((balance - Number(amount.value)) >= 0) {
                balance -= Number(amount.value);
                output.innerText = balance;
                amount.value = "";
            } else {
                alert("요청하신 금액이 현재 잔고보다 많습니다.")
            }
        }       
    }
}