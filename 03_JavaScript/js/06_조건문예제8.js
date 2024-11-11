function gender() {
    let gdr = prompt("성별을 입력해주세요.(남성 / 여성만 입력 가능)");

    switch(gdr) {
        case "남성": case "남자": case "남":
            alert("남성을 입력했네요!");
            break;
        case "여성": case "여자": case "여":
            alert("여성을 입력했네요!");
            break;
        default:
            alert("올바른 성별을 입력해주세요. 남성 / 여성");
            break;
    }
}

function genderIf() {
    let gdr = prompt("성별을 입력해주세요.(남성 / 여성만 입력 가능)");
    const menArray = ['남성', '남자', '남'];
    const womenArray = ['여성', '여자', '여'];

    if (menArray.includes(gdr)) {
        alert("남성을 입력했네요!");
        return;
    }

    if (womenArray.includes(gdr)) {
        alert("여성을 입력했네요!");
        return;
    }

    alert("올바른 성별을 입력해주세요. 남성 / 여성");
}

/* \n enter 처럼 줄바꿈 표기 */ 
function order() {
    let menu;
    while(menu !== "종료") {
        menu = prompt("메뉴를 선택해주세요. \n삼겹살, 부대찌개, 김치찌개 \n만 입력 가능 \n종료 작성시 메뉴선택 종료됩니다.");
        switch(menu) {
            case "삼겹살":
                alert("삼겹살을 선택하셨습니다. \n가격은 12,000원 입니다.");
                break; 
            case "부대찌개":
                alert("부대찌개를 선택하셨습니다. \n가격은 10,000원 입니다.");
                break;
            case "김치찌개":
                alert("김치찌개를 선택하셨습니다. \n가격은 9,000원 입니다.");
                break;
            case "종료":
                alert("주문이 종료되었습니다.");
                return; 
            default:
                alert("잘못입력하셨습니다. \n올바른 메뉴를 선택하세요.");
                break;
        }
    }

}