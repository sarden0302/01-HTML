const agreement = document.getElementsByName("agreement");
const button = document.getElementById("button");
function buttonActive() {
    button.disabled = false;
}

button.addEventListener('click', () => {
    for (let i = 0; i < agreement.length; i++) {
        if (!agreement[i].checked) {
            alert("모든 필수 약관에 동의해야 합니다.");
            button.disabled = true;
            return;
        }
    }
});

//1. 가입 버튼 성공시 성공.html로 이동
//2. addeventlistener 사용

const idRegex = /^[A-z0-9]{5, 12}$/;

function checkingSignup() {
    const userId = document.getElementById("user-id");
    const userPw = document.getElementById("user-pw");
    const userEmail = document.getElementById("user-email");

    console.log("checkingSignup 실행")
    if (!checkingId(userId)) {
        console.log("checkingId 실행");
        alert("아이디는 5~12자의 영문자 및 숫자여야 합니다.");
        return;
    }
}

function checkingId(userId) {
    if (userId.value.trim().length == 0) return false;
    if (!idRegex.test(userId.value)) return false;
    return true;
}