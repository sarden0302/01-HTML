function selectSeason() {
    const body = document.getElementById("seasonBody");
    let result;
    const spring = document.getElementById("springLi");
    const summer = document.getElementById("summerLi");
    const fall = document.getElementById("fallLi");
    const winter = document.getElementById("winterLi");
    
    while (result !== "종료") {
        result = prompt("1 ~ 12까지 숫자 중 하나를 선택해주세요.");
        switch(result) {           
            case "3": case "4": case "5":   
                alert("봄을 선택하셨습니다.");
                spring.style.backgroundColor = "lightpink";
                summer.style.backgroundColor = "#f5f5f5";
                fall.style.backgroundColor = "#f5f5f5";
                winter.style.backgroundColor = "#f5f5f5";
                body.style.backgroundColor = "lightpink";
                break;
            case "6": case "7": case "8":
                alert("여름을 선택하셨습니다.");
                spring.style.backgroundColor = "#f5f5f5";
                summer.style.backgroundColor = "lightyellow";
                fall.style.backgroundColor = "#f5f5f5";
                winter.style.backgroundColor = "#f5f5f5";
                body.style.backgroundColor = "lightyellow";
                break;
            case "9": case "10": case "11":          
                alert("가을을 선택하셨습니다.");
                spring.style.backgroundColor = "#f5f5f5";
                summer.style.backgroundColor = "#f5f5f5";
                fall.style.backgroundColor = "sandybrown";
                winter.style.backgroundColor = "#f5f5f5";
                body.style.backgroundColor = "sandybrown";
                break;
            case "12": case "1": case "2":              
                alert("겨울을 선택하셨습니다.");
                spring.style.backgroundColor = "#f5f5f5";
                summer.style.backgroundColor = "#f5f5f5";
                fall.style.backgroundColor = "#f5f5f5";
                winter.style.backgroundColor = "lightblue";
                body.style.backgroundColor = "lightblue";
                break;
            case "종료" :
                alert("종료되었습니다.");
                spring.style.backgroundColor = "#f5f5f5";
                summer.style.backgroundColor = "#f5f5f5";
                fall.style.backgroundColor = "#f5f5f5";
                winter.style.backgroundColor = "#f5f5f5";
                body.style.backgroundColor = "#f5f5f5";
                return;
            default :
                alert("잘못된 선택입니다.");
                spring.style.backgroundColor = "#f5f5f5";
                summer.style.backgroundColor = "#f5f5f5";
                fall.style.backgroundColor = "#f5f5f5";
                winter.style.backgroundColor = "#f5f5f5";
                body.style.backgroundColor = "#f5f5f5";
                break;
        }
    }
}