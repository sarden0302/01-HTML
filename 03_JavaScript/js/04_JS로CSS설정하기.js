// 버튼 클릭 시 body 태그 안에 있는 글자색과 배경색 변경
/* 
    js에서 css 기능 사용 가능 (권장x)
    ※ css에서는 js 기능 사용 불가능
*/
const mode = document.getElementById("cssStyle");

//darkMode() 버튼 클릭 시 
function darkMode() {
    mode.style.color = "white";
    mode.style.backgroundColor = "black";
}

function lightMode() {
    mode.style.color = "black";
    mode.style.backgroundColor = "white";
}
