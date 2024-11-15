const item1 = ["hat", "pink", "blue", "yellow"];
const item2 = ["hat2", "pink2", "blue2", "yellow2"];
const item3 = ["hat3", "pink2", "blue3", "yellow3"];

const itemClass = {
    "hat" : item1[0], item2[0], item3[0];
    "pink" : item1[1], item2[1], item3[1];
    "blue" : item1[2], item2[2], item3[2];
    "yellow" : item1[3], item2[3], item3[3];
}

function forTest() {
    console.log("for in");
    for (let i of item1) {
        console.log(i); //value
    }
    console.log("for of");
    for (let i in item2) {
        console.log(i); //index number
    }
}