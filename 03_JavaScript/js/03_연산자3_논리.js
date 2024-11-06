//document.get~ 특정 아이디,태그,클래스 가져오는 코드는 항상 위에 작성
//value 제외
const checkingId = document.getElementById("inputId");
const checkingPw = document.getElementById("inputPw");

function login() {
    const id = checkingId.value;
    const pw = checkingPw.value;

    const success = "로그인 성공!";
    const fail = "아이디 또는 비밀번호가 일치하지 않습니다.";

    (id == "member01" && pw == "pass01")? alert(success): alert(fail);
}

function checkNumber() {
    const pn = document.getElementById("phone").value;
    const tn = document.getElementById("tel").value;
    const msg = document.getElementById("msg");

    msg.style.display = ((pn || tn) ? "none" : "block");
}