const inputId = document.getElementById("inputId");
const inputPw = document.getElementById("inputPw");
const inputMp = document.getElementById("inputMp");
const inputTp = document.getElementById("inputTp");
const mode = document.getElementById("msg");

function signup() {
    const id = inputId.value;
    const pw = inputPw.value;
    (id && pw) ? alert("로그인 성공") : alert("로그인 실패");
}

function login() {
    const mp = inputMp.value;
    const tp = inputTp.value;

    mode.style.display = (mp || tp) ? "none" : "block";
    
}