const numeros = document.querySelector("#text")
const calcular = document.querySelector("#calcular")
const resultado = document.querySelector("#resultado")

function calc(binario) {
    let decimal = 0
    let expoente = 0
    let digitos = binario.toString().split('').reverse()

    if (digitos.length > 8) {
        alert("A Quantidade de numeros deve ser inferior a 8")


    } else {
        for (let digito of digitos) {
            if (digito === '1' || digito === '0') {

                if (digito === '1') {
                    decimal += Math.pow(2, expoente)
                }

            } else {
                alert("digito Invalido")
            }

            expoente++
        }

        return decimal
    }

}




calcular.addEventListener("click", () => {
    const numerosDigitados = numeros.value


    resultado.innerHTML = calc(numerosDigitados)
    console.log(calc(numerosDigitados))
})

