import React from 'react'

export default function Dialog({ dir='ltr', title, desc, textConfirm = 'save', onConfirm, textCancel = 'cancel', onCancel}) {
  return (
    <div dir={dir} className='rounded-lg fixed z-[9999] border border-gray-400 shadow-current shadow-md bg-gray-100 h-[30vh] flex flex-col w-[60%] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
        <div className='flex flex-col justify-around items-center h-[60%]'>
            <h2 className='text-2xl font-bold text-center'>{title}</h2>
            <span className='text-xl text-center'>{desc}</span>
        </div>
        <div className='flex items-end justify-evenly w-full h-[30%]'>
            <button onClick={onConfirm} className='w-[20%] p-2 border  bg-green-400 hover:bg-green-600'>{textConfirm}</button>
            <button onClick={onCancel} className='w-[20%] p-2 border  bg-red-400 hover:bg-red-600'>{textCancel}</button>
        </div>
    </div>
  )
}
