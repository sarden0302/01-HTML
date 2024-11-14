function checkColor() {
    const colors = document.getElementsByName("색상");
    //input radio는 for문 필요 없이 check값을 찾을 수 있다.

    document.getElementById("result").innerText = colors.value;

}
