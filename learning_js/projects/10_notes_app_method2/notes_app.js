const addBtn = document.querySelector("#addBtn")
const main = document.querySelector("#main")

addBtn.addEventListener("click",function(){
    addNote()
    }
)

const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea")
    const data = []
    notes.forEach(
        (note) => {
        data.push(note.value)
    })
    if (data.length === 0){
        localStorage.removeItem("notes")
    } else {
        localStorage.setItem("notes", JSON.stringify(data))
    }
}

const addNote = (text= "") => {
    const note = document.createElement('div')
    note.classList.add("note")
    note.innerHTML = 
    `<div class="tool">
                <i class="save fa fa-save"></i>
                <i class="trash fa fa-trash-o"></i>
            </div>
            <textarea>${text}</textarea>`
    note.querySelector(".trash").addEventListener('click',function(){
        note.remove()
        saveNotes()
    })
    note.querySelector(".save").addEventListener('click',function(){
        saveNotes()
    })
    note.querySelector("textarea").addEventListener('focusout' ,function(){
        saveNotes()
    })
    main.appendChild(note)
    saveNotes()
}

( function(){
    const local_storage_notes = JSON.parse(localStorage.getItem("notes"))
    if (local_storage_notes === null){
        addNote()
    }else{
        local_storage_notes.forEach( 
            (local_storage_notes) => {
                addNote(local_storage_notes)
            }
        )
    }
})()