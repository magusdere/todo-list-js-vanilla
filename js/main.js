const tareas = []; // Array para las tareas

const inputTask = document.querySelector(".todo-input");
const addButton = document.querySelector(".add-button");
const listContainer = document.querySelector(".list-container");

function addTask() {
  const tarea = inputTask.value; // obtengo el texto

  if (tarea === "") {
    return; // Evita tareas vacias
  }

  tareas.push(tarea); // guardo la tarea en el array
  inputTask.value = ""; // limpio el input

  renderTask(); // renderizo todas las tareas
}

function renderTask() {
  listContainer.innerHTML = ""; // limpiamos lo anterior para evitar duplicacion

  tareas.forEach((tarea, i) => {
    // Creo un elemento para cada tarea
    const item = document.createElement("div");
    item.className = "task-item";

    //contenedor izquierdo de checkbox + texto
    const left = document.createElement("div");
    left.className = "task-left";

    const text = document.createElement("p");
    text.textContent = tarea;
    text.className = "task-text";

    // checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";

    // evento: tachar texto al marcar checkboc
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        text.classList.add("completed");
      } else {
        text.classList.remove("completed");
      }
    });

    // boton de eliminar
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";

    deleteButton.addEventListener("click", () => {
      tareas.splice(i, 1);
      renderTask();
    });

    // agrego la tarea al contenedor
    left.appendChild(checkbox);
    left.appendChild(text);
    item.appendChild(left);
    item.appendChild(deleteButton);
    listContainer.appendChild(item);
  });
}

inputTask.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

addButton.addEventListener("click", () => {
  addTask();
});
