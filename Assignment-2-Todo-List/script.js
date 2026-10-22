const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const emptyMessage = document.querySelector("#empty-state");

function addTask(taskText) {
  const task = document.createElement("li");
  task.className = "task";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const taskName = document.createElement("span");
  taskName.className = "task-text";
  taskName.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "delete-button";
  deleteButton.textContent = "×";
  deleteButton.setAttribute("aria-label", "Delete " + taskText);

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      task.classList.add("completed");
    } else {
      task.classList.remove("completed");
    }
  });

  deleteButton.addEventListener("click", function () {
    task.remove();
    if (taskList.children.length === 0) {
      emptyMessage.hidden = false;
    }
  });

  task.appendChild(checkbox);
  task.appendChild(taskName);
  task.appendChild(deleteButton);
  taskList.appendChild(task);
  emptyMessage.hidden = true;
}

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    addTask(taskText);
    taskInput.value = "";
  }
});
