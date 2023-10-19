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
  tasksEl.innerHTML = '';
  getTasks();
  if (tasksObj.length == 0) {
    //if there is no task added in the page
    tasksEl.innerHTML = '<p>No Task added. Please add a task.</>';
  }

  console.log(tasksObj);
  tasksObj.forEach(function (task, index) {
    let taskItem = document.createElement('div');
    let taskContent = document.createElement('div');
    let taskIcons = document.createElement('div');

    taskItem.classList.add('task');
    taskContent.classList.add('task-content');
    taskIcons.classList.add('task-icons');

    taskContent.innerHTML = `
      <p class="task-date">${task.date}</p>
      <span class="task-index">${index + 1}</span>
      <p class="task-text">${task.text}</p>
      <p class="hidden">${task.completed}</p>  
      `;
    taskIcons.innerHTML = `
      <i class="fas fa-check" id="${index}" 
      onclick="completeTask(this.id)"></i>

      <i class="fas fa-edit" id="${index}" 
      onclick="editTask(this.id)"></i>

      <i class="fas fa-trash-alt" id="${index}" 
      onclick="deleteTask(this.id)"></i>
      `;

    taskItem.appendChild(taskContent);
    taskItem.appendChild(taskIcons);

    if (tasksObj.length != 0) {
      tasksEl.appendChild(taskItem);
      // console.log(tasksEl.childElementCount);
      console.log(taskItem.firstChild.children[3].innerText);
      const taskStatus = taskItem.firstChild.children[3].innerText;

      if (taskStatus == 'true') {
        taskItem.classList.add('completed');
      }
    }
  });

  //show total number of tasks
  tasksObj.length > 1
    ? (totalTask.innerHTML = `${tasksObj.length} Tasks`)
    : (totalTask.innerHTML = `${tasksObj.length} Task`);
}

//Delete a task
function deleteTask(index) {
  const confirmDelete = confirm('Delete this task?');
  if (confirmDelete) {
    getTasks();
    tasksObj.splice(index, 1); // the first argument is the id the second one is the number of textes to delete
    localStorage.setItem('tasks', JSON.stringify(tasksObj)); //save in the local storage
    showTasks();
  }
}

//delete all tasks
clearBtn.addEventListener('click', () => {
  const confirmDelete = confirm('Do you want to delete all tasks?');
  if (confirmDelete) {
    localStorage.clear();
    showTasks();
  }
});

//Edit a task
function editTask(index) {
  taskForm.reset();
  showForm();

  getTasks();
  // console.log(tasksObj[index].text);
  // console.log(tasksObj[index].date);

  taskDate.value = tasksObj[index].date;
  taskText.value = tasksObj[index].text;

  taskText.focus();
  tasksObj.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasksObj));
  showTasks();
}

//Set task to completed
function completeTask(index) {
  tasksEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-check')) {
      getTasks();

      console.log(tasksObj[index].text);
      console.log(tasksObj[index].completed);

      tasksObj[index].completed = true;
      localStorage.setItem('tasks', JSON.stringify(tasksObj));
      showTasks();
    }
  });
}

showTasks();
