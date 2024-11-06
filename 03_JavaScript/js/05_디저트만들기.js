const flour = "밀가루";
const sugar = "설탕";
const egg = "계란";
const chips = "초코칩";
/* 변수명으로 묶어 사용시 변경시 용이 */

const recipeText = document.getElementById("recipe-text");

function 치즈케이크레시피() {
    recipeText.innerText = flour + "와 " + sugar + "을 넣어 반죽합니다."
}

function 초코칩쿠키레시피() {
    recipeText.innerText = flour + "와 " + sugar + "와 " + chips + "을 넣어 반죽합니다."
}

function 크림빵레시피() {
    recipeText.innerText = flour + "와 " + egg + "을 넣어 반죽합니다."
}



