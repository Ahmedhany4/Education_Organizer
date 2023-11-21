
// let timer;
// let seconds = 0;
// let minutes = 0;
// let hours = 0;


// document.addEventListener('DOMContentLoaded', () => {
//     // Load tasks from local storage
//     const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     const taskList = document.getElementById('tasks');

//     savedTasks.forEach(task => {
//         const newTask = createTaskElement(task);
//         taskList.appendChild(newTask);
//     });
// });

// function startTimer() {
//     timer = setInterval(updateTimer, 1000);
// }

// function stopTimer() {
//     clearInterval(timer);
// }

// function resetTimer() {
//     clearInterval(timer);
//     seconds = 0;
//     minutes = 0;
//     hours = 0;
//     updateTimerDisplay();
// }

// function updateTimer() {
//     seconds++;
//     if (seconds === 60) {
//         seconds = 0;
//         minutes++;
//         if (minutes === 60) {
//             minutes = 0;
//             hours++;
//         }
//     }

//     updateTimerDisplay();
// }

// function updateTimerDisplay() {
//     const formattedTime = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
//     document.getElementById('timer').innerText = formattedTime;
// }

// function formatTime(time) {
//     return time < 10 ? '0' + time : time;
// }

// function completeTask(taskElement ) {
//   let ul = taskElement.parentElement ;
//     taskElement.classList.toggle('completedTask');
//     ul.classList.toggle('complete');
//     saveTasks();
// }

// function addTask() {
//     const newTaskInput = document.getElementById('newTask');
//     const taskList = document.getElementById('tasks');
//     const newTaskText = newTaskInput.value.trim();

//     if (newTaskText !== '') {
//         const newTask = createTaskElement(newTaskText);
//         taskList.appendChild(newTask);
//         newTaskInput.value = '';

//         // Save tasks to local storage
//         saveTasks();
//     }
// }

// function createTaskElement(taskText) {
//     const newTask = document.createElement('li');
//     newTask.classList.add('task');
//     newTask.innerHTML = `
//         <span class="taskText">${taskText}</span>
//         <button class="completeBtn" onclick="completeTask(this.parentElement.querySelector('.taskText'))">Complete</button>
//         <button class="updateBtn" onclick="updateTask(this.parentElement.querySelector('.taskText'))">Update</button>
//         <button class="deleteBtn" onclick="deleteTask(this.parentElement)">Delete</button>
//     `;
//     return newTask;
// }

// function updateTask(taskElement) {
//     const updatedText = prompt('Enter updated task:', taskElement.innerText);
//     if (updatedText !== null) {
//         taskElement.innerText = updatedText;
//         saveTasks();
//     }
// }

// function deleteTask(taskElement) {
//     taskElement.remove();
//     saveTasks();
// }




// function saveTasks() {
//   const taskList = document.getElementById('tasks');
//   const tasks = Array.from(taskList.children).map(taskElement => {
//       return {
//           text: taskElement.querySelector('.taskText').innerText,
//           completed: taskElement.classList.contains('completedTask')
//       };
//   });

//   // Save tasks to local storage
//   localStorage.setItem('tasks', JSON.stringify(tasks));
// }


// function loadTasksFromLocalStorage() {
//   // Load tasks from local storage
//   const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//   const taskList = document.getElementById('tasks');

//   savedTasks.forEach(task => {
//       const newTask = createTaskElement(task.text);
//       taskList.appendChild(newTask);

//       // Apply the completed status
//       if (task.completed) {
//           completeTask(newTask.querySelector('.taskText'));
//       }
//   });
// }
//! -----------------------------------------------------------------------





let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

document.addEventListener('DOMContentLoaded', () => {
    loadTasksFromLocalStorage();
});

function startTimer() {
    timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateTimerDisplay();
}

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    updateTimerDisplay();
}

function updateTimerDisplay() {
    const formattedTime = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
    document.getElementById('timer').innerText = formattedTime;
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function completeTask(taskElement) {
    let ul = taskElement.parentElement;
    taskElement.classList.toggle('completedTask');
    ul.classList.toggle('complete');
    saveTasks();
}

function addTask() {
    const newTaskInput = document.getElementById('newTask');
    const taskList = document.getElementById('tasks');
    const newTaskText = newTaskInput.value.trim();

    if (newTaskText !== '') {
        const newTask = createTaskElement(newTaskText);
        taskList.appendChild(newTask);
        newTaskInput.value = '';

        // Save tasks to local storage
        saveTasks();
    }
}

function createTaskElement(taskText) {
    const newTask = document.createElement('li');
    newTask.classList.add('task');
    newTask.innerHTML = `
        <span class="taskText">${taskText}</span>
        <button class="completeBtn" onclick="completeTask(this.parentElement.querySelector('.taskText'))">Complete</button>
        <button class="updateBtn" onclick="updateTask(this.parentElement.querySelector('.taskText'))">Update</button>
        <button class="deleteBtn" onclick="deleteTask(this.parentElement)">Delete</button>
    `;
    return newTask;
}

function updateTask(taskElement) {
    const updatedText = prompt('Enter updated task:', taskElement.innerText);
    if (updatedText !== null) {
        taskElement.innerText = updatedText;
        saveTasks();
    }
}

function deleteTask(taskElement) {
    taskElement.remove();
    saveTasks();
}

function saveTasks() {
    const taskList = document.getElementById('tasks');
    const tasks = Array.from(taskList.children).map(taskElement => {
        return {
            text: taskElement.querySelector('.taskText').innerText,
            completed: taskElement.classList.contains('completedTask')
        };
    });

    // Save tasks to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
    // Load tasks from local storage
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('tasks');

    savedTasks.forEach(task => {
        const newTask = createTaskElement(task.text);
        taskList.appendChild(newTask);

        // Apply the completed status
        if (task.completed) {
            completeTask(newTask.querySelector('.taskText'));
        }
    });
}
