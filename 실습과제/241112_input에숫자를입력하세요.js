const fruits = ["사과", "오렌지", "바나나", "체리", "망고"];
const result = document.getElementById("result"); 

function selectFruit() {
    const fruitNumber = document.getElementById("fruitNumber").value;
    if (fruitNumber > fruits.length || fruitNumber < 1) {
        result.innerText = "숫자를 입력하세요!";
        return;
    }

    switch(fruitNumber) { 
        case "1" :
            result.innerText = `선택한 과일:${fruits[fruitNumber - 1]}`;
            break;
        case "2" :
            result.innerText = `선택한 과일:${fruits[fruitNumber - 1]}`;
            break;
        case "3" :
            result.innerText = `선택한 과일:${fruits[fruitNumber - 1]}`;
            break;
        case "4" :
            result.innerText = `선택한 과일:${fruits[fruitNumber - 1]}`;
            break;
        case "5" :
            result.innerText = `선택한 과일:${fruits[fruitNumber - 1]}`;
            break;
    }
}