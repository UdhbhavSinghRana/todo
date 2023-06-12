import React from 'react'


function TodoItem({ id, title }) {
    return (
        <>
            <li className='text-xl py-2'>
                <input id={id} type="checkbox" className='cursor pointer peer ' />
                <label htmlFor={id} className='peer-checked:line-through peer-checked:text-slate-400 text-white px-2'>{title}</label>
            </li>
        </>
    )
}

export default TodoItem