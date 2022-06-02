
const actionBar = document.querySelector("div.action-bar")
const btAdd = actionBar.querySelector(".bt-add")
const container = document.querySelector(".container-data")
const templateModalAluno = container.querySelector("template.aluno")
const btLupa = actionBar.querySelector(".bt-lupa")
const btsalvar = actionBar.querySelector(".bt-salvar")

btAdd.addEventListener("click", () => {
    const cloneModal = templateModalAluno.content.cloneNode(true)
    container.prepend(cloneModal)
})

container.addEventListener("click", ev => {
    const btClose = ev.target.closest(".bt-close")
    if (btClose) {
        const modal = ev.target.closest(".modal")
        modal.remove()
    }
})