function checkName() {
    const inputName = document.getElementById("nameInput").value;
    const result = document.getElementById("result");
    //              /^ 시작 $/끝
    const nameRegex = /^[가-힣]{2,5}$/; // 한글로 2~5자만 가능

    if (nameRegex.test(inputName) ) {
        result.className = "good";
        result.innerText = "유효한 형식의 이름입니다.";
        return;
    }

    result.className = "bad";
    result.innerText = "이름 형식이 유효하지 않습니다. 한글만 작성 가능합니다.";
}

function checkPhone() {
    const inputPhone = document.getElementById("InputPhone");
    const phoneResult = document.getElementById("phoneResult");

    console.log(inputPhone.value.trim().length);
    if (inputPhone.value.trim().length == 0) {
        phoneResult.innerText = "입력 후 확인바랍니다.";
        phoneResult.className = "bad";
        return;
    }

    const phoneRegex = /\d{2,3}-\d{3,4}-\d{4}/;

    if (phoneRegex.test(inputPhone.value)) {
        phoneResult.innerText = "유효한 번호 형식입니다.";
        phoneResult.className = "good";
        return;
    }

    phoneResult.innerText = "숫자만 입력 가능합니다 010부터 입력해주세요";
    phoneResult.className = "bad";
    
}

function checkMobile() {
    let mobilePhone = document.getElementById("mobilePhone").value;
    const mobileResult = document.getElementById("mobileResult");

    if (mobilePhone.trim().length == 0) {
        mobileResult.innerText = "확인 후에 입력 부탁드립니다.";
        mobilePhone.className = "bad";
        return;

    }

    //replace 활용 010-xxxx-xxxx -> 010xxxxxxxx
    if (mobilePhone.includes("-")) {
        console.log("include if문 내");
        mobilePhone = mobilePhone.replace(/-/g, "");
    }

    console.log(mobilePhone);
    const mobileRegex = /^[0-9]{10,11}$/;

    if (mobileRegex.test(mobilePhone)) {
        mobileResult.innerText = "유효한 번호 형식입니다.";
        mobileResult.className = "good";
        return;
    }

    mobileResult.innerText = "01x-xxxx-xxxx 형식으로 입력해주세요.";
    mobileResult.className = "bad";

}