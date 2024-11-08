function check1() {
    // for문 사용시 const 사용x let 사용!
    // 숫자
    let 결과 = "";
    for (let 숫자 = 1; 숫자 <= 5; 숫자++) {
        결과 += 숫자;
        console.log("결과 : " + 결과);
    }
    console.log("====================");
    console.log("최종으로 출력되는 결과 값은 ");
    console.log(결과 + "입니다.");
}

function check2() {
    for (let number = 1; number < 11; number++) {
        console.log("1 ~ 10 :" + number);
    }
}

function check3() {
    for (let number = 1; number < 21; number++) {
        console.log("1 ~ 20 : " + number);
    }
}   

function check4() {
    let number = 5;
    for (number; number <= 15; number++) {
        console.log("5 ~ 15 : " + number);
    }

    alert("최종으로 출력된 수 : " + (number - 1));
}