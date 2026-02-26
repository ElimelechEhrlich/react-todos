export function onSaveNewTodo(todos) {
  const updatedTodos = todos.map((t) => t);
  if (localStorage.title && localStorage.description) {
    const id = todos.toSorted((a, b) => a.id - b.id)[todos.length - 1].id + 1;
    const title = localStorage.title
    const description = localStorage.description
    const createAt = new Date();
    const toggle = false;
    const newTodo = {id, title, title, description, createAt, toggle}
    updatedTodos.push(newTodo);
  }
  return updatedTodos;
}


export function onSaveUpdatedTodo(todos, id ) {
  const todo = todos.find((t) => t.id == id);
    if (todo && localStorage.title && localStorage.description) {
      todo.title = localStorage.getItem("title")
      todo.description = localStorage.getItem("description")
      todo.updatedAt = new Date()
    }
  return todos;
}

