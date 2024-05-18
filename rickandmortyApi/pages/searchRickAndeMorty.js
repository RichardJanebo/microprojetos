const search = document.querySelector("#search")
const input_search = document.querySelector("#input_search")
const img =  document.querySelector("#img")

search.addEventListener("click",()=>{
    console.log(Number(input_search.value))
    fetchApi(Number(input_search.value))
})


const fetchApi =(p)=>{
    fetch(`https://rickandmortyapi.com/api/character/${p}`)
    .then((response)=>{
        return response.json()
    })
    .then((response)=>{
        console.log(response)
        img.setAttribute("src",response.image)
    })
}