const age = document.getElementById("inputAge");

function check4() {
    if (age.value <= 13 && age.value >= 0) {
        alert("어린이입니다.");
    } else if (age.value >= 19 && age.value <= 120) {
        alert("성인입니다.");
    } else if (age.value >= 14 && age.value <= 18){
        alert("청소년입니다.");
    } else {
        alert("잘못 입력하셨습니다");
    }
}