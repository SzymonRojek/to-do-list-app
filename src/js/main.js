
{
  let tasks = [
    { content: 'wypić piwo', done: false},
    { content: 'iść do pracy', done: false},
  ];

  let hideDoneTasks = false;
 
  const removeTask = taskIndex => {
    tasks = [
      ...tasks.slice(0, taskIndex),
      ...tasks.slice(taskIndex + 1),
    ]
    render();
  };

  const toggleTaskDone = taskIndex => {
    tasks = [
      ...tasks.slice(0, taskIndex),
    { ...tasks[taskIndex], done: !tasks[taskIndex].done },
      ...tasks.slice(taskIndex + 1),
    ]
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
        toggleTaskDone(taskIndex);
      });
    });
  };

  const renderTasks = () => {
    let tasksListHTMLContent = '';

    for (const task of tasks) {
      tasksListHTMLContent += `
        <li class="tasks__item">
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
    }

    document.querySelector('.js-tasks').innerHTML = tasksListHTMLContent;
  };

  


  const render = () => {
    renderTasks();
    bindToggleDoneEvents();
    bindRemoveEvents();
  };

  const onFormSubmit = e => {
    e.preventDefault();

    const newTaskElement = document.querySelector('.js-newTask');
    const newTaskContent = newTaskElement.value.trim();

    if (newTaskContent !== '') {
      addNewTask(newTaskContent);
      newTaskElement.value = '';
    }

    newTaskElement.focus();
  };

  const init = () => {
    render();
    console.log(hideDoneTasks);
    const form = document.querySelector('.js-form');

    form.addEventListener('submit', onFormSubmit);
  };

  init ();
}
