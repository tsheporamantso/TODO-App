const form = document.getElementById("form");
const textInput = document.getElementById("textInput");
const dateInput = document.getElementById("dateInput");
const textarea = document.getElementById("textarea")
const msg = document.getElementById("msg");
const tasks = document.getElementById("tasks");
const add = document.getElementById("add")

form.addEventListener("submit",(e)=> {
    e.preventDefault();
    formValidation();
});

const formValidation = () => {
    if(textInput.value === ""){
        msg.innerHTML = "Task cannot be blank!"
    } else {
        msg.innerHTML = ""
        acceptData();
        add.setAttribute("data-bs-dismiss","modal") // using set attribute method to dismiss modal after submitting task.
        add.click() // simulate the button click(clicking twice to dismiss modal)

        (()=>{
            add.setAttribute("data-bs-dismiss","")
        })() //IIFE(immediately Invoked Function Expression)
    }
}

const data = {};

const acceptData = () => {
    data["text"] = textInput.value
    data["date"] = dateInput.value
    data["description"] = textarea.value
    displayPost();
}

const displayPost = () => {
    tasks.innerHTML += `
    <div>
    <span class="fw-bold">${data.text}</span>
    <span class="small text-secondary">${data.date}</span>
    <p>${data.description}</p>
    <span class="options">
      <i onClick="editPost(this)" data-bs-toggle="modal" data-bs-target="#form" class="fa-solid fa-pen-to-square fa-beat-fade"></i>
      <i onClick="deletePost(this)" class="fa-solid fa-trash-can fa-beat-fade"></i>
    </span>
  </div>  
    `;
    formReset();
}

const formReset = () => {
    textInput.value = "";
    dateInput.value = "";
    textarea.value = "";
}

const deletePost = (e) => {
    e.parentElement.parentElement.remove()
}

const editPost = (e) => {
    let selectedTask = e.parentElement.parentElement;
    
    textInput.value = selectedTask.children[0].innerHTML;
    dateInput.value = selectedTask.children[1].innerHTML;
    textarea.value = selectedTask.children[2].innerHTML;
    
    selectedTask.remove();
}
