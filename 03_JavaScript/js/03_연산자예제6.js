function checkPW() {
    const pw = document.getElementById("inputPw");
    const pwConfirm = document.getElementById("inputPwConfirm");

    const success = "비밀번호가 일치합니다.";
    const fail = "비밀번호가 일치하지 않습니다.";
    //[규칙] 상수명, 변수명으로 true, false 사용할 수 없음
    (pw.value == pwConfirm.value) ? alert(success + "\n" + ((pw.value == "pass1234!")?"모두 일치":"다름")) : alert(fail);
}