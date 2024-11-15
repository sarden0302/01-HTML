function checkingEmail() {
    const userEmail = document.getElementById("user-email").value;
    const errorMsg = document.getElementById("error-msg");
    /*
        /^                 : 시작
        [A-z0-9.-_]        : 대문자, 소문자, 숫자, (.-_) 들어간 문자  
        +@                 : 앞에 설정 조건 이후 @가 들어가야함
        [A-z0-9.-가-힇]    : 회사명(도메인명) or 이메일.co 설정
        +\.                : 도메인명 작성 후 .(= period, dot)(특수문자는 \써야한다)
        [A-z가-힇]         : kr, com 같은 도메인명 설정
        {2,}               : 각 요소별 2글자 이상
        $/                 : 끝
    */
    const emailPattern = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-가-힇]+\.[a-zA-Z가-힇]{2,}$/;

    if(!emailPattern.test(userEmail)) {
        errorMsg.style.display = "block";
        return;
    }
    errorMsg.style.display = "none";
}

function checkPhone() {
    const userPhone = document.getElementById("user-phone").value;
    const errMsg = document.getElementById("err-msg");
    
    const phonePattern = /^01\d{1}-\d{3,4}-\d{3,4}$/;
    const phonePattern2 = /^01\[0-9]{1}-\[0-9]{3,4}-\[0-9]{3,4}$/;
    if (!phonePattern.test(userPhone)) {
        errMsg.style.display = "block";
        return;
    }
    errMsg.style.display = "none";
}