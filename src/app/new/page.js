import Link from 'next/link'
import React from 'react'
import prisma from '../db'
import { redirect } from 'next/navigation'
async function createTodo(data) {
    "use server"

    const title = data.get("title").valueOf() // get the title from the form

    if (!title || typeof(title) !== "string" ) throw new Error('Title is required')

    await prisma.todo.create({ data: { title } }) // create the todo

    redirect("/")
} // this function will be executed on the saserver
function page() {
    return (
        <>
            <div>
                <header className='text-3xl flex justify-between'>
                    <div>New</div>
                </header>
                <form action={createTodo} className='mt-4' >
                    <input type='text' id='new' name='title' className='bg-transparent border-2 rounded-lg w-full h-14 text-2xl p-2'></input>
                    <div className='flex justify-end gap-5 text-2xl py-3'>
                        <Link href='/' className='border-2 rounded-lg p-2 hover:bg-slate-600'>Cancel</Link>
                        <button type='submit' className='border-2 rounded-lg p-2 hover:bg-slate-600' >Create</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default page