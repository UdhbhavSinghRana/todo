import Image from 'next/image'
import Link from 'next/link'
import prisma from './db';
import TodoItem from '@/components/TodoItem';

function getTodo() {
  return prisma.todo.findMany();
}

  async function toggleTodo(id, completed) {
    "use server"
    await prisma.todo.update({
      where: { id },
      data: { completed }
    })
  }
export default async function Home() {
  const todos = await getTodo();
  console.log(todos);
  return (
    <>
      <div className=''>
        <header className='text-2xl flex justify-between'>
          <div>Todo</div>
          <Link href="/new" className='border-2 p-2 rounded-xl hover:bg-slate-700 '>New</Link>
        </header>
        <ul className='mt-4 '>
          {todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
            // <li key={todo.id} >{todo.title}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
