let total = 0;
const total_price = document.getElementById("total_price");

function 선택(abc) {
    const price = document.getElementById("price");
    let fruitPrice = 0;
    switch(abc) {
        case "apple":
            fruitPrice = 2000;
            break;
        case "grape":
            fruitPrice = 5000;
            break;
        case "kiwi":
            fruitPrice = 3000;
            break;
    }
    price.innerText = fruitPrice;
}

function totalPrice(fruit) {
    switch(fruit) {
        case "apple":
            total += 2000;
            break;
        case "grape" :
            total += 5000;
            break;
        case "kiwi" :
            total += 3000;
            break;
    }
    console.log(total);
    total_price.innerText = total;
}