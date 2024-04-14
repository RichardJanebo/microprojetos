const nameLogin = document.querySelector("#tex_input")
const btnLogin = document.querySelector("#btn_login")
const form = document.querySelector("#login_form")

const validateInput = ({target})=>{
    if (target.value.length > 3 && target.value.length < 20){
        btnLogin.removeAttribute("disabled")
    }else{
        btnLogin.setAttribute("disabled","disabled")
    }
}


const handleSubmit = (evt)=>{
   evt.preventDefault()
   localStorage.setItem("player",nameLogin.value)
   window.location = "pages/memoryG.html"

}


nameLogin.addEventListener("input",validateInput)

form.addEventListener("submit", handleSubmit)
