function addTask() {

const name = document.getElementById("taskName").value.trim();
const priority = document.getElementById("priority").value;
const date = document.getElementById("taskDate").value;
const container = document.getElementById("taskContainer");

// Check if task name is empty
if (name === "") {
    alert("Please enter a task.");
    return;
}

// Remove empty message
const emptyMessage = document.querySelector(".empty");

if (emptyMessage) {
    emptyMessage.remove();
}

// Create a new task
const task = document.createElement("div");
task.className = "task";

// Display date or default message
const dateText = date !== "" ? date : "Not set";

task.innerHTML = `
    <div>
        <span>${name}</span><br>
        <small>Priority: ${priority}</small><br>
        <small>Due Date: ${dateText}</small>
    </div>

    <div class="task-actions">
        <button onclick="completeTask(this)">✓</button>
        <button onclick="removeTask(this)">✖</button>
    </div>
`;

// Add task to container
container.appendChild(task);

// Clear input fields
document.getElementById("taskName").value = "";
document.getElementById("taskDate").value = "";

// Update task count
updateTaskCount();


}

function removeTask(button) {

// Remove selected task
button.closest(".task").remove();

const container = document.getElementById("taskContainer");

// Show empty message if there are no tasks
if (container.children.length === 0) {

    container.innerHTML =
        '<p class="empty">No tasks added yet.</p>';
}

// Update task count
updateTaskCount();


}

function completeTask(button) {

const task = button.closest(".task");

const taskName = task.querySelector("span");

// Mark task as completed
task.style.opacity = "0.5";
taskName.style.textDecoration = "line-through";

// Change button symbol
button.textContent = "↩";

// Prevent clicking complete again
button.onclick = function () {
    task.style.opacity = "1";
    taskName.style.textDecoration = "none";
    button.textContent = "✓";

    button.onclick = function () {
        completeTask(button);
    };
};


}

function updateTaskCount() {

const tasks = document.querySelectorAll(".task");

document.getElementById("taskCount").textContent =
    "Total Tasks: " + tasks.length;


}

function clearTasks() {

const container = document.getElementById("taskContainer");

const tasks = container.querySelectorAll(".task");

// Check if there are tasks
if (tasks.length === 0) {

    alert("There are no tasks to clear.");

    return;
}

// Ask for confirmation
const confirmClear =
    confirm("Are you sure you want to remove all tasks?");

if (confirmClear) {

    container.innerHTML =
        '<p class="empty">No tasks added yet.</p>';

    updateTaskCount();
}


}
