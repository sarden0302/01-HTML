/* toLowerCase() && toUpperCase() */

function handleKeyDown(event) {
    const keys = document.querySelectorAll(".key");
    let result = event.key.toLowerCase();


    idx = 0;
    switch(result) {
        case "a":
            idx = 0;
            break;
        case "b":
            idx = 1;
            break;
        case "c":
            idx = 2;
            break;
        case "d":
            idx = 3;
            break;
        case "e":
            idx = 4;
            break;
        default :
            return;
    }

    keys[idx].style.backgroundColor = "#2a9d8f";
    keys[idx].style.color = "white";
    
}

function handleKeyUp(event) {
    const keys = document.querySelectorAll(".key");

    switch (event.key.toLowerCase()) {
        case "a":
            idx = 0;
            break;
        case "b":
            idx = 1;
            break;
        case "c":
            idx = 2;
            break;
        case "d":
            idx = 3;
            break;
        case "e":
            idx = 4;
            break;
        default :
            return;
    }

    setTimeout(() => {
        keys[idx].style.backgroundColor = "white";
    keys[idx].style.color = "#333";
    }, 3000);
}