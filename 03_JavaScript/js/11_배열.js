// 배열 선언 및 기초 사용법
function check1() {
    const arr1 = new Array(); //배열 생성
    const arr2 = [];
    /* 
        arr1 과 arr2 모두 빈 배열 생성
        자바 스크립트에서는 [] 사용하는 방식을 선호
        -> 코드가 직관적이고 더 간단하게 일기 쉽기 때문
    */
    const arr3 = new Array(3);
    //arr3 =  배열 선언 & 변수 초기화 x;
    const arr4 = ["홍길동", "박철수", "강영식"];

    alert(arr4.length + "입니다.");

    /*
        const 변수명 = 배열 값 세팅할 때 
                        [] 대괄호를 작성하면 왼쪽에 new 붙이지 않음!
    */ 
   
   // 배열의 index(색인, 번호)
   /* 
   - 배열의 각 칸을 구분하는 번호
   - 0부터 시작
   - 중간에 번호를 건너뛰거나 중간 번호를 생략할 수 없다. (항상 연속적)
   - 마지막 index == 배열길이 - 1
   */
    // index      0    1    2    3    4
   const arr5 = ["A", "B", "C", "D", "E"];
   console.log("arr5의 0번째 값은 : " + arr5[0]);
   console.log("arr5의 1번째 값은 : " + arr5[1]);
   console.log("arr5의 2번째 값은 : " + arr5[2]);
   console.log("arr5의 3번째 값은 : " + arr5[3]);
   console.log("arr5의 4번째 값은 : " + arr5[4]);
   console.log("arr5의 4번째 값은 : " + arr5[5]);

   const arr6 = [];
   arr6[0] = 100;
   arr6[1] = "낙엽이 떨어진다.";
   arr6[2] = true;
   //JS 배열의 특징: 인덱스별로 자료형을 다르게 넣을 수 있다.
   console.log(arr6[4]); // 초기화해주지 않을 시 undefined 
   
}