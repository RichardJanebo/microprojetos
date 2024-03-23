const questions = [
    {
        question: "Qual a capital do Mato grosso Do sul ?",
        answers: [
            { text: "Três Lagoas", correct: false },
            { text: "Campo Grande", correct: true },
            { text: "Cuiabá", correct: false },
            { text: "Brasilia", correct: false },
        ]
    },
    {
        question: "Qual o estado mais populoso do Brasil?",
        answers: [
            { text: "Amazonas", correct: "false" },
            { text: "Pará", correct: "false" },
            { text: "Goiás", correct: "false" },
            { text: "São Paulo", correct: "true" }
        ]
    },
    {
        question: "Qual o maior estado do Brasil ?",
        answers: [
            { text: "Amazonas", correct: "true" },
            { text: "Amapá", correct: "false" },
            { text: "Sergipe", correct: "false" },
            { text: "São Paulo", correct: "false" },
        ]
    },
    {
        question: "Qual dessas cidades faz fronteira com Uruguai ?",
        answers: [
            { text: "Passo fundo", correct: "false" },
            { text: "Foz do Iguaçú", correct: "false" },
            { text: "Santana do Livramento", correct: "true" },
            { text: "Aracaju", correct: "false" },
        ]
    },
    {
        question: "Qual estado tem mais municipios ?",
        answers: [
            { text: "Minas Gerais", correct: "true" },
            { text: "São Paulo", correct: "false" },
            { text: "Rio Grande do Sul", correct: "false" },
            { text: "Santa Catarina", correct: "false" },
        ]
    },
    {
        question: "Qual desses estados faz fronteira com o Paraguai ?",
        answers: [
            { text: "Tocantins", correct: "false" },
            { text: "Mato Grosso do sul", correct: "true" },
            { text: "Piauí", correct: "false" },
            { text: "São Paulo", correct: "false" },
        ]
    }
]

const exibirQuestion = document.querySelector("#question")
const answerButtons = document.querySelector("#answer-buttons")
const btnProximo = document.querySelector("#next_btn")


let currentQuestionIndex = 0
let score = 0

function starQuiz(){
    currentQuestionIndex = 0
    score = 0
    showQuestion()

}

function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex]
    let questionOn =currentQuestionIndex + 1
    exibirQuestion.innerHTML= questionOn + ". " + currentQuestion.question


    currentQuestion.answers.forEach((answers)=>{
        const button = document.createElement("button")
        button.innerHTML=answers.text
        button.classList.add("btn")
        answerButtons.appendChild(button)
        if(answers.correct){
            button.dataset.correct = answers.correct
        }

        button.addEventListener("click", (evt)=>{
            const selectedBtn = evt.target

            selectAnswer(selectedBtn)

        })
    })
}


function resetState(){
    btnProximo.style.display = "none"
    while(answerButtons.firstChild){

        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){

    const isCorrect = e.dataset.correct === "true"

    if(isCorrect){
        e.classList.add("correct")
        score ++
    }else{
        e.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true
    })

    btnProximo.style.display = "block"
}


btnProximo.addEventListener("click",()=>{
    if (currentQuestionIndex < questions.length){
        handleNextButton()
    }else{
        starQuiz()
    }
})

function handleNextButton(){
    currentQuestionIndex ++
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }else{
        showScore()
    }

}

function showScore(){
    resetState()
    exibirQuestion.innerHTML= `Sua pontuação foi ${score}/6`
    btnProximo.innerHTML = "Tente Novamente"
    btnProximo.style.display = "block"

}


starQuiz()





