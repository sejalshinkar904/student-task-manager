/**
 * @jest-environment jsdom
 */

const fs = require("fs");

const script = fs.readFileSync("./script.js", "utf8");
eval(script);

describe("Student Task Manager Tests", () => {

    beforeEach(() => {
        document.body.innerHTML = `
            <input id="taskName">
            <select id="priority">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>

            <div id="taskContainer">
                <p class="empty">No tasks added yet.</p>
            </div>
        `;

        global.alert = jest.fn();
    });

    test("adds a task successfully", () => {
        document.getElementById("taskName").value = "Complete Assignment";
        document.getElementById("priority").value = "High";

        addTask();

        const task = document.querySelector(".task");

        expect(task).not.toBeNull();
        expect(task.textContent).toContain("Complete Assignment");
        expect(task.textContent).toContain("Priority: High");
    });

    test("does not add an empty task", () => {
        document.getElementById("taskName").value = "";

        addTask();

        expect(document.querySelector(".task")).toBeNull();
        expect(alert).toHaveBeenCalledWith("Please enter a task.");
    });

    test("removes a task successfully", () => {
        document.getElementById("taskName").value = "Test Task";

        addTask();

        const task = document.querySelector(".task");
        const removeButton = task.querySelectorAll("button")[1];

        removeTask(removeButton);

        expect(document.querySelector(".task")).toBeNull();
        expect(document.querySelector(".empty")).not.toBeNull();
    });

    test("completes a task successfully", () => {
        document.getElementById("taskName").value = "Complete Task";

        addTask();

        const task = document.querySelector(".task");
        const completeButton = task.querySelectorAll("button")[0];

        completeTask(completeButton);

        expect(task.style.opacity).toBe("0.5");
        expect(task.querySelector("span").style.textDecoration)
            .toBe("line-through");
    });
});