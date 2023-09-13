const form = document.getElementById("form");
const input = document.getElementById("input");
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
});

const formValidation = () => {
    if(input.value === ""){
        msg.innerHTML = "Post cannot be blank!"
    } else {
        msg.innerHTML = "";
    }
}
