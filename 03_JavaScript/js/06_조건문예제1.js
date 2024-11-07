const age = document.getElementById("age");
const ageMsg = document.getElementById("ageMsg");

function checkAge() {
    console.log(age.value);
    if (age.value >= 18) {
        ageMsg.innerText = "관람 가능합니다!";
        ageMsg.className = "success"; //p태그 class에 success 표기;
        //ageMsg.style.color = "green";
        //ageMsg.style.backgroundColor = "lightpink"
    } else {
        ageMsg.innerText = "18세 이상만 관람 가능합니다!";
        ageMsg.className = "fail";
        /*********** className과 style js 속성 차이점 *********/
        /*
            ageMsg.className = "fail";
                변수명.className = css 스타일 태그 안에 작성된
                              css 클래스 속성명 가져오기
                ※ 4순위 (.class 속성)

            ageMsg.style.color = "red";
            ageMsg.style.backgroundColor = "orange";
                변수명.style속성(배경색, 글자색, ..)
                ※ 2순위 (인라인 스타일)

            조건문에서 변수명.className으로 시작했다면 다른{}
            안에도 className 으로 맞출 것!!!
        */
    }
}