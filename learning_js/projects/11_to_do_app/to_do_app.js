const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-box")

item.addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        addToDo(this.value);
        this.value = ""
    }
})

const loadToDos = () => {
    const storeToDos = JSON.parse(localStorage.getItem("toDos"));
    
    if (storeToDos === null){
        addToDo()
    }else{
        storeToDos.forEach( 
            (item) => {
                addToDo(item)
            }
        )
    }
}

const saveTOdos = () => {
    const toDOItems = document.querySelectorAll("#list-value")
    const toDOList = []
    toDOItems.forEach(
        (item) => {
            toDOList.push(item.textContent)
    })
    localStorage.setItem("toDos", JSON.stringify(toDOList))
}

const addToDo = (item) => {
    if(!item.trim()){
        return;
    }
    const listItem = document.createElement("li")
    listItem.id = "list-value"
    listItem.innerHTML = `${item} <i class="fa fa-times"></i>`
    listItem.addEventListener('click', function(){
        this.classList.toggle("done")
        saveTOdos()
    })
    listItem.querySelector("i").addEventListener('click', function(){
        listItem.remove();
        saveTOdos()
    })
    toDoBox.appendChild(listItem)
    saveTOdos()
}

document.addEventListener('DOMContentLoaded',loadToDos)