function checking() {
    const consentForm = document.getElementsByName("consent-form");
    const habbyContainer = document.querySelectorAll(".hobby-container");
    console.log(habbyContainer.length);
    if (!consentForm[0].checked || !consentForm[1].checked) {
        alert("모든 필수 약관에 동의해주세요.");
        habbyContainer[0].style.display = "none";
        const result = document.getElementById("result");
        result.innerText = "";
        return;
    }
    
    habbyContainer[0].style.display = "block";

    const hobbies = document.getElementsByName("hobby");
    let str = ""
    let count = 0;
    const result = document.getElementById("result");

    for (let i = 0; i < hobbies.length; i++) {
        if (hobbies[i].checked) {
            str += hobbies[i].value + " ";
            count++;
        }
    }
    str += `<br>선택한 취미 개수 :  ${count}`;

    result.innerHTML = str;

}