let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea")
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add")

form.addEventListener("submit",(e)=> {
    e.preventDefault();
    formValidation();
});

let formValidation = () => {
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

let data = [];

let acceptData = () => {
    data.push({
        text: textInput.value,
        date: dateInput.value,
        description: textarea.value,
        
    });

    localStorage.setItem("data", JSON.stringify(data))
    displayPost();
};

let displayPost = () => {
    tasks.innerHTML = "";
    data.map((x,y)=>{
        return (tasks.innerHTML += `
        <div id=${y}>
        <span class="fw-bold">${x.text}</span>
        <span class="small text-secondary">${x.date}</span>
        <p>${x.description}</p>
        <span class="options">
          <i onClick="editPost(this)" data-bs-toggle="modal" data-bs-target="#form" class="fa-solid fa-pen-to-square fa-beat-fade"></i>
          <i onClick="deletePost(this);displayPost()" class="fa-solid fa-trash-can fa-beat-fade"></i>
        </span>
      </div>  
        `);
    })

    formReset();
}

let formReset = () => {
    textInput.value = "";
    dateInput.value = "";
    textarea.value = "";
}

let deletePost = (e) => {
    data.splice(e.parentElement.parentElement.id, 1)
    localStorage.setItem("data", JSON.stringify(data))
    e.parentElement.parentElement.remove()
}

let editPost = (e) => {
    let selectedTask = e.parentElement.parentElement;
    
    textInput.value = selectedTask.children[0].innerHTML;
    dateInput.value = selectedTask.children[1].innerHTML;
    textarea.value = selectedTask.children[2].innerHTML;
    
    deletePost(e)
}

(() => {
    data = JSON.parse(localStorage.getItem("data")) || [];
    displayPost()
    console.log(data)
})()
