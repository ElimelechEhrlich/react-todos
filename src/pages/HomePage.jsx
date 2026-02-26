import React, { useState } from 'react'
import ListTodos from '../comps/ListTodos'
import { useContext } from 'react'
import TodosContext from '../context/TodosContext'

export default function HomePage() {
    const { todos } = useContext(TodosContext)
    const [search, setSearch] = useState('')
  return (
    <div className='min-h-[90vh] flex flex-col items-center p-2'>
        <h2 className='text-2xl m-5 font-bold'>Home</h2>
        <div className='w-full p-3  flex justify-center'>
            <input onChange={e=> setSearch(e.target.value.toLowerCase())} className='border-2 border-gray-200 rounded-md p-4 w-[80%] ' placeholder='search todos' type="text" />
        </div>
        <ListTodos todos={todos.filter((todo) => todo.title.toLowerCase().includes(search))}/>
    </div>
  )
}
