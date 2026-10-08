const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");
const emptyState = document.querySelector("#empty-state");
const count = document.querySelector("#task-count");

function updateSummary() {
  const total = list.children.length;
  const completed = list.querySelectorAll(".task.completed").length;
  count.textContent = `${total} ${total === 1 ? "task" : "tasks"}${completed ? ` · ${completed} done` : ""}`;
  emptyState.hidden = total > 0;
}

function addTask(text) {
  const item = document.createElement("li");
  item.className = "task";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.setAttribute("aria-label", `Mark ${text} as completed`);
  checkbox.addEventListener("change", () => {
    item.classList.toggle("completed", checkbox.checked);
    updateSummary();
  });

  const label = document.createElement("span");
  label.className = "task-text";
  label.textContent = text;

  const remove = document.createElement("button");
  remove.type = "button";
  remove.className = "delete-button";
  remove.textContent = "×";
  remove.setAttribute("aria-label", `Delete ${text}`);
  remove.addEventListener("click", () => {
    item.remove();
    updateSummary();
  });

  item.append(checkbox, label, remove);
  list.append(item);
  updateSummary();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const task = input.value.trim();
  if (!task) return;
  addTask(task);
  input.value = "";
  input.focus();
});

updateSummary();
