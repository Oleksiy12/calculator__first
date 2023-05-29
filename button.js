let resultNumber = document.getElementById("resultNumber");

// dataset всіх чисел

const zeroBtn = document.querySelector(".zero");
const zeroValue = zeroBtn.dataset.zero;
zeroBtn.addEventListener("click", ()=> {
    resultNumber.textContent = zeroValue;
})

const oneBtn = document.querySelector(".one");
oneBtn.addEventListener("click", ()=>{
  const oneValue = oneBtn.dataset.one;
  resultNumber.textContent = oneValue;
})

const twoBtn = document.querySelector(".two");
const twoValue = twoBtn.dataset.two;
twoBtn.addEventListener("click", ()=>{
    resultNumber.textContent = twoValue;
})

const threeBtn = document.querySelector(".three");
const threeValue = threeBtn.dataset.three;
threeBtn.addEventListener("click", ()=>{
    resultNumber.textContent = threeValue;
})

const fourBtn = document.querySelector(".four");
const fourValue = fourBtn.dataset.four;
fourBtn.addEventListener("click", ()=>{
    resultNumber.textContent = fourValue;
})

const fiveBtn = document.querySelector(".five");
const fiveValue = fiveBtn.dataset.five;
fiveBtn.addEventListener("click", ()=>{
    resultNumber.textContent = fiveValue;
})

const sixBtn = document.querySelector(".six");
const sixValue = sixBtn.dataset.six;
sixBtn.addEventListener("click", ()=>{
    resultNumber.textContent = sixValue;
})

const sevenBtn = document.querySelector(".seven");
const sevenValue = sevenBtn.dataset.seven;
sevenBtn.addEventListener("click", ()=>{
    resultNumber.textContent = sevenValue;
})

const eightBtn = document.querySelector(".eight");
const eightValue = eightBtn.dataset.eight;
eightBtn.addEventListener("click", ()=>{
    resultNumber.textContent = eightValue;
})

const nineBtn = document.querySelector(".nine");
const nineValue = nineBtn.dataset.nine;
nineBtn.addEventListener("click", ()=>{
    resultNumber.textContent = nineValue;
})

// dataset всіх знаків

const divideBtn = document.querySelector(".divide");
const divideValue = divideBtn.dataset.divide;

const multiplyBtn = document.querySelector(".multiply");
const multiplyValue = multiplyBtn.dataset.multiply;

const minuseBtn = document.querySelector(".minus");
const minusValue = minuseBtn.dataset.minus;

const plusBtn = document.querySelector(".plus");
const plusValue = plusBtn.dataset.plus;

const commaBtn = document.querySelector(".comma");
const commaValue = commaBtn.dataset.comma;

const resultBtn = document.querySelector(".result");
const resultValue = resultBtn.dataset.result;

// dataset result и т.д.

const percentBtn = document.querySelector(".percent");
const percentValue = percentBtn.dataset.percent;

const cleanBtn = document.querySelector(".clean");
cleanBtn.addEventListener("click", ()=>{
    resultNumber.textContent = 0;
})


