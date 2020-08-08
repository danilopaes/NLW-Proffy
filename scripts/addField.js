// procurar o botão
document.querySelector("#add-time")
//quando clicar no botão
.addEventListener('click', cloneField)
//execultar uma ação
function cloneField(){
//duplicar os campos
const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean: true ou false

//pegar os campos
const fields = newFieldContainer.querySelectorAll('input')

//para cada campo, limpar
fields.forEach(function(field){
    //pega o field do momento e limpa ele
    field.value = ""

})

//colocar na pagina
document.querySelector('#schedule-items').appendChild(newFieldContainer)
}




