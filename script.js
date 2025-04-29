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
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Back to Top Button
    const backToTopButton = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'flex';
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

    // Tic Tac Toe Game Logic
    const gameBoard = document.getElementById('game-board');
    const resetButton = document.getElementById('resetButton');
    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let gameActive = true;

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Function to create the game board
    function createGameBoard() {
        gameBoard.innerHTML = ''; // Clear the board
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.index = i;
            cell.addEventListener('click', handleCellClick);
            gameBoard.appendChild(cell);
        }
    }

    // Function to handle cell clicks
    function handleCellClick(event) {
        const cell = event.target;
        const cellIndex = cell.dataset.index;

        if (board[cellIndex] !== '' || !gameActive) {
            return;
        }

        board[cellIndex] = currentPlayer;
        cell.textContent = currentPlayer;

        if (checkWin()) {
            gameActive = false;
            alert(`Player ${currentPlayer} wins!`);
            return;
        }

        if (board.every(cell => cell !== '')) {
            gameActive = false;
            alert('It\'s a draw!');
            return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    // Function to check for a win
    function checkWin() {
        return winningConditions.some(condition => {
            const [a, b, c] = condition;
            return board[a] && board[a] === board[b] && board[a] === board[c];
        });
    }

    // Function to reset the game
    function resetGame() {
        board = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'X';
        gameActive = true;
        createGameBoard();
    }

    // Initialize the game
    createGameBoard();
    resetButton.addEventListener('click', resetGame);
});

// Back to Top Button
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
});
