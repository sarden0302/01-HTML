function check() {
    const arr1 = [];
    arr1[0] = "김밥";
    arr1[1] = "떡볶이";
    arr1[2] = "라면";
    arr1[3] = "볶음밥";
    
    document.getElementById("result").innerText = arr1; //arr1의 모든 값이 들어간다다
    for (let i = 0; i < arr1.length; i++) {
        alert(arr1[i]);
    } 
}