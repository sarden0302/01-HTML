function 동의버튼() {
    const a1 = document.getElementById("동의1").checked;
    const a2 = document.getElementById("동의2").checked;
    const a3 = document.getElementById("동의3").checked;

    const ABC = a1 && a2 && a3;//a1~a3 모두 true일 때만 true;

    document.getElementById("signBtn").disabled = !ABC;
}