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

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.style.marginLeft = '10px';
        completeButton.addEventListener('click', () => {
            listItem.style.textDecoration = 'line-through';
            listItem.style.color = 'gray';
            completeButton.disabled = true;
            completedTasks++;
            updateCompletedTasksCounter();
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.marginLeft = '10px';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(listItem);
            updateTaskCounter();
        });

        listItem.appendChild(completeButton);
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

    // Real-Time Weather Updates
    const weatherContainer = document.createElement('div');
    weatherContainer.id = 'weatherContainer';
    weatherContainer.style.marginTop = '20px';
    weatherContainer.style.textAlign = 'center';
    document.querySelector('header').appendChild(weatherContainer);

    async function fetchWeather() {
        try {
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=YOUR_API_KEY');
            const data = await response.json();
            weatherContainer.textContent = `Current Weather in ${data.name}: ${data.weather[0].description}, ${data.main.temp}°C`;
        } catch (error) {
            weatherContainer.textContent = 'Unable to fetch weather data.';
        }
    }
    fetchWeather();

    // Daily Motivational Quote
    const quoteContainer = document.createElement('div');
    quoteContainer.id = 'quoteContainer';
    quoteContainer.style.marginTop = '20px';
    quoteContainer.style.textAlign = 'center';
    quoteContainer.style.fontStyle = 'italic';
    document.querySelector('header').appendChild(quoteContainer);

    async function fetchQuote() {
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            quoteContainer.textContent = `"${data.content}" - ${data.author}`;
        } catch (error) {
            quoteContainer.textContent = 'Unable to fetch quote.';
        }
    }
    fetchQuote();

    // Task Completion Tracker
    const completedTasksCounter = document.createElement('p');
    completedTasksCounter.id = 'completedTasksCounter';
    completedTasksCounter.style.marginTop = '10px';
    completedTasksCounter.style.fontWeight = 'bold';
    document.querySelector('#todoForm').appendChild(completedTasksCounter);

    let completedTasks = 0;

    function updateCompletedTasksCounter() {
        completedTasksCounter.textContent = `Completed Tasks: ${completedTasks}`;
    }

    updateCompletedTasksCounter();

    // Voice Command Feature for To-Do List
    const voiceCommandButton = document.createElement('button');
    voiceCommandButton.textContent = '🎤 Voice Command';
    voiceCommandButton.style.marginTop = '10px';
    voiceCommandButton.style.padding = '10px 20px';
    voiceCommandButton.style.backgroundColor = '#007bff';
    voiceCommandButton.style.color = 'white';
    voiceCommandButton.style.border = 'none';
    voiceCommandButton.style.borderRadius = '5px';
    voiceCommandButton.style.cursor = 'pointer';
    document.querySelector('#todoForm').appendChild(voiceCommandButton);

    voiceCommandButton.addEventListener('click', () => {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'en-US';
        recognition.start();

        recognition.onresult = (event) => {
            const command = event.results[0][0].transcript.toLowerCase();
            if (command.includes('add task')) {
                const task = command.replace('add task', '').trim();
                if (task) {
                    addTask(task);
                } else {
                    alert('Please specify a task to add.');
                }
            } else if (command.includes('clear tasks')) {
                document.getElementById('todoList').innerHTML = '';
                updateTaskCounter();
                completedTasks = 0;
                updateCompletedTasksCounter();
            } else {
                alert('Command not recognized. Try saying "Add task [task name]" or "Clear tasks".');
            }
        };

        recognition.onerror = () => {
            alert('Voice recognition failed. Please try again.');
        };
    });

    // Theme Switcher
    const themeSwitcher = document.createElement('select');
    themeSwitcher.id = 'themeSwitcher';
    themeSwitcher.style.marginTop = '20px';
    themeSwitcher.style.padding = '10px';
    themeSwitcher.style.borderRadius = '5px';
    themeSwitcher.style.border = '1px solid #ccc';
    themeSwitcher.innerHTML = `
        <option value="default">Default Theme</option>
        <option value="dark">Dark Theme</option>
        <option value="light">Light Theme</option>
    `;
    document.body.insertBefore(themeSwitcher, document.body.firstChild);

    themeSwitcher.addEventListener('change', (event) => {
        const theme = event.target.value;
        if (theme === 'dark') {
            document.body.style.backgroundColor = '#121212';
            document.body.style.color = '#ffffff';
        } else if (theme === 'light') {
            document.body.style.backgroundColor = '#f9f9f9';
            document.body.style.color = '#333333';
        } else {
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
        }
    });
});
