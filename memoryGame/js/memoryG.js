const grid = document.getElementById("grid")

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


const createCard = (personagem)=>{
    const card = createElement("div","card")
    const front = createElement("div","face front")
    const back  = createElement("div","face back")


    front.style.backgroundImage = `url("../images/${personagem}.png")`

    card.appendChild(front)
    card.appendChild(back)

   return card
}

const loadGame = ()=>{
    const duplicateArrey = [...personagens,...personagens]

    const embaralharArrey = duplicateArrey.sort(()=>
        Math.random() - 0.5
    )


    

    embaralharArrey.map((el)=>{
        const card = createCard(el)
        grid.appendChild(card)
    })
}

loadGame()
