let count = 0;
const mode = document.getElementById("cssStyle");
/* 웹페이지가 닫히거나 이동하기 전까진 변수 count는
    실행을 할 때마다 변경 된다
*/

function 증가() {
    count += 1;
    console.log("count : " + count);
    document.getElementById("count").innerText = count;
    mode.style.backgroundColor = count % 2 == 1? "#f0f0f0" : "#ffd1dc";
}

function 초기화() {
    count = 0;
    console.log("count : " + count);
    document.getElementById("count").innerText = 0;
    mode.style.backgroundColor = "#f0f0f0";
}

function 감소() {
    count -= 1;
    console.log("count : " + count);
    document.getElementById("count").innerText = count;
    mode.style.color = (count % 2 == 0) ? "orange" : "black";
}