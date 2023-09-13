const form = document.getElementById("form");
const input = document.getElementById("input");
const msg = document.getElementById("msg");
const posts = document.getElementById("posts")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
});

const formValidation = () => {
    if(input.value === ""){
        msg.innerHTML = "Post cannot be blank!"
    } else {
        msg.innerHTML = "";
        acceptData();
    }
}

const data = {};

const acceptData = () => {
    data["text"] = input.value
    displayPost();

}

const displayPost = () => {
    posts.innerHTML += `
    <div>
    <p>${data.text}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fa-solid fa-pen-to-square fa-beat"></i>
      <i onClick="deletePost(this)" class="fa-regular fa-trash-can fa-beat"></i>
    </span>
  </div>
    `;
    input.value = "";
}

const deletePost = (event) => {
    event.parentElement.parentElement.remove();
}

const editPost = (event) => {
    input.value = event.parentElement.previousElementSibling.innerHTML;
    event.parentElement.parentElement.remove();
}