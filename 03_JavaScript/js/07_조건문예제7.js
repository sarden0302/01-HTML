const age = document.getElementById("inputAge");

function checkAge() {
    //이중 if문 보다 메모리 효율이 좋다
    if (!age) {
        alert("나이를 입력해 주세요.")
        return;
    }

    const result = document.getElementById("result");
    if (Number(age.value) >= 18) {
        result.innerText = "성인입니다.";
    } else if (Number(age.value) >= 13) {
        result.innerText = "청소년입니다."
    } else {
        result.innerText = "어린이입니다. 보호자의 동의가 필요합니다."
    }
}
