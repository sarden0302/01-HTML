/*
    만약에 선택한 취미가 1개라도 있으면 선택한 취미명과 몇개 선택 되었는지 출력
*/


function checkHobby() {
    const hobbies = document.getElementsByName("hobby");
    let count = 0;
    let result = "";
    for (let i = 0; i < hobbies.length; i++) {
        if (hobbies[i].checked) {
            count++;
            result += hobbies[i].value + " ";
        }
    }

    const pResult = document.getElementById("result");
    if (count == 0) {
        pResult.innerText = "선택된 취미가 없습니다.";
        return;
    } 
    pResult.innerHTML = `선택한 취미명 : <small>${result}</small> <br>총 갯수 : <strong>${count}</strong>`;
    
}