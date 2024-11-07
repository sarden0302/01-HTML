const inputId = document.getElementById("inputId");
const inputPw = document.getElementById("inputPw");
const inputMp = document.getElementById("inputMp");
const inputTp = document.getElementById("inputTp");
const mode = document.getElementById("msg");

const inputId2 = document.getElementById("inputId2");
const inputPw2 = document.getElementById("inputPw2");

function login() {
    const id = inputId2.value;
    const pw = inputPw2.value;
    (id == "khtzzang" && pw == "kht1004") ? alert("로그인 성공") : alert("로그인 실패");
}

function signup() {
    const mp = inputMp.value;
    const tp = inputTp.value;

    mode.style.display = (mp || tp) ? "none" : "block";
    
}