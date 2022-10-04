
const addElement = () =>{
const lista = document.getElementById("lista")

const item0 = document.createElement("li")
item0.innerHTML = "item 0"
lista.insertAdjacentElement('Afterbegin',item0)
const item5 = document.createElement("li")

//Esse aqui funciona também
// item5.innerHTML = "item 5"
// lista.insertAdjacentElement('beforeend',item5)

lista.appendChild(item5)
item5.innerHTML = "Item 5"
}

addElement()





