const fruits = ["사과", "오렌지", "바나나", "체리", "망고", "포도", "딸기", "파인에플", "블루베리", "복숭아"];

console.log("과일들의 총 개수 : " + fruits.length);
console.log("index 5에 위치한 과일은 " + fruits[5] + "입니다.");
console.log("A".charCodeAt([0]));
console.log(String.fromCharCode("A".charCodeAt([0]) + 32));

function pickFruit() {
    const result = document.getElementById("result");
    //result.innerText = fruits[Math.floor(Math.random() * fruits.length)];


    /***** 
                          TIP

        큰따운표나 작은 따움표로 문자열과 변수명을 구분짓지 않고 한번에 작성하는 방법
        역따움표는 문자열과 변수명을 모두 한 번에 작성하는 방법
        변수명에는 ${}으로 표기하면 변한다.
        *****/
    result.innerText = `랜덤으로 뽑힌 과일 : ${fruits[Math.floor(Math.random() * fruits.length)]}`;
}
