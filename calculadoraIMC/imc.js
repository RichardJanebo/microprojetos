const peso = document.querySelector("#peso")
const altura = document.querySelector("#altura")
const resposta = document.querySelector("#res")
const calcular = document.querySelector("#calcular")
const corre = document.querySelector("#corre")


calcular.addEventListener("click",()=>{
    if(peso.value.length == 0){
        alert("o peso esta zerado")
    }else if(altura.value.length == 0){
        alert("A altura esta zerada")
    }
    
    else{
        const calculo = peso.value / altura.value**2

        let cal = parseFloat(calculo.toFixed(2))


        if(cal < 18.5){
            resposta.innerHTML=`Seu IMC é ${cal} e Você esta abaixo do peso`
        }else if(cal > 18.5 && cal < 24.9){
            resposta.innerHTML=`Seu IMC é ${cal} e Você esta com o peso nomal`
        }else if(cal > 25 && cal < 29.9){
            resposta.innerHTML=`Seu IMC é ${cal} e Você esta com sobrepeso`
        }else if(cal > 30.0 && cal < 34.9){
            resposta.innerHTML=`Seu IMC é ${cal} e Você esta com obesidade de grau 1`
        }else if(cal > 35 && cal < 39.9){
            resposta.innerHTML=`Seu IMC é ${cal} e Você esta com obesidade de grau 2`
        }else{
            resposta.innerHTML=`Seu IMC é ${cal} e Você esta com obesidade de grau 3`
            corre.style.display="block"

        }
    }

    
})

