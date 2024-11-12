/* 커피 쏠 사람 뽑기 기능 */
function randomCoffee() {
    const result = document.getElementById("result");

    const 사람들 = ["철수", "영희", "민수", "지수", "수민", "현아", "진호", "미나"];

    const 랜덤숫자 = Math.floor(Math.random() * 사람들.length );

    result.innerText = 사람들[랜덤숫자];
}