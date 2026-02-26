function SaveNewTodo(todos, newTodo) {
  const updatedTodos = todos.map((t) => t);
  if (newTodo.title && newTodo.description) {
    console.log(newTodo);
    newTodo.id = todos.toSorted((a, b) => a.id - b.id)[todos.length - 1].id + 1;
    newTodo.createAt = new Date();
    newTodo.toggle = false;
    updatedTodos.push(newTodo);
    console.log(newTodo);
  }
  return updatedTodos;
}
export function onSaveNewTodo() {
  const title = localStorage.getItem("title");
  const description = localStorage.getItem("description");
  setTodos(SaveNewTodo(todos, { title, description }));
}

function SaveUpdatedTodo(todos, id, { title, description }) {
  const todo = todos.find((t) => t.id == id);
    todo.title = title
    todo.description = description
    todo.updatedAt = new Date()
  return todos;
}

export function onSaveUpdatedTodo() {
  const title = localStorage.getItem("title");
  const description = localStorage.getItem("description");
  if (title && description) {
    setTodos(
      SaveUpdatedTodo(todos, id),
    );
  }
}
