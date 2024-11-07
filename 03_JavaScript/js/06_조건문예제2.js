const score = document.getElementById("score");
const scoreMsg = document.getElementById("scoreMsg");

function checkScore() {
    if (score.value >= 60) { //문자열로 들어온 것을 숫자형으로 자동 변환 후 비교
        scoreMsg.innerText = "합격입니다.";
        scoreMsg.className = "success";
    } else {
        scoreMsg.innerText = "불합격입니다.";
        scoreMsg.className = "fail";
    }
}