const notes =  [
    new Audio("./notes/1.wav"),
    new Audio("./notes/2.wav"),
    new Audio("./notes/3.wav"),
    new Audio("./notes/4.wav"),
    new Audio("./notes/5.wav"),
    new Audio("./notes/6.wav"),
    new Audio("./notes/7.wav"),
    new Audio("./notes/8.wav"),
    new Audio("./notes/9.wav"),
    new Audio("./notes/10.wav"),
    new Audio("./notes/11.wav"),
    new Audio("./notes/12.wav"),
    new Audio("./notes/13.wav"),
    new Audio("./notes/14.wav"),
    new Audio("./notes/15.wav"),
    new Audio("./notes/16.wav"),
    new Audio("./notes/17.wav"),
    new Audio("./notes/18.wav"),
    new Audio("./notes/19.wav"),
    new Audio("./notes/20.wav"),
    new Audio("./notes/21.wav"),
    new Audio("./notes/22.wav"),
    new Audio("./notes/23.wav"),
    new Audio("./notes/24.wav"),
]



const checkbox__keys = document.querySelector("#checkbox__keys")
const keys = [...document.querySelectorAll(".key")]

checkbox__keys.addEventListener("click",({target})=>{
    target.parentNode.firstChild.nextSibling.classList.toggle("swicher__active")
    const piano__keys = document.querySelector(".piano__keys")
    piano__keys.classList.toggle("disabled-key")

    

})

keys.map((el)=>{
    el.addEventListener("click",()=>{
        reproduzirSom(parseInt(el.dataset.note))
        animation(el)
    })
})

const animation = (el)=>{
    el.classList.add("teclou")
    
    setTimeout(()=>{
        el.classList.remove("teclou")
    },2000)
   
}

    window.addEventListener("keydown",(evt)=>{
        key(evt.code)
      
    })


const encontrarOEle = (p)=>{
    keys.map((el)=>{
        if(el.firstChild.textContent.charCodeAt() === p){
            animation(el)
        }
    })


}



const key = (e)=>{
    switch(e){
        case "Backquote":
        encontrarOEle(39)
        reproduzirSom(1)
        break
        case "Digit1":
        encontrarOEle(49)
        reproduzirSom(2)
        break
        case "KeyQ":
        reproduzirSom(3)
        encontrarOEle(113)
        break
        case "Digit2":
        reproduzirSom(4)
        encontrarOEle(50)
        break
        case "KeyW":
        reproduzirSom(5)
        encontrarOEle(119)
        break
        case "Digit3":
        reproduzirSom(6)
        encontrarOEle(51)
        break
        case "KeyE":
        reproduzirSom(7)
        encontrarOEle(101)
        break
        case "Digit4":
        reproduzirSom(8)
        encontrarOEle(52)
        break
        case "KeyR":
        reproduzirSom(9)
        encontrarOEle(114)
        break
        case "Digit5":
        reproduzirSom(10)
        encontrarOEle(53)
        break
        case "KeyT":
        reproduzirSom(11)
        encontrarOEle(116)
        
        break
        case "Digit6":
        reproduzirSom(12)
        encontrarOEle(54)
        break
        case "KeyY":
        reproduzirSom(13)
        encontrarOEle(121)
        break
        case "KeyU":
        reproduzirSom(14)
        encontrarOEle(117)
        break
        case "Digit8":
        reproduzirSom(15)
        encontrarOEle(56)
        break
        case "KeyI":
        reproduzirSom(16)
        encontrarOEle(105)
        break
        case "Digit9":
        reproduzirSom(17)
        encontrarOEle(57)
        break
        case "KeyO":
        reproduzirSom(18)
        encontrarOEle(111)
        break
        case "KeyP":
        reproduzirSom(19)
        encontrarOEle(112)
        break
        case "Minus":
        reproduzirSom(20)
        encontrarOEle(45)
        break
        case "BracketRight":
        reproduzirSom(21)
        encontrarOEle(91)
        break
        case "Equal":
        reproduzirSom(22)
        encontrarOEle(61)
        break
        case "Backspace":
        reproduzirSom(23)
        encontrarOEle(8592)
        break
        case "IntlBackslash":
        reproduzirSom(24)
        encontrarOEle(92)
        break

    }
}

let ini = null
let seg = null

const reproduzirSom = (p)=>{
    if (ini === null){
        ini = p-1
        notes[p-1].play()
    }else{
        seg = p-1
      
        if(ini == seg){
            notes[p-1].currentTime=0
            notes[p-1].play()
        }else{
            ini = null
            seg = null
        }
    }
    

   
    
   
}

if (/Android/i.test(navigator.userAgent)) {
  alert("Rotacione a tela")
} 

