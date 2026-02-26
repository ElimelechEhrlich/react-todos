import { useContext } from 'react'
import { onSaveNewTodo } from '../services/onSaveNewTodo'
import TodosContext from '../context/TodosContext'
import { useNavigate } from 'react-router'

export default function FormNewTodo({ id = null }) {
  const { todos, setTodos } = useContext(TodosContext)
  const navigate = useNavigate()
  console.log(id);
  console.log(todos.find((t) => {
    console.log(t.id);
    return t.id == id
}));
  
  
  return (
    <form className='items-center p-5 h-[50vh] flex  flex-col justify-around w-[90%]'>
      <div className='gap-1 w-[90%] flex flex-col justify-center items-start border-gray-600 '>
        <label htmlFor="title">כותרת:</label>
        <input value={id ? todos.find((t) => t.id == id).title : ""} onChange={e => localStorage.setItem('title', e.target.value)} className='p-1 border rounded border-gray-500 w-[100%]' type="text" name='titie' placeholder='הכנס כותרת'/>
      </div>
      <div className='gap-1 w-[90%] flex flex-col  justify-center items-start border-gray-600 '>
        <label htmlFor="description">תיאור:</label>
        <textarea value={id ?  todos.find((t) => t.id == id).description : ""} onChange={e => localStorage.setItem('description', e.target.value)} className='p-1 border rounded border-gray-500 h-[20vh] w-[100%]' name="description" id="description" placeholder='הכנס תיאור'></textarea>
      </div>
      <div className='flex w-[90%] justify-between'>

      <button onClick={(e) => {
        e.preventDefault()
        const title = localStorage.getItem('title')
        const description = localStorage.getItem('description')
        setTodos(onSaveNewTodo(todos, {title, description}))
        navigate('/')
        localStorage.clear()
      }} className='rounded bg-gray-300 hover:bg-gray-400 border border-gray-600 p-1 w-[40%]'>save</button>
      <button onClick={()=>navigate('/')} className='rounded bg-gray-100 hover:bg-gray-200 border border-gray-600 p-1 w-[40%]'>Cencel</button>
      </div>
    </form>
  )
}
