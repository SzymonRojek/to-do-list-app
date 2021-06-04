
{
  let tasks = [
    {content: 'siema', done: false}
  ];

  let hideDoneTasks = false;
 
  const removeTask = taskIndex => {
    tasks = [
      ...tasks.slice(0, taskIndex),
      ...tasks.slice(taskIndex + 1),
    ];

    render();
  };

  const toggleDoneTask = taskIndex => {
   tasks = tasks.map( (task, index) => taskIndex === index ? { ...task, done: !task.done } : task)

    render();
  };

  const addNewTask = newTaskContent => {
    tasks = [
      ...tasks,
      { content: newTaskContent },
    ];

    render();
  };

  const bindRemoveEvents = () => {
    const removeButtons = document.querySelectorAll('.js-removeButton');

    removeButtons.forEach( (removeButton, taskIndex) => {
      removeButton.addEventListener('click', () => {
        removeTask(taskIndex);
      });
    });
  };

  const bindToggleDoneEvents = () => {
    const toggleDoneButtons = document.querySelectorAll('.js-toggleDone');

    toggleDoneButtons.forEach( (toggleDoneButton, taskIndex) => {
      toggleDoneButton.addEventListener('click', () => {
        toggleDoneTask(taskIndex);
      });
    });
  };

  const renderTasks = () => {
    const taskToHTML = task => `
        <li class="tasks__item${ task.done && hideDoneTasks ? " tasks__item--hidden" : "" }">
          <button class="tasks__button tasks__button--toggleDone js-toggleDone">
            ${ task.done ? "✓" : "" }
          </button>
          <span class="tasks__singleTask${ task.done ? " tasks__singleTask--done" : "" }">
            ${ task.content } 
          </span>
          <button class="tasks__button js-removeButton">
            🗑
          </button>
        </li>`; 

    const tasksElement = document.querySelector('.js-tasks');
    tasksElement.innerHTML = tasks.map(taskToHTML).join('');
  };

  const renderButtons = () => {
    const buttonsElement = document.querySelector('.js-buttons');

    if (!tasks.length) {
      buttonsElement.innerHTML = '';
      return;
    }

    buttonsElement.innerHTML = `
      <button class="buttons__button js-toggleHideDoneTasks"
        ${ tasks.every( ({ done }) => !done) ? "disabled" : "" } 
      >
        ${ hideDoneTasks ? 'Pokaż' : 'Ukryj' } ukończone
      </button>
      <button class="buttons__button js-markAllDone" 
        ${ tasks.every( ({ done }) => done) ? "disabled" : "" } 
      >
        Ukończ wszystkie
      </button>
    `;

  };

  const toggleHideDoneTasks = () => {
    hideDoneTasks = !hideDoneTasks;

    render();
  };

  const markAllTasksDone = () => {
    tasks = tasks.map( task => ({
       ...task,
       done: true,
     }));
 
     render();
  };
 
  const bindButtonsEvents = () => {
    
    const toggleHideDoneTasksButton = document.querySelector('.js-toggleHideDoneTasks');

      if (toggleHideDoneTasksButton) {
        toggleHideDoneTasksButton.addEventListener('click', toggleHideDoneTasks);
      }
 
    const markAllDoneButton = document.querySelector('.js-markAllDone');

      if (markAllDoneButton) {
        markAllDoneButton.addEventListener('click', markAllTasksDone);
      }
  };

  const render = () => {
    renderTasks();
    bindRemoveEvents();
    bindToggleDoneEvents();

    renderButtons();
    bindButtonsEvents();
  };

  const onFormSubmit = e => {
    e.preventDefault();

    const newTaskElement = document.querySelector('.js-newTask');
    const newTaskContent = newTaskElement.value.trim();

      if (newTaskContent !== '') {
        addNewTask(newTaskContent);
        newTaskElement.value = '';
      };
    newTaskElement.focus();
  };

  const init = () => {
    render();

    const form = document.querySelector('.js-form');
    form.addEventListener('submit', onFormSubmit);
  };

  init ();
}