function readValue() {
    // 데이터베이스를 통해 일정 데이터 이상 들어갔을 때 데이터를 제한할 수 있다.
    // id를 작성하기 위해서는 #id속성명 작성
    // cus, querySelector는 class속성명을 받아들이기 때문
    const bg = document.querySelector("#chatting-bg"); 

    const inputChat = document.querySelector("#user-input");

    //입력된 값이 없을 경우
    // 1. 진짜 안적었음
    // 2. 공백만 보냄

    /*** 문자열 .trim() : 문자열의 좌우 공백을 제거 */
    if (inputChat.value.trim().length == 0) {
        sleep(2000).then(() => {console.log("time start"); });
        return;
    }

    bg.innerHTML += `<p><span>${inputChat.value}</span></p>`;
    /*
        .scrollTop      : 스크롤 윗부분 위치
        .scrollHeight   : 채팅을 감싸고 있는 div의 전체 높이를 표현
        bg.scrollTop = bg.scrollHeight; -> 스크롤 윗부분을 값 위치로 이동
    */
    bg.scrollTop = bg.scrollHeight;
    inputChat.value = "";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/*
    input 값과 keyboard 연결하는 방법
    keydown이 Enter이면 readValue()함수 불러오기

    keydown     : 키가 눌러졌을 때
    keypress    : 키가 눌러지고 있을 때
    keyup       : 키가 때어졌을 때
*/

function 키누르기(event) {
    if (event.key === "Enter") {
        readValue();
    }
}