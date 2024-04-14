const grid = document.getElementById("grid")
const player = document.querySelector("#player")
const volume = document.querySelector("#volume")
const audio = new Audio("../sound/dbzmusic.mp3")
const timer = document.querySelector("#timer")
const main = document.getElementById("main")
const header = document.getElementById("header")


const personagens = [
    "card-Boo",
    "card-Cell",
    "card-Freeza",
    "card-Gohan",
    "card-Goku",
    "card-Kuririn",
    "card-Piccolo",
    "card-Satan",
    "card-Trunks",
    "card-Vegeta"
]





let audioRepro = "on"








const audioControler = () => {
    if (audioRepro == "on") {
        audio.play()

    } else (
        audio.pause()
    )

}


volume.addEventListener("click", () => {
    if (volume.innerHTML == "volume_Off") {
        volume.innerHTML = "volume_Up"
        audioRepro = "on"
        audioControler()


    } else if (volume.innerHTML == "volume_Up") {
        volume.innerHTML = "volume_Off"
        audioRepro = "of"
        audioControler()
    }
})






const createElement = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className
    return element

}



let firstCard = ""
let secondCard = ""





const checkEndgame = () => {

    const desabilit = [...document.querySelectorAll(".disabledCard")]
    if (desabilit.length == 2) {
        const div = document.createElement("div")
        const buton = document.createElement("button")
        buton.setAttribute("class", "botton_end")
        buton.innerHTML = "Reiniciar"


        buton.addEventListener("click", () => {
            window.location = "../memorygame.html"
        })



        div.setAttribute("class", "divEndgame")
        div.innerHTML = `Parabens ${player.innerHTML} você ganhou com o tempo de ${timer.innerHTML} Segundos `

        grid.style.display = "none"
        header.style.display = "none"

        audioRepro = "of"
        audioControler()


        div.appendChild(buton)
        main.appendChild(div)
        clearInterval(this.loop)

    }

}

const checkCards = () => {
    setTimeout(() => {
        if (firstCard.dataset.caracter == secondCard.dataset.caracter) {


            firstCard.firstChild.classList.add("disabledCard")
            secondCard.firstChild.classList.add("disabledCard")


            firstCard = ""
            secondCard = ""


            checkEndgame()

        } else {
            firstCard.classList.remove("reviwCard")
            secondCard.classList.remove("reviwCard")
            firstCard = ""
            secondCard = ""
        }
    }, 1000)
}

const revealCard = ({ target }) => {
    if (target.parentNode.className.includes("reviwCard")) {
        return
    }

    if (firstCard == "") {
        target.parentNode.classList.add("reviwCard")
        firstCard = target.parentNode
    } else if (secondCard == "") {
        target.parentNode.classList.add("reviwCard")
        secondCard = target.parentNode

        checkCards()

    }

}

const createCard = (personagem) => {
    const card = createElement("div", "card")
    const front = createElement("div", "face front")
    const back = createElement("div", "face back")


    front.style.backgroundImage = `url("../images/${personagem}.png")`

    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener("click", revealCard)
    card.setAttribute("data-caracter", personagem)

    return card
}








const loadGame = () => {
    const duplicateArrey = [...personagens, ...personagens]

    const embaralharArrey = duplicateArrey.sort(() =>
        Math.random() - 0.5
    )




    embaralharArrey.map((el) => {
        const card = createCard(el)
        grid.appendChild(card)
    })
}

const startTimer = () => {
    this.loop = setInterval(() => {
        const currentTimer = Number(timer.innerHTML)
        timer.innerHTML = currentTimer + 1
    }, 1000)
}


window.onload = () => {
    player.innerHTML += localStorage.getItem("player")
    loadGame()
    startTimer()

}




