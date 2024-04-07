const div_mae = document.querySelector("#div_heros")



let cartasArrey = []
let listas = 0

while(listas < 20){
    const li = document.createElement("li")
    li.setAttribute("class","cartaComun cartas")
    div_mae.appendChild(li)
    
    listas++
}


const cartas = [...document.querySelectorAll(".cartas")]

cartas.map((el)=>{
    el.addEventListener("click",(evt)=>{
        let target = evt.target
        console.log(target)
        target.classList.toggle("goku")
    })
})


