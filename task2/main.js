const number= document.createElement("span")

// number.textContent=0

const random=document.querySelector("button");
random.addEventListener("click", (e)=>{
    number.textContent=(Math.random()*1000).toFixed(2);
})
document.body.append(number);