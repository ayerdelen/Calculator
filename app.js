const numberBtns = document.querySelectorAll("button")
const resultScreen = document.querySelector(".result")
const operator = document.querySelectorAll(".operator")
const equal = document.querySelector(".esittir")
const clearBtn = document.querySelector(".clear")
equal.addEventListener("click",hesap)


function hesap() {
    resultScreen.value = eval(resultScreen.value)
}

numberBtns.forEach((btns) => {
    btns.addEventListener("click", (e) => {
        let numbersValue = e.target.textContent
        if(numbersValue ==="=") {
            return hesap()
        }
        resultScreen.value += numbersValue
    })
})

clearBtn.addEventListener("click", () => {
    resultScreen.value = ""
})
