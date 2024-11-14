function submitForm() {
    const serviceChecked = document.getElementById("service").checked;
    const privacyChecked = document.getElementById("privacy").checked;


    if (!serviceChecked || !privacyChecked) {
        alert("모든 필수 약관에 동의해주세요.");
    }

    const hchecked = document.querySelectorAll(".hobby");
    let hobbies = "";
    let count = 0;
    for (let i = 0; i < hchecked.length; i++) {
        if (hchecked[i].checked) {
            hobbies += hchecked[i].value + " ";
            count++;
        }
    }

    const result = document.getElementById("result");
    if (count > 0) {
        result.innerText = `선택된 취미 : ${hobbies} \n선택된 취미 개수 : ${count}`;
        return;
    }

    result.innerText = "선택된 취미가 없습니다";
}