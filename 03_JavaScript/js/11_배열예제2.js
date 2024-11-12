function selectMenu() {
    const menuResult = document.getElementById("menuResult");

    const 메뉴들 = ["돈까스", "깐풍기", "햄버거", "멸치국수", "마파두부", "샌드위치", "볶음밥", "순대국밥"];

    // 랜덤으로 점심메뉴를 뽑기 위해서 메뉴들 배열 index 범위 내에서 랜덤의 수를 생성
    // 난수

    /*
        Math.floor()    : 숫자 내림
        Math.ceil()     : 숫자 올림
        Math.round()    : 숫자 반올림
        Math.random()   : 랜덤 숫자 
    */

    const 랜덤숫자 = parseInt(Math.random() * 메뉴들.length);
    console.log("메뉴들[" + 랜덤숫자 + "] = " + 메뉴들[랜덤숫자]);
    menuResult.innerText = 메뉴들[랜덤숫자];
}