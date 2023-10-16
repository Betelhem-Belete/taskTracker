const addTaskDiv = document.querySelector('.add-task'),
  plusIcon = document.querySelector('.fa-plus'),
  closeIcon = document.querySelector('.fa-times'),
  taskFormDiv = document.querySelector('.task-form'),
  taskForm = document.querySelector('form'),
  tasksEl = document.querySelector('.tasks');
 const totalTask = document.querySelector('.total-task');

const taskDate = document.getElementById('task-date'),
  taskText = document.getElementById('task-text'),
  addTaskBtn = document.getElementById('task-btn'),
  clearBtn = document.getElementById('clear-btn');

addTaskDiv.addEventListener('click', formDisplay);

//Handle form display
function formDisplay(e) {
  if (e.target.classList.contains('fa-plus')) {
    showForm();
  }

  if (e.target.classList.contains('fa-times')) {
    hideForm();
  }
}

//Show Form
function showForm() {
  taskFormDiv.style.top = '0';
  plusIcon.style.display = 'none';
  closeIcon.style.display = 'block';
}

//hide Form
function hideForm() {
  taskFormDiv.style.top = '-100%';
  plusIcon.style.display = 'block';
  closeIcon.style.display = 'none';
  taskForm.reset();
}

//Get task from local storage
function getTasks() {
  let tasks = localStorage.getItem('tasks');
  if (tasks == null) {
    tasksObj = [];
  } else {
    tasksObj = JSON.parse(tasks);
  }
}

//add event listener on task btn
addTaskBtn.addEventListener('click', (e) => {
  e.preventDefault();

  //validate input
  if (taskDate.value == '' || taskText.value == '') {
    return alert('Please add task date and task');
  }
  //get tasks from local storage
  getTasks();

  let myObj = {
    date: taskDate.value,
    text: taskText.value,
    completed: false,
  };

  tasksObj.push(myObj);

  // Save to the local storage
  localStorage.setItem('tasks', JSON.stringify(tasksObj));

  //show task on the page
  showTasks();
  hideForm();
});

//show task function
function showTasks() {
  getTasks();
  if (tasksObj.length == 0) {
    //if there is no task added in the page
    tasksEl.innerHTML = '<p>No Task added. Please add a task.</>';
  }
}
