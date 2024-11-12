function 차가격(model) {
    if (model === '소나타') {
        return 1000;
    } 

    if (model === '아반떼') {
        return 1100;
    }

    if (model === '제네시스') {
        return 1200;
    }

    return 0;
    
}

function 차구매(model) {
    const price = 차가격(model);
    document.getElementById("result").innerText = model + "구매 완료 되었습니다."
    + "\n가격은" + price + "입니다";
}