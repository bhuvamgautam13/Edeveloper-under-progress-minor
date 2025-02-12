document.getElementById('alertButton').addEventListener('click', function() {
    alert('Button was clicked!');
});

document.getElementById('greetingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const greetingMessage = `Hello, ${name}! Welcome to our site.`;
    document.getElementById('greetingMessage').textContent = greetingMessage;
});

document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const task = document.getElementById('todoInput').value;
    addTask(task);
    document.getElementById('todoInput').value = '';
});

function addTask(task) {
    const todoList = document.getElementById('todoList');
    const listItem = document.createElement('li');
    listItem.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        todoList.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
}
