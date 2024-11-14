function handleKeyDown(event) {
    console.log("Key Down 확인 창");
}

function handleKeyUp(event) {
    console.log("Key Up 확인 창");
    //만약 키보드에서 Enter라고 적힌 키 작성을 하고 뗐을 때
    if (event.key === "Enter") {
        document.getElementById("msg").innerHTML += `안녕하세요.<br>`;
    }
}