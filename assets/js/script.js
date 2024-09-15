// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId")) || 1;

// Todo: create a function to generate a unique task id
function generateTaskId() {
    return nextId++;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    // create the HTML structure for a task card
    const card = `
    <div class="task-card card mb-2 p-2" id="task-${task.id}" data-color="${task.color}">
        <h5>${task.title}</h5>
        <p>${task.description}</p>
        <small>deadline: ${task.deadline}</small>
        <button class="btn btn-danger btn-sm mt-2 delete-task">delete</button>
    </div>`;
    return card;
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    // clear existing tasks
    $("#todo-cards, #in-progress-cards, #done-cards").empty();
    // loop through task list and append tasks to their respective columns
    taskList.forEach(task => {
        const card = createTaskCard(task);
        $(`#${task.status}-cards`).append(card);
    });
    addEventListeners();
    makeCardsDraggable();
}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {
    event.preventDefault();
    // get input values from form
    const title = $("#task-title").val();
    const description = $("#task-desc").val();
    const deadline = $("#task-deadline").val();

    // create a new task object
    const task = {
        id: generateTaskId(),
        title,
        description,
        deadline,
        status: 'todo', // Initial status set to 'todo'
        color: dayjs(deadline).isBefore(dayjs()) ? 'red' : dayjs(deadline).diff(dayjs(), 'day') <= 2 ? 'yellow' : 'green'
    };

    // add the new task to the task list
    taskList.push(task);
    saveTasks();
    renderTaskList();
    $("#formModal").modal('hide');
    $("#task-form")[0].reset(); // reset the form fields after saving
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {
    // find the task id to delete
    const taskId = $(event.target).closest('.task-card').attr('id').split('-')[1];
    // filter out the task from the task list
    taskList = taskList.filter(task => task.id != taskId);
    saveTasks();
    renderTaskList();
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    // get the task id and new status lane
    const taskId = ui.draggable.attr('id').split('-')[1];
    const newStatus = $(this).attr('id').replace('-cards', '');

    // update the status of the dropped task
    if (newStatus === 'todo' || newStatus === 'in-progress' || newStatus === 'done') {
        taskList = taskList.map(task => task.id == taskId ? { ...task, status: newStatus } : task);
        saveTasks();
        renderTaskList();
    }
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    renderTaskList();
    $("#task-form").on("submit", handleAddTask); // handle form submission to add tasks
    makeLanesDroppable(); // initialize droppable lanes

    // initialize date picker inside the modal show event
    $('#formModal').on('shown.bs.modal', function () {
        $("#task-deadline").datepicker({
            dateFormat: "yy-mm-dd" // initialize date picker with desired date format
        });
    });
});

// Helper function to make lanes droppable
function makeLanesDroppable() {
    $(".lane").droppable({
        accept: ".task-card",
        drop: handleDrop,
        tolerance: "pointer", // ensures the task is accurately dropped
        hoverClass: "lane-hover" // visual feedback on hover
    });
}

// Helper function to make task cards draggable
function makeCardsDraggable() {
    $(".task-card").draggable({
        revert: "invalid", // revert if not dropped on a valid target
        zIndex: 1000, // ensure the dragged item is always on top
        containment: ".container", // constrain the drag within the container
        cursorAt: { top: 10, left: 10 }, // cursor positioning relative to the dragged item
        start: function () {
            $(this).css("cursor", "grabbing");
        },
        stop: function () {
            $(this).css({ top: 0, left: 0, cursor: "grab" }); // reset position and cursor
        }
    });
}

// Helper function to save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(taskList));
    localStorage.setItem('nextId', JSON.stringify(nextId));
}

// Helper function to add event listeners for delete buttons
function addEventListeners() {
    $(".delete-task").on("click", handleDeleteTask);
}