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
  navigate("/");
  localStorage.clear();
}

function SaveUpdatedTodo(todos, id, { title, description }) {
  const updatedTodos = todos.filter((t) => !t.id === id);

    newTodo.title = title
    newTodo.description = description
    updatedTodos.push(newTodo);
    console.log(newTodo);
  
  return updatedTodos;
}

export function onSaveUpdatedTodo() {
  const title = localStorage.getItem("title");
  const description = localStorage.getItem("description");
  if (title && description) {
    setTodos(
      SaveUpdatedTodo(todos, { id, title, description, createAt, toggle }),
    );
    navigate("/");
    localStorage.clear();
  }
}
