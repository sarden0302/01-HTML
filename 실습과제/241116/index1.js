const hobbies = document.getElementsByName("hobbies");
const total = document.getElementById("total");
const index1Result = document.getElementById("index1Result");

total.addEventListener('click', () => {
    if (total.checked) {
        console.log("total.checked inside");
        for (hobby of hobbies) {
            console.log("total.checked inside for");
            hobby.checked = true;
        }
        return;
    }
    for (hobby of hobbies) {
        hobby.checked = false;
    }
    return;
});

function checkingHobby() {
    for (let i = 1; i < hobbies.length; i++) {
        if (!hobbies[i].checked) {
            total.checked = false;
            return;
        }
    }
    total.checked = true;
    console.log("total.checked " + total.checked);
}

function index1Button() {
    if (total.checked) {
        let str = "";
        for (let i = 1; i < hobbies.length; i++) {
            str += hobbies[i].value + " ";
        }
        index1Result.className = "show";
        index1Result.innerText = str;
        return;
    }
    index1Result.className = "hide";
    index1Result.innerText = "";

}