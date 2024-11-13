/* 클래스 접근 테스트 */
function clsTest() {
    /* NodeList
        - index, length 
    */
    const divs = document.getElementsByClassName("cls");
    //HTML collection
    alert(divs);

    // divs = cls 중에서 0번째로 작성된 div 요소 배경색 변경
    divs[0].style.backgroundColor = "yellowgreen";
    divs[1].style.backgroundColor = "yellow";
    divs[2].style.backgroundColor = "lightblue";

    /* for문으로 각 div 안에 innerText로 ``사용해서 ~번째 div입니다 */
    for (let i = 0; i < divs.length; i++) {
        divs[i].innerText = `${i + 1}번째 div입니다.`;
    }   
}

function clsSpn() {
    // 각 스판 요소에 순차적으로 0번부터 접근해서 
    const spn = document.getElementsByClassName("spn");
    spn[0].style.backgroundColor = "red";
    spn[1].style.backgroundColor = "orange";
    spn[2].style.backgroundColor = "yellow";
    spn[3].style.backgroundColor = "green";
    spn[4].style.backgroundColor = "blue";

    spn.foreach(myFunction);

    
}