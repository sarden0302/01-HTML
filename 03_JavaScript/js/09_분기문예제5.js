let totalPrice = 0;

function choice(drinks) {
    switch(drinks) {
        case "coke" :
            totalPrice += 500;
            break;
        case "fanta" :
            totalPrice += 600;
            break;
        case "soda" :
            totalPrice += 700;
            break;
    }
}