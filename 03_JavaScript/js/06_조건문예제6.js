let balance = 10000;
const output = document.getElementById("output");
output.innerText = balance;

const amount = document.getElementById("amount");

function withdraw() {
    if ((balance - Number(amount.value)) < 0) {
        alert("잔액이 부족하여 출금할 수 없습니다.");
    } else {
        balance -= Number(amount.value);
        output.innerText = balance;
        amount.value="";

    }
}

function deposit() {
    if (amount.value == 0) {
        alert("금액을 입금해주세요");
    } else {
        balance += Number(amount.value);
        output.innerText = balance;
        amount.value="";
    }
}