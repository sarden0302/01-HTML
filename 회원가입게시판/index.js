const h = document.getElementById("hint");
function 힌트보기() { //보고자 하는 input 값 속성에 onfocus 작성시 보임
    h.style.display = "block";
}

function 힌트숨기기() { //보지 않을 input 값 속성에 onblur 작성시 안보임
    h.style.display = "none";
}
/*
    onclick : 사용자가 onclick이라는 속성을 지닌 요소를 클릭했을 때 발생
        [용도]
        - 버튼 클릭, 링크 클릭, 이미지 클릭 등 
        <button onclick="함수명()"></button>
        <script>
        function 함수명() {
        }
        </script>
    onfocus : 사용자가 input과 같은 입력 필드를 선택하거나 포커스가 맞춰질 때 발생
        [용도]
        - input, textarea 요소에서 주로 사용
    onblur : 사용자가 선택한 입력 필드를 벗어날 때                      
*/ 
