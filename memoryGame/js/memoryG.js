const grid = document.getElementById("grid")
const player = document.querySelector("#player")


const timer = document.querySelector("#timer")


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


const createElement = (tag,className)=>{
    const element = document.createElement(tag)
    element.className = className
    return element

}



let pontos = 0

let firstCard = ""
let secondCard = ""


const checkEndgame = ()=>{
    
    const desabilit = [...document.querySelectorAll(".disabledCard")]
    if(desabilit.length == 20){
        alert(`Parabens ${player.innerHTML} você ganhhou com o tempo de ${timer.innerHTML} Segundos `)
        clearInterval(this.loop)
    }

}

const checkCards = () =>{
    setTimeout(()=>{
        if(firstCard.dataset.caracter == secondCard.dataset.caracter){
            pontos++
            
            firstCard.firstChild.classList.add("disabledCard")
            secondCard.firstChild.classList.add("disabledCard")

            
            firstCard = ""
            secondCard = ""


            checkEndgame()
            
        }else{
            firstCard.classList.remove("reviwCard")
            secondCard.classList.remove("reviwCard")
            firstCard = ""
            secondCard = ""
        }
    },1000)
}

const revealCard = ({target})=>{
    if(target.parentNode.className.includes("reviwCard")){
        return
    }

    if(firstCard == ""){
        target.parentNode.classList.add("reviwCard")
        firstCard = target.parentNode
    }else if(secondCard == ""){
        target.parentNode.classList.add("reviwCard")
        secondCard = target.parentNode

        checkCards()
        
    }
    
}

const createCard = (personagem)=>{
    const card = createElement("div","card")
    const front = createElement("div","face front")
    const back  = createElement("div","face back")


    front.style.backgroundImage = `url("../images/${personagem}.png")`

    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener("click",revealCard)
    card.setAttribute("data-caracter",personagem)

   return card
}








const loadGame = ()=>{
    const duplicateArrey = [...personagens,...personagens]

    const embaralharArrey = duplicateArrey.sort(()=>
        Math.random() -0.5
    )


    

    embaralharArrey.map((el)=>{
        const card = createCard(el)
        grid.appendChild(card)
    })
}

const startTimer = ()=>{
    this.loop = setInterval(()=>{
       const currentTimer = Number(timer.innerHTML)
       timer.innerHTML = currentTimer + 1
    },1000)
}


window.onload = ()=>{
    player.innerHTML+=localStorage.getItem("player")
    loadGame()
    startTimer()
}




