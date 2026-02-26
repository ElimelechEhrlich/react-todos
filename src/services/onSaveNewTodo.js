export function onSaveNewTodo(todos, newTodo) {
    const updatedTodos = todos.map(t => t)
    if (newTodo.title && newTodo.description) {
        console.log(newTodo);
        
        newTodo.id = todos.toSorted((a, b) => a.id - b.id)[todos.length - 1].id + 1;        
        newTodo.createAt = new Date()
        newTodo.toggle = false
        updatedTodos.push(newTodo)
        console.log(newTodo);
    }
    return updatedTodos
}