const inputScore = document.getElementById("inputScore");
// input이 아닌 p나 span이나 h1같은 태그들은 value 값이 없음
const msg = document.getElementById("gradeMsg");

msg.innerText = "성적 : ";

function checkGrade() {
    if (inputScore.value >= 90) {
        msg.innerText += " A"; //성적 : 이라는 글자에 A라는 글자를 이어붙여 출력
        msg.className = "A";
    } else if (inputScore.value >= 80) {
        msg.innerText += " B";
        msg.className = "B";
    } else if (inputScore.value >= 70) {
        msg.innerText += " C";
        msg.className = "C";
    } else if (inputScore.value >= 60) {
        msg.innerText += " D";
        msg.className = "D";
    } else {
        msg.innerText += " F";
        msg.className = "F";
    }
    
}