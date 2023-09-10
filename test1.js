function Add(number1, number2){
    console.log(number1 + number2)
}

function AddNoParam(){
    console.log(number1 + number2)
}

function Sub(number1, number2){
    console.log(number1 - number2)
}

function Increment(number1) {
    number1 = number1 + 1
}

module.exports = {
    method1: Add,
    method2: Sub,
}

// const number1 = 10
// const number2 = 11

// console.log(`Adunarea dintre ${number1} si ${number2} este`)
// AddNoParam()