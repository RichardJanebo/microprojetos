const search = document.querySelector("#search")
const input_search = document.querySelector("#input_search")
const img = document.querySelector("#img")
const stage = document.querySelector("#stage")

search.addEventListener("click", () => {
    fetchApi(input_search.value)
})

const selectOpition = ()=>{
    let indice = 1
    const endpoint = fetch(`https://rickandmortyapi.com/api/character/`)
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            while(indice < response.info.count){
                const option = document.createElement("option")
                option.setAttribute("value",indice)
                fetch(`https://rickandmortyapi.com/api/character/${indice}`)
                .then((res) => {
                    return res.json()
                })
                .then((res)=>{
                    option.innerHTML=String(res.name)
                    input_search.appendChild(option)
                })
                

                indice++
            }
            
        })
}



const createData = (p) => {
    stage.innerHTML = ""
    let data = {
        name: `Nome: ${String(p.name)}</br>`,
        episodes: `Episódios: ${p.episode.length}</br>`,
        gender: `Genero: ${p.gender != "Male" ? "Feminino" : "Masculino"}</br>`,
        species: `Especie: ${p.species == "Human"?"Humano":p.species}</br>`,
    }
    const div = document.createElement("div")
    const img = document.createElement("img")
    img.setAttribute("src", p.image)

    div.innerHTML = data.name
    div.innerHTML += data.gender
    div.innerHTML += data.species
    div.innerHTML += data.episodes

    stage.appendChild(img)
    stage.appendChild(div)


}




const fetchApi = (p) => {
    if(p == 0 ){
        alert("Escolha pelo menos um personagem")
    }
    fetch(`https://rickandmortyapi.com/api/character/${p}`)
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            console.log(response)
            createData(response)


        })

}


window.addEventListener("load",()=>{
    selectOpition()
    fetchApi(1)
})
