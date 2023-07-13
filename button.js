const resultNumber = document.getElementById("resultNumber");
const buttonValue = document.getElementsByClassName("button");


let resultDisplay = "";
let buttonHandler = function(){
    let value = this.getAttribute("data-value");
    if(value === "AC"){
        resultDisplay = "";
        resultNumber.textContent = resultDisplay;

    } else if (value === "="){
        const result = eval(resultDisplay);
        resultNumber.textContent = result;

    } else {
        if(resultDisplay.length < 10){
            let lastChar = resultDisplay.slice(-1);
            if((value === "+" || value === "-" || value === "*" || value ==="/") &&
            (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/")){
                return;
            }
                resultDisplay+=value;
                resultNumber.textContent = resultDisplay; 
    } 
    }    
} 
    for (let i = 0; i < buttonValue.length; i+=1){
    buttonValue[i].addEventListener("click", buttonHandler);
}

