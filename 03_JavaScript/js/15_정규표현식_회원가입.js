function checking() {
    const result = document.getElementById("result");
    result.className = "error-msg";
    if (!checkingId(result)) {
        return;
    }

    if (!checkingPw(result)) {
        return;
    }

    if (!checkingName(result)) {
        return;
    }

    if (!checkingGender(result)) {
        return;
    }

    result.innerText = "수고하셨습니다. 좋은 하루 되세요 :)";
    result.className = "success-msg";
}

function checkingId(result) {
    const userId = document.getElementById("user-id");
    if (userId.value.trim().length == 0) {
        result.innerHTML = `아이디를 작성해주세요.`;
        return false;
    }

    const idRegex = /^[a-zA-Z0-9_-]{6,16}$/;
    if (!idRegex.test(userId.value)) {
        result.innerHTML = `영어 대/소문자 + 숫자 + 특수문자(-,_) 포함<br>6글자 이상 16글자 이하`;
        return false;
    }
    result.innerHTML = "";
    return true;
}

function checkingPw(result) {
    const userPw = document.getElementById("user-pw");
    const userRePw = document.getElementById("user-repw");

    console.log("checkingPw 시작");
    if (userPw.value.trim().length == 0) {
        result.innerHTML = `비밀번호를 작성해주세요.`;
        return false;
    }

    if (userRePw.value.trim().length == 0) {
        result.innerHTML = `비밀번호 확인을 작성해주세요.`;
        return false;
    }

    if (userPw.value != userRePw.value) {
        console.log("비밀번호 다를때 들어옴");
        result.innerHTML = "입력하신 비밀번호가 서로 같은지 확인해주세요.";
        return false;
    }

    const pwRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;
    if (!pwRegex.test(userPw.value)) {
        result.innerHTML = `영어 대/소문자 + 숫자 + 특수문자(!@#$%^&*) 포함<br>8글자 이상 20글자 이하`;
        return false;
    }
    return true;
}

function checkingName(result) {
    const userName = document.getElementById("user-name");

    if (userName.value.trim().length == 0) {
        result.innerHTML = `이름을 작성해주세요.`;
        return false;
    }

    const nameRegex = /^[가-힣]{2,15}$/;
    if (!nameRegex.test(userName.value)) {
        result.innerHTML = `한글로 2~15자 내외로 작성해주세요.`;
        return false;
    }

    return true;
}

function checkingGender(result) {
    const gender = document.getElementsByName("gender");
    if (!gender[0].checked && !gender[1].checked) {
        console.log("checked if문 들어옴");
        result.innerText = "남/여 중 하나만 체크해주세요.";
        return false;
    }
    return true;
}