let addNote = document.getElementById("addNote");
let cancleIcon = document.querySelector(".icon");
let addBtn = document.querySelector("#addBtn");
console.log(addBtn);

addNote.addEventListener('click', function(){
    document.querySelector(".addForm").style.display = "block"
    document.getElementById("title").value = ''
    document.getElementById("description").value = ''
})

cancleIcon.addEventListener('click', function(){
    document.querySelector(".addForm").style.display = "none"
})  

addBtn.addEventListener('click', function(){
    document.querySelector(".addForm").style.display = "none";

    let div = document.createElement('div')
    div.classList.add("myNote")
    div.innerHTML = 
    `<h2>${document.getElementById("title").value}<h2><hr>
    <p>${document.getElementById("description").value}<p>
    <button>Delete <i class="fa fa-trash"></i></button>`
    div.querySelector('button').addEventListener("click",function(){
        div.remove();
    })
    document.querySelector(".newNotes").appendChild(div);
}) 