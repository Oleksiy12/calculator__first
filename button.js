
const resultNumber = document.getElementById("resultNumber");
const buttonValue = document.getElementsByClassName("button");

let resultDisplay = "";
let buttonHandler = function(){
    let value = this.getAttribute("data-value");
    if(value === "AC"){
        resultDisplay = "";
        resultNumber.textContent = resultDisplay;
    } else if (value === "="){
        if (resultDisplay.includes("+") || resultDisplay.includes("-") || resultDisplay.includes("*") || resultDisplay.includes("/")) {
            let result = eval(resultDisplay); 
            resultNumber.textContent = result;
        } 
    } else {
        if(resultDisplay.length < 10){
            resultDisplay+=value;
            resultNumber.textContent = resultDisplay;
    }
    }
} 
    for (let i = 0; i < buttonValue.length; i+=1){
    buttonValue[i].addEventListener("click", buttonHandler);
}