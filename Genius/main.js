const divPontuacao = document.querySelector("div.pontuacao")
const divMain = document.querySelector("main")
const divs = Array.from(divMain.querySelectorAll("div"))
const buttonInicio = document.querySelector("div.botao>a")
const divCnt = document.querySelector("div.cnt")
const divGameOve = document.querySelector("div.gameover")
const divInvisivel = document.querySelector("div.invisivel")


let sequencia = []
let animatingColors = false
let currentColorPosition = 0

buttonInicio.addEventListener("click", ev => {

    inicio()
    divInvisivel.classList.remove("invisivel")
    
})

divMain.addEventListener("click", ev => {
    if (animatingColors) {
        currentSequenciaPosition = 0
        return
    }
    
    const idxClickedElement = divs.indexOf(ev.target)
    
    if (idxClickedElement !== sequencia[currentColorPosition]) {
        divCnt.innerHTML = "GAME OVER!"
        buttonInicio.innerHTML = "Recomeçar"
        divInvisivel.classList.remove("invisivel")
        return
    }

    currentColorPosition++
    ev.target.classList.add("animate")
    
    if (currentColorPosition >= sequencia.length) {
        currentColorPosition = 0
        setTimeout(() => turno(), 1000)
    }
})


divs.forEach(div => {
    div.addEventListener("animationend", () => {
        div.classList.remove("animate")
    })
})

function playAnimationColors() {
    sequencia.forEach((current, index) => {
        setTimeout(() => {
            divs[current].classList.add("animate");
            animatingColors = index < sequencia.length - 1
        }, 1000 * index);
    })
}

function inicio() {
    let cnt = 3
    sequencia = []
    currentColorPosition = 0
    let idx = setInterval(() => {
        divCnt.innerHTML = cnt--
        if(cnt < 0) {
            divCnt.classList.add("invisivel")
            turno()
            clearInterval(idx)
        }
    }, 1000)
}

function turno() {
    divPontuacao.innerHTML = sequencia.length
    const rnd = Math.round(Math.random() * 3)
    sequencia.push(rnd)
    playAnimationColors()
}