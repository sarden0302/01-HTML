function check1() {
    let val; //undefined로 선언

    while (val !== null) {
        //값과 자료형이 모두 다른 경우
        //!val과 차이점?

        //확인 = 빈 값이 초기에 들어있음
        //취소 = null 값으로 초기화
        val = prompt("입력 후 확인하기");


        alert(val + " 값을 확인했습니다.");
        console.log(val);
    }
} 

function check2() {
    let age;
    while (age !== null) {
        age = prompt("나이를 입력해주세요.");

        if (age >= 18) {
            alert("성인입니다.");
        } else if (age >= 13) {
            alert("청소년입니다.");
        } else if (age < 12 && age != null) {
            console.log(age);
            alert("어린이입니다.");
        } else {
            continue;
        }
    }
}

function check3() {
    let gender;
    while (gender !== null) {
        gender = prompt("성별을 입력해주세요");
        if (gender === "남성" || gender === "남자" || gender === "남") {
            alert("남성입니다.");
        } else if (gender === "여성" || gender === "여자" || gender === "여") {
            alert("여성입니다");
        }
    }
}