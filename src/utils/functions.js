
const id = 'todo-tasks';

export const readTasks = () => {
    let tasks = localStorage.getItem(id);
    return tasks ? JSON.parse(tasks) : [];
}

export const updateTasks = (tasks) => {
    localStorage.setItem(id, JSON.stringify(tasks));
}

export const clearTasks = () => localStorage.removeItem(id);

export const removeTask = (time) => {
    let tasks = readTasks();
    updateTasks(tasks.filter((t) => t.at !== parseInt(time)));
}

export const addTask = (task) => {
    let tasks = readTasks();
    tasks.push(task);
    updateTasks(tasks);
}