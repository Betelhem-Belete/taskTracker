const addTaskDiv = document.querySelector('.add-task'),
  plusIcon = document.querySelector('.fa-plus'),
  closeIcon = document.querySelector('.fa-times'),
  taskFormDiv = document.querySelector('.task-form'),
  taskForm = document.querySelector('form'),
  tasksEl = document.querySelector('.tasks'),
  totalTask = document.querySelector('.total-task');

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

// Show Form
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
