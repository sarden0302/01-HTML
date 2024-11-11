/* break 확인 */
function check1() {
    // 1부터 10까지 1씩 증가하다가
    // 5가 되면 멈춤
    
    // 1. for문 이용해서 1부터 5까지의 합
    let addingToFive = 1;
    for (let i = 2; i <= 10; i++)  {
        addingToFive += i;
        if (i == 5) break;

    }
    alert (addingToFive);
}

function check2() {
    /*
        1부터 20까지 모더 더하는 for문 15에 멈춤
    */ 
   let addingToFifteen = 1;
   for (let i = 2; i <= 20; i++) {
        addingToFifteen += i;
        console.log(i);
        if (i == 15) break;
    }
    alert(addingToFifteen);
}

function check3() {
    let result = 0;
    for (let i = 1; i <= 20; i++) {
        if (i % 3 == 0) continue;
        console.log(i);
        result += i;
    }
    alert(result);

}
