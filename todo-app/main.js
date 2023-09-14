const form = document.getElementById("form");
const textInput = document.getElementById("textInput");
const dateInput = document.getElementById("dateInput");
const textarea = document.getElementById("textarea")
const msg = document.getElementById("msg");

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
    }
}

const data = {};

const acceptData = () => {
    data["text"] = textInput.value
    data["date"] = dateInput.value
    data["discription"] = textarea.value
    console.log(data)
}

