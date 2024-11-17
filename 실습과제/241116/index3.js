const userId = document.getElementById("user_id");
const idResult = document.getElementById("id_result");
const userPw = document.getElementById("user_pw");
const userRepw = document.getElementById("user_repw");
const pwResult = document.getElementById("pw_result");
const userName = document.getElementById("user_name");

userId.addEventListener('keyup', () => {
    if (userId.value == "user01") {
        idResult.className = "unabled";
        idResult.innerText = "이미 존재하는 아이디입니다.";
        return;
    }
    idResult.className = "enabled";
    idResult.innerText = "사용가능한 아이디입니다.";
});

function checkingPw(event) {
    if (userPw.value == userRepw.value) {
        pwResult.className = "enabled";
        pwResult.innerText = "비밀번호가 일치합니다.";
        return;
    }
    pwResult.className = "unabled";
    pwResult.innerText = "비밀번호가 일치하지 않습니다.";
}

function index3_button() {
    if (userId.value.trim().length == 0) {
        alert("아이디를 입력해주세요.");
        userId.focus();
        return;
    }
    if (userPw.value.trim().length == 0) {
        alert("비밀번호를 입력해주세요.");
        userPw.focus();
        return;
    }
    if (userRepw.value.trim().length == 0 ) {
        alert("비밀번호 확인을 입력해주세요.");
        userRepw.focus();
        return;
    }
    if (userPw.value != userRepw.value) {
        alert("비밀번호가 일치하지 않습니다.");
        userRepw.value = "";
        userRepw.focus();
        return;
    }
    if (userName.value.trim().length == 0) {
        alert("이름을 입력해주세요.");
        userName.focus();
        return;
    }
    alert(userName.value+"님, 회원가입이 성공적으로 완료되었습니다^^");
    userId.value = "";
    userPw.value = "";
    userRepw.value = "";
    userName.value = "";
}