
function escondeSenha(event){
    event.preventDefault() //evita que o formulário atualize a tela
    let botaoEsconde = document.getElementById("password")
    botaoEsconde.setAttribute("type","password")

    let tema = document.querySelector(".light")
    tema.classList.remove("light")
    tema.classList.add("dark")

}