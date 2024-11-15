function checking() {
    const agreement = document.getElementsByName("agreement");

    for (let i = 0; i < agreement.length; i++) {
        if (!agreement[i].checked) {
            console.log(agreement[i].checked+ " " + i); 
            return;
        }
    }

    document.getElementById("button").disabled = false;
}

const btn = document.getElementById("btn");
const inputTest = document.getElementById("inputTest");
btn.addEventListener("click", () => {
    const vle = inputTest.value;

    if (!vle) {
        alert("입력란을 작성해주세요.");
        return;
    }
});