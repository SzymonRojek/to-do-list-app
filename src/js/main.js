
{
  let tasks = [];

  let hideDoneTasks = false;
 
  const removeTask = taskIndex => {
    tasks = [
      ...tasks.slice(0, taskIndex),
      ...tasks.slice(taskIndex + 1),
    ];
    render();
  };

  const toggleDoneTask = taskIndex => {
    tasks = [
      ...tasks.slice(0, taskIndex),
    { ...tasks[taskIndex], done: !tasks[taskIndex].done },
      ...tasks.slice(taskIndex + 1),
    ];
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
    let tasksListHTMLContent = '';

    for (const task of tasks) {
      tasksListHTMLContent += `
        <li class="tasks__item${ task.done && hideDoneTasks ? " tasks__item--toggleHidden" : "" }">
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
    };

    document.querySelector('.js-tasks').innerHTML = tasksListHTMLContent;
  };

  const renderButtons = () => {
    let buttonsHTMLContent = '';

      if ( tasks.length > 0) {
        buttonsHTMLContent += `
          <button class="section__button js-hideButton"
            ${ tasks.every( ({ done }) => !done) ? "disabled" : "" } 
          >
            ${ hideDoneTasks ? 'Pokaż' : 'Ukryj' } ukończone
          </button>
          <button class="section__button js-doneButton" 
            ${ tasks.every( ({ done }) => done) ? "disabled" : "" } 
          >
            Ukończ wszystkie
          </button>
        `;
      };
  
    document.querySelector('.js-buttons').innerHTML = buttonsHTMLContent;
  };

  const toggleHideDoneTaskClick = () => {
    hideDoneTasks = !hideDoneTasks;
    render();
  };

  const bindHideEvents = () => {
    const hideButton = document.querySelector('.js-hideButton');
      if ( hideButton ) {
        hideButton.addEventListener('click', () => {
          toggleHideDoneTaskClick();
        });
      };
  };

  const setAllDoneTasks = array => {
    array.map( task => task.done = true);
    render();
  };

  const bindAllDoneTasks = () => {
    const doneButton = document.querySelector('.js-doneButton');
      if ( doneButton ) {
        doneButton.addEventListener('click', () => {
          setAllDoneTasks(tasks);
        });
      };
  };

  const render = () => {
    renderTasks();
    renderButtons();
    bindToggleDoneEvents();
    bindRemoveEvents();
    bindHideEvents();
    bindAllDoneTasks();
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