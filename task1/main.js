const bootStrap = document.createElement("link")
bootStrap.href = "https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
bootStrap.rel = "stylesheet"
bootStrap.integrity = "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
bootStrap.crossOrigin = "anonymous";
document.head.append(bootStrap)

const heading=document.createElement("div")
heading.className = "d-flex justify-content-center align-items-center ";
document.body.append(heading)

const image = document.createElement("div")
image.style.width = "960px";
image.style.height = "360px";
image.style.backgroundColor = "#333333";
image.className = "d-flex justify-content-center"
heading.append(image)

const text = document.createElement("p")
text.textContent = "960 x 360px"
text.style.fontFamily = "Impact,Charcoal,sans-serif"
text.style.fontSize = "40px"
text.style.color = "white"
text.className = "text-center d-flex align-items-center"
image.append(text)

const cards_container = document.createElement("div")
cards_container.className = "d-flex justify-content-center align-items-center mt-4"
document.body.append(cards_container)


function createCard() {
const card = document.createElement("div")
card.className = "card mx-2"
card.style.width = "290px"
cards_container.append(card)

const card_image = document.createElement("img")
card_image.className = "card-img-top"
card_image.style.width = "290px"
card_image.style.height = "180px"
card_image.style.backgroundColor = "#333333"
card.append(card_image)

const card_body = document.createElement("div")
card_body.className = "card-body"
card.append(card_body)

const card_title = document.createElement("h3")
card_title.className = "card-title"
card_title.style.fontStyle="italic"
card_title.textContent = "Indonectetus facilis"
card_title.style.color = "gray"
card_title.style.fontSize="20px"
card_body.append(card_title)

const card_text = document.createElement("p")
card_text.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sunt corrupti unde harum iste earum, id deleniti similique magnam consectetur."
card_text.className = "card-text"
card_body.append(card_text)

const card_ending=document.createElement("p")
card_ending.textContent="Read More"
card_ending.style.color="orange"
card_ending.className="d-flex justify-content-end"
card_body.append(card_ending)

return card
}

for (let i = 0; i < 3; i++) {
const card=createCard()
cards_container.append(card)    
}
