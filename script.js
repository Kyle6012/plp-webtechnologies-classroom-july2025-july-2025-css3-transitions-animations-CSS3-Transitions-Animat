// function with params + return
function calcRectangleArea(l, w) {
  let area = l * w // local var
  return area
}

let globalMsg = "global scope msg"

function showCalculation() {
  let result = calcRectangleArea(10, 5)
  document.getElementById("calc-result").textContent =
    `${globalMsg} area = ${result}`
}

// toggle class for animation
let box = document.getElementById("magicBox")
let btn = document.getElementById("triggerBox")

function toggleBox() {
  box.classList.toggle("animate")
}

btn.addEventListener("click", toggleBox)
