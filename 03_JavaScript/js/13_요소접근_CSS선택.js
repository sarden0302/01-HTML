function checkColor() {
    const selectColor = document.querySelector('input[name="색상"]:checked');

    if (selectColor) {
        document.getElementById("result").innerText = selectColor.value;
    }
}
