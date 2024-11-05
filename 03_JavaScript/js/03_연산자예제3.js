function 정보확인하기() {
    const name = document.getElementById("user-name").value;
    const email = document.getElementById("user-email").value;
    const number = document.getElementById("user-number").value

    //입력된 정보 밑에 작성한 글자 표기하기
    document.getElementById("info-name").innerText =  document.getElementById("user-name").value;
    document.getElementById("info-email").innerText =  document.getElementById("user-email").value;
    document.getElementById("info-number").innerText =  document.getElementById("user-number").value;

    alert("입력된 정보는 " + ((name == "")? "" : name) + ", " + ((email == "")?"000-000-0000" : email) + ", " + ((number == 0)? "" : number)+ " 입니다." )
}