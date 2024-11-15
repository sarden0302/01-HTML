//정규식 패턴 설정
const nameRegExp = /^[가-힇A-z]{2,32}$/;
const ageRegExp = /^[0-9]{,3}$/;
const emailRegExp = /^[A-z0-9.-_]+@[가-힇A-z0-9.-]+\.[A-z]{2,}$/;

function 제출(e) {  
    e.preventDefault(); //button 태그 안에 기본으로 작성된 제출 기능 동작 정지
    const name = document.getElementById("id-name").value;
    const age = document.getElementById("id-age").value;
    const email = document.getElementById("id-email").value;

    //유효성 검사
    //1.이름
    if (!nameRegExp.test(name)) {
        alert("이름이 정규식에 부합하지 않습니다.");
        return false;
    }
    //2.나이
    if (!ageRegExp.test(age)) {
        alert("나이가 정규식에 부합하지 않습니다.");
        return false;
    }
    if (age > 105) {
        alert("존재할 수 없는 나이입니다.");
        return false;
    } 
    //3.이메일
    if (!emailRegExp.test(email)) {
        alert("이메일 정규식에 부합하지 않습니다.");
        return false;
    }
    alert("회원가입이 완료되었습니다.");
}