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
document.addEventListener('DOMContentLoaded', () => {
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
});

// Interactive To-Do List
document.getElementById('todoForm').addEventListener('submit', function(event) {
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
    deleteButton.addEventListener('click', () => {
        todoList.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
}

// Form Greeting Interaction
document.getElementById('greetingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    if (name) {
        const greetingMessage = `Hello, ${name}! Welcome to our site.`;
        document.getElementById('greetingMessage').textContent = greetingMessage;
    }
});

// Navbar Clickable Logo Redirect
document.querySelector('.logo').addEventListener('click', () => {
    window.location.href = 'index.html'; // Redirects to the main homepage
});


// Dynamic greeting message
document.addEventListener('DOMContentLoaded', () => {
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
})})
