/* on -> 기능명
            javascript 내에 작성된 on 기능명이 존재
        
        // id를 가진 요소가 두 개가 일치한 값일 때는 첫 번째 hint 요소가 선택됌
        function 힌트포기() {
            const h = document.getElementById("hint");
            h.style.display = "block";
        }

        function 힌트숨기기() {
            const h = document.getElementById("hint");
            h.style.display = "none";
        }
        
        user_pw.addEventListener("focus", () => {
            h2.className = "hint";
        })

        user_id.addEventListener("blur", () => {
            h2.className = "";
        })
            
*/
/*
function showingHint(hint) {
    hint.className = "";
}

function hidingHint(hint) {
    hint.className = "hiding";
}*/

const id = document.querySelector('input[type="text"]');
const pw = document.getElementById("user-pw");

id.addEventListener("focus", () => {
    const h1 = document.getElementById("hint1");
    h1.className = "";
});

id.addEventListener("blur", () => {
    const h1 = document.getElementById("hint1");
    h1.className = "hiding";
});

pw.addEventListener("focus", () => {
    const h2 = document.getElementById("hint2");
    h2.className = "";
});

pw.addEventListener("blur", () => {
    const h2 = document.getElementById("hint2");
    h2.className = "hiding";
});