function changingColor() {
    document.getElementById("title").style.color = "green"; 
}

function changingText() {
    const result = document.querySelectorAll(".text");

    for (let i = 0; i < result.length; i++) {
        result[i].className = "changing_text";
    }

}

function typingName() {
    const result = document.getElementsByName("username");
    document.getElementById("nameOutput").innerText = result[0].value;
}
