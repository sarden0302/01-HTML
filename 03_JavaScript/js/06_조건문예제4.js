const inputScore = document.getElementById("inputScore");
const msg = document.getElementById("gradeMsg");

function checkGrade() {
    if (inputScore.value >= 90) {
        msg.innerText = "A";
        msg.className = "A";
    } else if (inputScore.value >= 80) {
        msg.innerText = "B";
        msg.className = "B";
    } else if (inputScore.value >= 70) {
        msg.innerText = "C";
        msg.className = "C";
    } else if (inputScore.value >= 60) {
        msg.innerText = "D";
        msg.className = "D";
    } else {
        msg.innerText = "F";
        msg.className = "F";
    }
}