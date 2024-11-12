function 빵구매(abc) {
    const price = 빵가격(abc);
    const result = document.getElementById("result");
    if (price > 0) {
        document.getElementById("result").innerText = abc + " 구매완료 되었습니다.\n가격은 " + price + "원 입니다.";
        return;
    }
    result.innerText = "가격을 알 수 없는 빵입니다.\n아직 판매 예정입니다."


}

function 빵가격(abc) {
    if (abc === '크루아상') {
        return 3000;
    }

    if (abc === '식빵') {
        return 2000;
    }

    if (abc === '베이글') {
        return 2500;
    }

    if (abc === '소금빵') {
        return 1500;
    }

    return 0;
}