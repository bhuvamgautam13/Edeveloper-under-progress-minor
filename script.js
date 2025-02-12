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

document.addEventListener('DOMContentLoaded', () => {
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

    function handleCellClick(event) {
        const cellIndex = Array.from(gameBoard.children).indexOf(event.target);
        if (board[cellIndex] !== '' || !gameActive) {
            return;
        }
        board[cellIndex] = currentPlayer;
        event.target.textContent = currentPlayer;
        checkResult();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    function checkResult() {
        let roundWon = false;
        for (let i = 0; i < winningConditions.length; i++) {
            const [a, b, c] = winningConditions[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                roundWon = true;
                break;
            }
        }
        if (roundWon) {
            gameActive = false;
            alert(`Player ${currentPlayer} has won!`);
            return;
        }
        if (!board.includes('')) {
            gameActive = false;
            alert('Game is a draw!');
        }
    }

    function resetGame() {
        board = ['', '', '', '', '', '', '', '', ''];
        gameActive = true;
        currentPlayer = 'X';
        Array.from(gameBoard.children).forEach(cell => cell.textContent = '');
    }

    gameBoard.addEventListener('click', handleCellClick);
    resetButton.addEventListener('click', resetGame);

    // Initialize game board
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        gameBoard.appendChild(cell);
    }
});
