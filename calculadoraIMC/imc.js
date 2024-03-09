const peso = document.querySelector("#peso")
const altura = document.querySelector("#altura")
const resposta = document.querySelector("#res")
const calcular = document.querySelector("#calcular")


calcular.addEventListener("click",()=>{
    if(peso.value.length == 0){
        alert("o peso esta zerado")
    }else if(altura.value.length == 0){
        alert("A altura esta zerada")
    }else{
        const calculo = peso.value / altura.value**2
        let cal = parseFloat(calculo.toFixed(2))
        resposta.innerHTML=cal


        if(cal < 18.25){
            
        }
    }

    
})

