const calculatorResult = document.querySelector(".calculator_result");
const clear = document.getElementById("clear");
const operators = document.getElementsByName("operator");
const number = document.getElementsByName("number");
const dot = document.getElementById("dot");
let finalNumber = "";
let equalAdded = false;
const operatorChecking = ['+', '-', '*', '%', '/'];
let parentheses = false;

clear.addEventListener('click', () => {
    calculatorResult.innerText = "";
});

function bs() {
    if (calculatorResult.innerText.trim().length == 0) {
        return;
    }
    calculatorResult.innerText = calculatorResult.innerText.substring(0, calculatorResult.innerText.length - 1)
}

function operating(value) {
    parentheses = false;
    if (equalAdded) {
        calculatorResult.innerText = "";
        equalAdded = false;
    }

    //finalNumber 더하기 & 초기화
    if (!isNum(finalNumber) && calculatorResult.innerText.trim().length == 0 && (value != '-')) {
        calculatorResult.innerText = calculatorResult.innerText.substring(0, calculatorResult.innerText.length - finalNumber.length);
        finalNumber = "";
        return;
    }
    finalNumber = "";

    if (!isNum(finalNumber) && calculatorResult.innerText.trim().length == 1) {
        if (calculatorResult.innerText == "-") {
            alert("한 번에 연산자가 두 개 붙을 수 없습니다.");
            return;
        }
    }

    if (calculatorResult.innerText.trim().length == 0) {
        if (value != "-") {
            return;
        }  
    }
    
    //연산기호 2번 적었는지 확인
    const lastChar = calculatorResult.innerText.charAt(calculatorResult.innerText.length - 1);
    console.log("if문 전 " + lastChar);
    if (lastChar == "+" || lastChar == "-" || lastChar == "*" || lastChar == "/" || lastChar=="%") {
        console.log("first if");
        const beforeLastChar = calculatorResult.innerText.charAt(calculatorResult.innerText.length - 2);
        if (beforeLastChar != "+" && beforeLastChar != "*" && beforeLastChar != "-" && beforeLastChar != "%" && beforeLastChar != "/" && value =="-") {
            console.log("second if");
            calculatorResult.innerText += value;
            return;
        }
        console.log("연산자 두번");
        alert("한 번에 연산자가 두 개 붙을 수 없습니다.");
        return;
    }
    calculatorResult.innerText += value;
}

function numberAdding(value) {
    if (equalAdded) {
        calculatorResult.innerText = "";
        equalAdded = false;
    }

    if (calculatorResult.innerText.trim().length == 0) {
        finalNumber += value;
        calculatorResult.innerText += value;
        return;
    }


    console.log(calculatorResult.innerText);
    console.log(calculatorResult.innerText.length - 1);
    console.log(Number(calculatorResult.innerText.length) - 1);
    console.log(calculatorResult.innerText.charAt((calculatorResult.innerText.length - 1)));
    console.log(calculatorResult.innerText.charAt(1));
    console.log("1" + (calculatorResult.innerText.charAt((calculatorResult.innerText.length - 1)) == '-') + calculatorResult.innerText.charAt(Number(calculatorResult.length) - 1));
    console.log("2" + (calculatorResult.innerText.charAt((Number(calculatorResult.length) - 2)) == '-'));
    console.log(calculatorResult.innerText);
    if (calculatorResult.innerText.charAt(calculatorResult.innerText.length - 1) == '-' && calculatorResult.innerText.charAt(calculatorResult.innerText.length - 2)== '-') {
        console.log(calculatorResult.innerText);
        parentheses = true;
        finalNumber += value;
        calculatorResult.innerText = calculatorResult.innerText.substring(0, calculatorResult.innerText.length - 2) + "-(-" + value + ")";
        return;
    }

    if (parentheses) {
        calculatorResult.innerText = calculatorResult.innerText.substring(0, calculatorResult.innerText.length - 1) + value + ")";
        return;
    }
    finalNumber += value;
    calculatorResult.innerText += value;

}

function isNum(val) {
    return !!Number(val);
}

function finalResult() {
    if (operatorChecking.includes(calculatorResult.innerText.slice(-1))) {
        alert("계산할 수 없습니다. 식을 완성시켜 주세요.");
        return;
    }
    /*
    if (calculatorResult.innerText.includes("--")) {
        let start = 0;
        for (start; start < calculatorResult.innerText.length - 1; start++) {
            console.log("start count : " + start);
            let temp = calculatorResult.innerText;
            if (calculatorResult.innerText.charAt(start + 1) == '-' && calculatorResult.innerText.charAt(start + 2) == '-') {
                for (let i = start + 2; i < calculatorResult.innerText.length; i++) {
                    if (calculatorResult.innerText.charAt(i + 1) == "+" || calculatorResult.innerText.charAt(i + 1) == "-" || calculatorResult.innerText.charAt(i + 1) == '*' || calculatorResult.innerText.charAt(i + 1) == '%' || calculatorResult.innerText.charAt(i + 1) == '/' || i == calculatorResult.innerText.length - 1) {
                        console.log("start : " + start + "\ni : " + i);
                        temp = temp.substring(0, start + 2) + "(" + temp.substring(start + 2, i + 1) + ")";
                        if (i != calculatorResult.innerText.length) {
                            temp = temp + temp.substring(i + 2, temp.length);
                        }
                        calculatorResult.innerText = temp;
                        console.log("start : " + start + ", i : " + i + ", result : " + calculatorResult.innerText);
                        start = i + 2;
                        i += 2;
                    }
                }
            }
        } 
        equalAdded = true;
        return;
    }*/
    equalAdded = true;
    calculatorResult.innerText = eval(calculatorResult.innerText);
}