//Export sirve para usar la funcion en otros javascript

export function updatenaNavbaractive(id){
    const listItems = document.querySelectorAll(".nav-wrapper .right li")
    listItems.forEach(li => {
        li.classList.remove("active")
    })
    const selectedLi = document.getElementById(id)
    selectedLi.classList.add("active")
}