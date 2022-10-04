function insereItem(event){
    const input = document.getElementById("meu-input")
    const lista = document.getElementById("lista")
    const addLista = document.createElement("li")
    addLista.innerHTML = input.value
    lista.insertAdjacentElement('beforeend',addLista)
    input.value = ""
}