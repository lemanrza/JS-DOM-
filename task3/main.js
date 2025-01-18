let countValue = 0
let count = document.querySelector(".count");

function showValue() {
    count.textContent = countValue
}

const increaser = document.querySelector(".box1")
increaser.addEventListener("click", (e) => {
    countValue++;
    showValue()
})

const decreaser = document.querySelector(".box3")
decreaser.addEventListener("click", (e) => {
    if (countValue < 1) {
        countValue = 0
    }
    else {
        countValue--;
    }
    showValue()
})

const resetBtn = document.querySelector(".box2")
resetBtn.addEventListener("click", (e) => {
    countValue = 0;
    showValue()
})
