import React from 'react'
import { Link } from 'react-router'

export default function Header() {
  return (

    <div className='h-[10vh] flex bg-[#ac4d4d] rounded-b shadow-md items-center justify-between w-full px-16'>
        <div className='flex items-center space-x-2'>
            <img className='rounded-full object-cover w-10 h-10' src="src\download.png" alt="" />
            <Link to='/'>Home</Link>
        </div>
        <Link className='hover:text-blue-200' to='/AddTodo'>Add</Link>
    </div>
  )
}
