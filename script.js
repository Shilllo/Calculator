function add(a, b) {
    return Number(a) + Number(b)
}

function subtract(a, b) {
    return Number(a) - Number(b)
}

function multiply(a, b) {
    return Number(a) * Number(b)
}

function divide(a, b) {
    if (b != "0") {
        return Number(a) / Number(b)
    }
}

let number1 = ""
let number2 = ""
let operator = ""

function operate([number1, operator, number2]) {
    if (operator === "+") {
        return add(number1, number2)
    } else if (operator === "-") {
        return subtract(number1, number2)
    } else if (operator === "*") {
        return Math.round(multiply(number1, number2) * 100) / 100 
    } else if (operator === "/") {
        if (number2 != 0) {
            return Math.round(divide(number1, number2) * 100) / 100 
        } else {
            return "ERROR: ZeroDivision"
        }
    } 
}

let currentNumber = ""
let secondNumber = ""

let numbers = document.querySelectorAll(".number")


let display = document.querySelector(".result")
display.textContent = "0"

let clear = document.querySelector(".clear")

let equal = document.querySelector(".equal")

let deletee = document.querySelector(".delete")

deletee.addEventListener("click", function() {
    display.textContent = display.textContent.slice(0, -1)
    if (display.textContent == "") {
        display.textContent = "0"
    }
})
equal.addEventListener("click", function() {
    if (display.textContent.split(" ").length === 3) {
        display.textContent = operate(display.textContent.split(" "))
    }
}) 
clear.addEventListener('click', function() {
    display.textContent = "0"
})

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function() {
        display.textContent += numbers[i].textContent
        if (display.textContent[0] == 0 && !display.textContent.includes(".")) {
            display.textContent = display.textContent.replace("0", "")
        }
    })
}

let operations = document.querySelectorAll(".operation")
for (let i = 0; i < 4; i++) {
    operations[i].addEventListener("click", function() {
        if (!display.textContent.includes("+") && 
        !display.textContent.includes("-") && 
        !display.textContent.includes("*") && 
        !display.textContent.includes("/") &&
        display.textContent.split(" ").length < 3) {
            display.textContent += " " + operations[i].textContent + " "
        } else if (display.textContent.split(" ").length === 3) {
            display.textContent = operate(display.textContent.split(" "))
            display.textContent += " " + operations[i].textContent + " "
        }
    })
}

let point = document.querySelector(".point")
point.addEventListener("click", function() {
    if (display.textContent.split(" ").length === 1 && 
    !display.textContent.includes(".") ||
    display.textContent.split(" ").length === 3) {
        display.textContent += "."
    }
})

