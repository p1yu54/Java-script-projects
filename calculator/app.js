/*
    creating all the necessary variables
*/
const input = document.querySelector("#input");
const num9 = document.querySelector("#num9");
const num8 = document.querySelector("#num8");
const num7 = document.querySelector("#num7");
const num6 = document.querySelector("#num6");
const num5 = document.querySelector("#num5");
const num4 = document.querySelector("#num4");
const num3 = document.querySelector("#num3");
const num2 = document.querySelector("#num2");
const num1 = document.querySelector("#num1");
const num0 = document.querySelector("#num0");
const num00 = document.querySelector("#num00");
const addBTn = document.querySelector("#addBtn");
const subBTn = document.querySelector("#subBtn");
const multiBTn = document.querySelector("#multiBtn");
const divideBTn = document.querySelector("#divideBtn");
const equalBtn = document.querySelector("#equalBtn");
const clearBtn = document.querySelector("#clearBtn");
const dotBtn = document.querySelector("#dotBtn");
const delBtn = document.querySelector("#delBtn");
let eval = 0 ; 



/*
    Here on click event the value of input or the show will change as per the button
    is clicked by the user.`
*/
num9.addEventListener("click" , () => {
    input.value = input.value + "9";
    console.log();

})
num8.addEventListener("click" , () => {
    input.value = input.value + "8"
    console.log(input.value);
})
num7.addEventListener("click" , () => {
    input.value = input.value + "7"
    console.log(input.value);
})
num6.addEventListener("click" , () => {
    input.value = input.value + "6"
    console.log(input.value);
})
num5.addEventListener("click" , () => {
    input.value = input.value + "5"
    console.log(input.value);
})
num4.addEventListener("click" , () => {
    input.value = input.value + "4"
    console.log(input.value);
})
num3.addEventListener("click" , () => {
    input.value = input.value + "3"
    console.log(input.value);
})
num2.addEventListener("click" , () => {
    input.value = input.value + "2"
    console.log(input.value);
})
num1.addEventListener("click" , () => {
    input.value = input.value + "1"
    console.log(input.value);
})
num0.addEventListener("click" , () => {
    input.value = input.value + "0"
    console.log(input.value);
})
dotBtn.addEventListener("click" , () => {
    input.value = input.value + "."
    console.log(input.value);
})


addBTn.addEventListener("click", () => {
    input.value = input.value + "+";
    console.log(input.value)
})
subBTn.addEventListener("click", () => {
    input.value = input.value + "-";
    console.log(input.value)
})
multiBTn.addEventListener("click", () => {
    input.value = input.value + "*";
    console.log(input.value)
})
divideBTn.addEventListener("click", () => {
    input.value = input.value + "/";
    console.log(input.value)
})
//this button will calculate the totol taken form the input box given by the user
equalBtn.addEventListener("click" , () => {
    console.log(parseInt(input.value));
    eval = math.evaluate(input.value)
    console.log(parseInt(eval));
    input.value = eval;
})

//This button will clear the value in the input box
clearBtn.addEventListener("click", () => {
    input.value = "";
})
