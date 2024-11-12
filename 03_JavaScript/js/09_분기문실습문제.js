let totalCount = 0;

function add(item) {
    let price = 0;
    switch(item) {
        case "1" :
            price = 3000;
            break;
        case "2" :
            price = 5000;
            break;
        case "3" :
            price = 8000;
            break;
    }
    totalCount += price;
    document.getElementById("totalPrice").innerText = `총 금액 ${totalCount}원`


}