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

// Remove Tic Tac Toe game logic
document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    }
    const gameBoard = document.getElementById('game-board');
    const resetButton = document.getElementById('resetButton');

    if (gameBoard) {
        gameBoard.remove(); // Remove the game board element if it exists
    }
    if (resetButton) {
        resetButton.remove(); // Remove the reset button if it exists
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Remove the Tic Tac Toe C Code Section
    const tictactoeSection = document.getElementById('tictactoe-code');
    if (tictactoeSection) {
        tictactoeSection.remove();
    }

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('#main-navbar a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Back to Top Button Functionality
    const backToTopButton = document.createElement('button');
    backToTopButton.id = 'backToTop';
    backToTopButton.textContent = '↑';
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.right = '20px';
    backToTopButton.style.display = 'none';
    backToTopButton.style.backgroundColor = '#007bff';
    backToTopButton.style.color = 'white';
    backToTopButton.style.border = 'none';
    backToTopButton.style.borderRadius = '50%';
    backToTopButton.style.width = '50px';
    backToTopButton.style.height = '50px';
    backToTopButton.style.cursor = 'pointer';
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Dynamic Greeting Message Based on Time
    const greeting = document.createElement('p');
    const hours = new Date().getHours();
    if (hours < 12) {
        greeting.textContent = 'Good Morning! Start learning full-stack development today.';
    } else if (hours < 18) {
        greeting.textContent = 'Good Afternoon! Keep building your skills.';
    } else {
        greeting.textContent = 'Good Evening! Explore our free resources.';
    }
    document.querySelector('header').appendChild(greeting);

    // Real-Time Clock
    const clock = document.createElement('p');
    clock.id = 'liveClock';
    clock.style.fontWeight = 'bold';
    clock.style.marginTop = '10px';
    document.querySelector('header').appendChild(clock);

    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        clock.textContent = `Current Time: ${timeString}`;
    }
    setInterval(updateClock, 1000);
    updateClock();

    // Interactive To-Do List with Task Counter
    const todoCounter = document.createElement('p');
    todoCounter.id = 'todoCounter';
    todoCounter.style.marginTop = '10px';
    document.querySelector('#todoForm').appendChild(todoCounter);

    function updateTaskCounter() {
        const todoList = document.getElementById('todoList');
        const taskCount = todoList.children.length;
        todoCounter.textContent = `Total Tasks: ${taskCount}`;
    }

    document.getElementById('todoForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const task = document.getElementById('todoInput').value.trim();
        if (task !== '') {
            addTask(task);
            document.getElementById('todoInput').value = '';
        }
    });

    function addTask(task) {
        const todoList = document.getElementById('todoList');
        const listItem = document.createElement('li');
        listItem.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.marginLeft = '10px';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(listItem);
            updateTaskCounter();
        });

        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
        updateTaskCounter();
    }

    // Navbar Clickable Logo Redirect
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', () => {
            window.location.href = 'index.html'; // Redirects to the main homepage
        });
    }
});
