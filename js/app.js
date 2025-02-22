const taskManager = new TaskManager();

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    renderTasks(taskManager);
    setupEventListeners();
});

function setupEventListeners() {
    // Add task form submission
    document.getElementById('addTaskForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const newTask = {
            title: document.getElementById('taskTitle').value,
            description: document.getElementById('taskDescription').value,
            dueDate: document.getElementById('taskDueDate').value,
            priority: document.getElementById('taskPriority').value
        };
        taskManager.addTask(newTask);
        e.target.reset();
        renderTasks(taskManager);
    });

    // Search functionality
    document.getElementById('searchInput').addEventListener('input', (e) => {
        const filters = {
            searchTerm: e.target.value,
            priority: document.getElementById('priorityFilter').value,
            status: document.getElementById('statusFilter').value
        };
        renderTasks(taskManager, filters);
    });

    // Filter functionality
    document.getElementById('priorityFilter').addEventListener('change', (e) => {
        const filters = {
            searchTerm: document.getElementById('searchInput').value,
            priority: e.target.value,
            status: document.getElementById('statusFilter').value
        };
        renderTasks(taskManager, filters);
    });

    document.getElementById('statusFilter').addEventListener('change', (e) => {
        const filters = {
            searchTerm: document.getElementById('searchInput').value,
            priority: document.getElementById('priorityFilter').value,
            status: e.target.value
        };
        renderTasks(taskManager, filters);
    });
}

// Task actions
function editTask(taskId) {
    const task = taskManager.tasks.find(t => t.id === taskId);
    if (!task) return;

    // This is a simple implementation - you might want to create a modal or inline editing
    const newTitle = prompt('Edit task title:', task.title);
    const newDescription = prompt('Edit task description:', task.description);
    const newDueDate = prompt('Edit due date (YYYY-MM-DD):', task.dueDate);
    const newPriority = prompt('Edit priority (high/medium/low):', task.priority);

    if (newTitle && newDescription && newDueDate && newPriority) {
        taskManager.editTask(taskId, {
            title: newTitle,
            description: newDescription,
            dueDate: newDueDate,
            priority: newPriority
        });
        renderTasks(taskManager);
    }
}

function deleteTask(taskId) {
    if (confirm('Are you sure you want to delete this task?')) {
        taskManager.deleteTask(taskId);
        renderTasks(taskManager);
    }
}

function toggleTaskComplete(taskId) {
    taskManager.toggleTaskComplete(taskId);
    renderTasks(taskManager);
} 