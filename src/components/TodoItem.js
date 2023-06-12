"use client"

function TodoItem({ id, title, completed, toggleTodo }) {
    return (
        <>
            <li className='text-xl py-2'>
                <input id={id} type="checkbox" className='cursor pointer peer ' defaultChecked={completed} onChange={e => toggleTodo(id, e.target.checked)} />
                <label htmlFor={id} className='peer-checked:line-through peer-checked:text-slate-400 text-white px-2'>{title}</label>
            </li>
        </>
    )
}

export default TodoItem