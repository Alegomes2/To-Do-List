// variáveis ​​de interface do usuário
let toDoListArray = []
const form = document.querySelector(".form")
const input = document.querySelector(".form-input")
const ul = document.querySelector(".toDoList")

// Lista de Eventos

form.addEventListener('submit', e => {
  //  Evitar o comportamento padrão - Recarregar a página
    e.preventDefault();
    // Dê ao Item um ID exclusivo
    let itemId = String(Date.now());
    // Obter/Avaliar o valor de entrada
    let toDoItem = input.value;
    // Passar ID e Item em funções
    addItemToDOM(itemId, toDoItem);
    addItemArray(itemId, toDoItem);
    // Limpe a caixa de entrada. Este é o comportamento padrão, mas nos livramos disso.
    input.value = '';
})

ul.addEventListener('click', e => {
    let id = e.target.getAttribute('data-id')
    if (!id) return // Usuário clicou em outra coisa
    // Passar ID através de funções
    removeItemFromDOM(id)
    removeItemFromArray(id)
})

// Funções 

function addItemToDOM(itemId, toDoItem) {
    // Criar uma Lista
    const li = document.createElement('li')
    li.setAttribute("data-id", itemId)
    // Adicionar texto a lista
    li.innerText = toDoItem 
    // Adicionar Lista a DOM 
    ul.appendChild(li)
}

function addItemFromArray(itemId, toDoItem) {
    // Adicione Item ao array como um objeto com um ID para que possamos localizá-lo e excluí-lo mais tarde.
    toDoListArray.push({itemId, toDoItem})
    console.log(toDoListArray)
}

function removeItemFromDOM(id) {
    // Obter o item da lista por ID de dados
    var li = document.querySelector('[data-id="' + id + '"]')
    ul.removeChild(li)
}

function removeItemFromArray(id) {
    // Crie uma nova lista de tarefas com todos os li's que não correspondem ao ID
    toDoListArray = toDoListArray.filter((item) => item.itemId !== id)
    console.log(toDoListArray)
}
