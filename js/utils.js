const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
};

const createTaskElement = (task, taskManager) => {
    const taskElement = document.createElement('div');
    taskElement.className = `task-card priority-${task.priority}`;
    taskElement.innerHTML = `
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <p>Due: ${formatDate(task.dueDate)}</p>
        <p>Priority: ${task.priority}</p>
        <div class="task-actions">
            <button class="edit-btn" onclick="editTask(${task.id})">Edit</button>
            <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
            <button class="complete-btn" onclick="toggleTaskComplete(${task.id})">
                ${task.completed ? 'Undo' : 'Complete'}
            </button>
        </div>
    `;
    return taskElement;
};

const renderTasks = (taskManager, filters = {}) => {
    const upcomingTasksList = document.getElementById('upcomingTasksList');
    const overdueTasksList = document.getElementById('overdueTasksList');
    const completedTasksList = document.getElementById('completedTasksList');

    upcomingTasksList.innerHTML = '';
    overdueTasksList.innerHTML = '';
    completedTasksList.innerHTML = '';

    // Get filtered tasks
    const filteredTasks = taskManager.getTasks(filters);

    // Separate filtered tasks into categories
    const today = new Date();
    const upcoming = filteredTasks.filter(task => 
        !task.completed && new Date(task.dueDate) >= today
    );
    const overdue = filteredTasks.filter(task => 
        !task.completed && new Date(task.dueDate) < today
    );
    const completed = filteredTasks.filter(task => 
        task.completed
    );

    // Render filtered tasks in their respective containers
    upcoming.forEach(task => {
        upcomingTasksList.appendChild(createTaskElement(task, taskManager));
    });

    overdue.forEach(task => {
        overdueTasksList.appendChild(createTaskElement(task, taskManager));
    });

    completed.forEach(task => {
        completedTasksList.appendChild(createTaskElement(task, taskManager));
    });
}; 