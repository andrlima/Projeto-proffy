
// Porcura o botão
document.querySelector("#add-time")

//Quando clica no botão
.addEventListener("click", cloneField)

function cloneField() {

    // duplica os campos 
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    //pega os campos 
    const fields = newFieldContainer.querySelectorAll("input")

    // limpa os campos
    fields.forEach(function(field) {
        field.value = ""
    })
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}