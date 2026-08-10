function addTask() {
    const name = document.getElementById("taskName").value.trim();
    const priority = document.getElementById("priority").value;
    const container = document.getElementById("taskContainer");

    if (name === "") {
        alert("Please enter a task.");
        return;
    }

    const emptyMessage = document.querySelector(".empty");

    if (emptyMessage) {
        emptyMessage.remove();
    }

    const task = document.createElement("div");
    task.className = "task";

    task.innerHTML = `
        <div>
            <span>${name}</span><br>
            <small>Priority: ${priority}</small>
        </div>

        <button onclick="removeTask(this)">✖</button>
    `;

    container.appendChild(task);

    document.getElementById("taskName").value = "";
}

function removeTask(button) {
    button.parentElement.remove();

    const container = document.getElementById("taskContainer");

    if (container.children.length === 0) {
        container.innerHTML = '<p class="empty">No tasks added yet.</p>';
    }
}
