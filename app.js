const socket = io();

// Sample function to fetch tasks
async function fetchTasks(tasksUrl = '/api/tasks') {
    try {
        console.log('Fetching tasks from:', tasksUrl);
        const response = await fetch(tasksUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const tasks = await response.json();
        console.log('Tasks:', tasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
}

fetchTasks();