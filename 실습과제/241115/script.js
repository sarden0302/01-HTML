const agreement = document.getElementsByName("agreement");
function buttonActive() {
    buttonAgreement.disabled = false;
}

function buttonAgreement(){
    for (let i = 0; i < agreement.length; i++) {
        if (!agreement[i].checked) {
            alert("모든 필수 약관에 동의해야 합니다.");
            buttonAgreement.disabled = true;
            return;
        }
    }
};

const idRegex = /^[A-z0-9]{5, 12}$/;
const buttonSignup = document.getElementById("buttonSignup");

buttonSignup.addEventListener('click',() =>{
    const userId = document.getElementById("user-id");
    const userPw = document.getElementById("user-pw");
    const userEmail = document.getElementById("user-email");

    console.log("checkingSignup 실행")
    if (!checkingId(userId.value)) {
        console.log("checkingId 실행");
        alert("아이디는 5~12자의 영문자 및 숫자여야 합니다.");
        return;
    }
    window.location.href = "finalPage.html";
    alert("로그인 성공");
});
function checkingId(userId) {
    if (userId.trim().length == 0) {
        console.log("trim");
        return false;
    }
    if (idRegex.test(userId)) {
        console.log("test");
        return false;
    }
    return true;
}