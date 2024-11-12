function priceFood(food) {
    console.log("food start");
    if (food === '비빔밥') {
        return 8000;
    }

    if (food === '김치찌개') {
        return 7000;
    }

    if (food === '된장찌개') {
        return 7000;
    }

    return 0;
}

function order(food) {
    console.log("order start");
    const price = priceFood(food);
    if (price == 0) {
        document.getElementById("result").innerText = "재료 소진된 메뉴로 주문이 불가합니다.";
        return;
    }

    document.getElementById("result").innerText = food + " 주문이 완료되었습니다. 가격은 " + price + "원 입니다.";


}