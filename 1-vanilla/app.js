function getNewId() {
  return Math.random().toString(36).substr(1, 5);
}

function renderList() {
  for (let i = 0; i < items.length; i++) {
    const id = getNewId();
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const innerText = document.createTextNode(items[i]);
    const removeButton = document.createElement("button", { type: "button" });

    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("data-id", id);
    checkbox.classList.add("check");
    checkbox.addEventListener("change", toggleTodo);

    removeButton.setAttribute("data-id", id);
    removeButton.innerText = "X";
    removeButton.addEventListener("click", removeTodo);

    li.setAttribute("data-id", id);
    li.appendChild(checkbox);
    li.appendChild(innerText);
    li.appendChild(removeButton);

    list.appendChild(li);
  }
}

function renderListItem(text) {
  const id = getNewId();
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const innerText = document.createTextNode(text);
  const removeButton = document.createElement("button", { type: "button" });

  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("data-id", id);
  checkbox.classList.add("check");
  checkbox.addEventListener("change", toggleTodo);

  removeButton.innerText = "X";
  removeButton.setAttribute("data-id", id);
  removeButton.addEventListener("click", removeTodo);

  li.setAttribute("data-id", id);
  li.appendChild(checkbox);
  li.appendChild(innerText);
  li.appendChild(removeButton);

  list.appendChild(li);
}

function addTodo() {
  const todo = input.value;
  if (todo) {
    items.push(todo);
    input.value = "";
    renderListItem(todo);
  } else {
    input.focus();
  }
}

function removeTodo(event) {
  const id = event.target.dataset.id;
  const ul = document.querySelector("ul");
  const li = document.querySelector(`li[data-id="${id}"]`);
  const button = document.querySelector(`button[data-id="${id}"]`);
  const liInnerText = li.textContent.substr(0, li.textContent.length - 1);
  items = items.filter((item) => item !== liInnerText);
  button.removeEventListener("click", removeTodo);
  ul.removeChild(li);
}

function toggleTodo(event) {
  const id = event.target.dataset.id;
  const li = document.querySelector(`li[data-id="${id}"]`);
  li.classList.toggle("completed");
}

let items = ["omae", "wa", "mou", "shindeiru"];

const app = document.getElementById("app");
const list = document.createElement("ul");
const addForm = document.createElement("div");
const input = document.createElement("input", { type: "text" });
const addButton = document.createElement("button", { type: "button" });

addForm.classList.add("add-form");
input.placeholder = "Новая задача";
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    addButton.click();
  }
});
addButton.innerText = "Добавить";
addButton.addEventListener("click", addTodo);

addForm.appendChild(input);
addForm.appendChild(addButton);
app.appendChild(addForm);
app.appendChild(list);

if (document.readyState === "complete") {
  renderList();
}
