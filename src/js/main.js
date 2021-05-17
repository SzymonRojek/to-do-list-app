{
  const tasks = [];

  const addNewTask = newTaskContent => {
    tasks.push({
      content: newTaskContent, 
    });

    render();
  }

  const removeTask = taskIndex => {
    tasks.splice(taskIndex, 1);
    render();
  }

  const toggleTaskDone = taskIndex => {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    render();
  }

  const bindEvents = () => {
    const removeButtons = document.querySelectorAll('.js-remove');

    removeButtons.forEach( (removeButton, index) => {
      removeButton.addEventListener('click', () => {
        removeTask(index);
      });
    });

    const toggleDoneButtons = document.querySelectorAll('.js-done');

    toggleDoneButtons.forEach( (toggleDoneButton, index) => {
      toggleDoneButton.addEventListener('click', () => {
        toggleTaskDone(index);
      });
    });
  }

  const render = () => {
    let htmlString = '';

    for (const task of tasks) {
      htmlString += `
        <li class="list__item">
          <button class="list__button list__button--done js-done">
            ${task.done ? "✓" : ""}
          </button>
          <span class="list__task${task.done ? " list__task--done" : ""}">
            ${task.content}
          </span>
          <button class="list__button js-remove">
            🗑
          </button>
        </li>`;
    }

    document.querySelector('.js-tasks').innerHTML = htmlString;

    bindEvents();
  }

  const resetInput = newTask => {
    newTask.value = '';
    newTask.focus();
}

  const onFormSubmit = e => {
    e.preventDefault();
  
    const newTask = document.querySelector('.js-newTask');
    const newTaskContent = newTask.value.trim();
    
    resetInput(newTask);

    // if ( newTaskContent ) {    
    //   addNewTask(newTaskContent);
    // } 

    if ( !newTaskContent ) {
      return;
    }
    addNewTask(newTaskContent);
  }

  const init = () => {
    render();

    const form = document.querySelector('.js-form');

    form.addEventListener('submit', onFormSubmit);
  }

  init ();
}