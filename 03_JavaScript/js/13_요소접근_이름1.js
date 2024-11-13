/* name으로 요소 접근하기 */
function checkbox로valueChecked속성확인() {
    /* 보통 checkbox나 radio 두 가지 이상의 input을 작성하고 
        각 input을 묶어주는 역할을 하는 것이 name
        name 최소 2가지 이상을 가져와서 사용
    */

    const hobbies = document.getElementsByName("취미");
    alert(hobbies);         // object NodeList
    alert(hobbies[0]);      // object HTMLInputElement
    alert(hobbies[0].value);// 게임 (value값 출력)
    // 취미라는 것을 모두 가져와서 확인할 수 있음.
    for (let i = 0; i < hobbies.length; i++) {
        console.log(hobbies[i].value);
    }

    // 선택한 모든 취미를 확인하는 작업
    const result = document.getElementById("result");

    /* checkbox, radio 전용 속성(.checked) 
        true || false;
    */ 
    console.log("************ input 게임 요소 checked 확인 **************");
    for (let i = 0; i < hobbies.length; i++) {
        if (hobbies[i].checked) {
            console.log(hobbies[i].value);
        } else {
            console.log(hobbies[i].checked);
        }   
    }



    

}

// checked를 이용해서 취미 몇개 선택했는지 확인
function nameBtn() {
    const hobbyList = document.getElementsByName("취미");
    let str = "";
    let count = 0;

    for (let i = 0; i < hobbyList.length; i++) {
        str += hobbyList[i].value + " ";
        if (hobbyList[i].checked) {
            count++;
        }
    }

    // innerText = 태그나 html에서 작성하는 코딩이 작동을 하지 않음
    // innerHTML = 태그 및 html에서 작성하는 코딩이 작동됌
    document.getElementById("result").innerText = `${str} \n선택된 취미 개수 : ${count}`;
    document.getElementById("result").innerHTML = `${str} <br>선택된 취미 개수 : ${count}`;
}
