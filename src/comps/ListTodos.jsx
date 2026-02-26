import React from 'react'
import TodoCard from './TodoCard';

export default function ListTodos({ todos }) {
    console.log(todos);
    
    if (!todos || !Array.isArray(todos) || todos.length === 0) return <>not items</>
    return (
    <div className='flex flex-wrap gap-3 justify-between w-[80%]'>
        {todos.map(todo => (
            <TodoCard  key={todo.id} todo={todo}/>
        ))}
    </div>
  )
}
