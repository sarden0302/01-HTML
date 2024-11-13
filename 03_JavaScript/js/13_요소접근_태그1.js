function tagNameTest() {
    /* 태그명으로 요소 접근하기 */
    // HTML 문서(document)에 존재하는 모든 li태그 요소를 얻어와
    // 배열로 묶어서 반환
    
    const tagList = document.getElementsByTagName("li");
    // ul 태그 안에 작성된 li 요소들을 모두 가져온다는 의미
    
    //alert(tagList[0].innerText); 

    tagList[0].style.backgroundColor = tagList[0].innerText;
    tagList[1].style.backgroundColor = tagList[1].innerText;
    tagList[2].style.backgroundColor = tagList[2].innerText;
    tagList[3].style.backgroundColor = tagList[3].innerText;
 
    // <body> 와 같은 기본적인 태그들은 따로 id나 class 작성하지 않아도 접근 가능

    //body 태그는 HTML Collection 형태로 반환되기 때문에 
    
    tagList.foreach(function (item) {
        if (item === "yellow") {
            document.body.style.backgroundColor = "yellowgreen";
        }
    });
}

