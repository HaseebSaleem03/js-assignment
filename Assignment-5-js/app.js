const ul = document.getElementById("lists");
const form = document.getElementById("todo-form");
const newTodo = document.getElementById("todo");
const search = document.getElementById("search");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const newLi = document.createElement("li");
    const taskText = document.createElement("span");
    taskText.textContent = newTodo.value;
    taskText.contentEditable = true;
    taskText.classList.add("task-text");

    taskText.addEventListener("dblclick", function () {
        taskText.style.textDecoration =
            taskText.style.textDecoration === "line-through" ? "none" : "line-through";
    });

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-button");
    removeButton.addEventListener("click", function () {
        ul.removeChild(newLi);
    });

    newLi.appendChild(taskText);
    newLi.appendChild(removeButton);
    ul.appendChild(newLi);
    newTodo.value = "";
});

search.addEventListener("input", function () {
    const filter = search.value.toLowerCase();
    const items = ul.querySelectorAll("li");

    items.forEach(item => {
        const text = item.querySelector(".task-text").textContent.toLowerCase();
        item.style.display = text.includes(filter) ? "flex" : "none";
    });
});
