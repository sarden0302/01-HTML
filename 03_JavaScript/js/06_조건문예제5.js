const month = document.getElementById("month");
const msg = document.getElementById("seasonMsg");

function checkSeason() {
    if (month.value >= 3 && month.value <= 5) {
        msg.innerText = "봄입니다.";
        msg.className = "spring";
    } else if (month.value >= 6 && month.value <= 8) {
        msg.innerText = "여름입니다.";
        msg.className = "summer";
    } else if (month.value >= 9 && month.value <= 11) {
        msg.innerText = "가을입니다.";
        msg.className = "fall";
    } else if (month.value == 12 || (month.value >= 1 && month.value <=2)){
        msg.innerText = "겨울입니다.";
        msg.className = "winter";
    } else {
        msg.innerText = "1월부터 12월 사이를 작성해주세요.";
        msg.className = ""; //class 속성 초기화
    }
}