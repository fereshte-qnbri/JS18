function populateTodoList(todos) {
  let list = document.getElementById('todo-list');
  list.innerHTML = ''; 
  todos.forEach(todo => {
    const li = document.createElement('li');
    li.textContent = todo.task;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        li.style.textDecoration = 'line-through';
      } else {
        li.style.textDecoration = 'none';
      }
    });
    li.prepend(checkbox);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      li.remove();
    });
    li.appendChild(deleteButton);

    list.appendChild(li);
  });
}
const todoListContainer = document.getElementById('todo-list');
const newTodoInput = document.getElementById('new-todo-input');
const addTodoButton = document.getElementById('add-todo-button');

let todos = [
  { task: 'Wash the dishes', completed: false },
  { task: 'Do the shopping', completed: false },
];

populateTodoList(todos);
addTodoButton.addEventListener('click', addNewTodo);

function addNewTodo(event) {
  event.preventDefault();
  const newTodoText = newTodoInput.value.trim();
  if (newTodoText !== '') {
    const newTodo = { task: newTodoText, completed: false };
    todos.push(newTodo);
    populateTodoList(todos);
    newTodoInput.value = '';
  }
}

// OPTIONAL
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  todos = todos.filter(todo => !todo.completed); 
  populateTodoList(todos); 
}
const deleteAllCompletedBtn = document.getElementById('delete-completed-btn'); 
deleteAllCompletedBtn.addEventListener('click', deleteAllCompletedTodos);