A lightweight task management application built with vanilla JavaScript that helps users organize and track their tasks efficiently.

## Features

- **Task Management**
  - Add new tasks with title, description, due date, and priority
  - Edit existing tasks
  - Delete tasks
  - Mark tasks as complete/incomplete
  - Tasks automatically categorized into upcoming, overdue, and completed

- **Task Organization**
  - Three priority levels (High, Medium, Low)
  - Visual indicators for different priority levels
  - Automatic categorization based on due dates
  - Tasks persist across browser sessions using localStorage

- **Search and Filter**
  - Search tasks by title or description
  - Filter tasks by priority level
  - Filter by completion status
  - Real-time filtering and search results

## Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid)
- Vanilla JavaScript (ES6+)
- localStorage for data persistence

## Setup Instructions

1. Clone the repository:
 ⁠bash
git clone https://github.com/ishita3490/Task-management.git


⁠ 2. Navigate to the project directory:
 ⁠bash
cd task-manager


3. Open the project:
   - For local development, you can use a local server like Live Server in VS Code
   - Alternatively, simply open `index.html` in your web browser


## Usage Guide

### Adding a Task
1. Fill in the task details in the "Add New Task" form:
   - Title (required)
   - Description (required)
   - Due Date (required)
   - Priority Level (High/Medium/Low)
2. Click "Add Task" to create the task

### Managing Tasks
- **Edit**: Click the "Edit" button on a task to modify its details
- **Delete**: Click the "Delete" button to remove a task
- **Complete/Uncomplete**: Click the "Complete" button to toggle task completion

### Searching and Filtering
- Use the search bar to find tasks by title or description
- Use the priority filter dropdown to show tasks of specific priority
- Use the status filter to show completed or pending tasks

## Browser Support

The application supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technical Details

### Local Storage
- Tasks are automatically saved to browser's localStorage
- Data persists across browser sessions
- No server-side storage required
