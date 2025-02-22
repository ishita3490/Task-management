class TaskManager {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    }

    addTask(task) {
        this.tasks.push({
            id: Date.now(),
            ...task,
            completed: false,
            createdAt: new Date()
        });
        this.saveTasks();
    }

    deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.saveTasks();
    }

    editTask(taskId, updatedTask) {
        this.tasks = this.tasks.map(task => 
            task.id === taskId ? { ...task, ...updatedTask } : task
        );
        this.saveTasks();
    }

    toggleTaskComplete(taskId) {
        this.tasks = this.tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        this.saveTasks();
    }

    getTasks(filters = {}) {
        let filteredTasks = [...this.tasks];

        if (filters.searchTerm) {
            const searchTerm = filters.searchTerm.toLowerCase().trim();
            filteredTasks = filteredTasks.filter(task =>
                task.title.toLowerCase().includes(searchTerm) ||
                task.description.toLowerCase().includes(searchTerm)
            );
        }

        if (filters.priority && filters.priority !== 'all') {
            filteredTasks = filteredTasks.filter(task => 
                task.priority === filters.priority
            );
        }

        if (filters.status && filters.status !== 'all') {
            if (filters.status === 'completed') {
                filteredTasks = filteredTasks.filter(task => task.completed);
            } else if (filters.status === 'pending') {
                filteredTasks = filteredTasks.filter(task => !task.completed);
            }
        }

        return filteredTasks;
    }

    getUpcomingTasks() {
        const today = new Date();
        return this.tasks.filter(task => 
            !task.completed && 
            new Date(task.dueDate) >= today
        );
    }

    getOverdueTasks() {
        const today = new Date();
        return this.tasks.filter(task => 
            !task.completed && 
            new Date(task.dueDate) < today
        );
    }

    getCompletedTasks() {
        return this.tasks.filter(task => task.completed);
    }

    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
} 