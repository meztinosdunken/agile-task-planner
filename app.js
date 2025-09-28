const socket = io();

// Sample function to fetch tasks
async function fetchTasks() {
    const response = await fetch('/api/tasks');
    const tasks = await response.json();
    console.log('Tasks:', tasks);
}

fetchTasks();
