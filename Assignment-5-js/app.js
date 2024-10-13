const ul = document.getElementById("lists");
const form = document.getElementById("todo-form");
const newTodo = document.getElementById("todo");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const newLi = document.createElement("li");
    newLi.textContent = newTodo.value;
    newLi.contentEditable = true;
    newLi.classList.add("items"); 

    ul.addEventListener("dblclick", function (e) {
      e.target.style.textDecoration = "line-through";
      //   e.target.remove()
      //   console.log("Clicked on ", e.target);
    });
    
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-button");
    removeButton.addEventListener("click", function () {
        ul.removeChild(newLi);
    });

    newLi.appendChild(removeButton);
    ul.appendChild(newLi);
    newTodo.value = "";
});


