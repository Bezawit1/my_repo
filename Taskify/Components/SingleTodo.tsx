import React , {useState, useRef,useEffect} from 'react';
import {Todo} from './model'
import {AiFillEdit , AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
interface SingleTodoProps {
    todo:Todo
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
    todos:Todo[]
    saveLocal:(todos: Todo[]) => void

}





const SingleTodo = ({todo,todos,setTodos,saveLocal}:SingleTodoProps) => {
  const [ edit , setEdit] = useState<boolean>(false)
  const [ editTask , setEditTask] = useState<string>(todo.todo)
  const inputRef = useRef<HTMLInputElement>(null)
   

useEffect(() => {
inputRef.current?.focus();
}, [edit]);

  const handleEdit = (e:React.FormEvent,id:number)=>{
    e.preventDefault()
    setTodos(todos.map(t=>t.id === id ?{...t,todo:editTask}:t))
    const edited =todos.map(t=>t.id === id ?{...t,todo:editTask}:t)
    saveLocal(edited)
   setEdit(false)

  }
  const handleDone = (id:number) =>{
    setTodos(todos.map(t=>t.id === id ?{...t,isDone:!t.isDone}:t ))
    const completed = todos.map(t=>t.id === id ?{...t,isDone:!t.isDone}:t )
    saveLocal(completed)
  }
  const handleDelete = (id : number) =>{
    setTodos (todos.filter(t=>t.id!== id))
    const deleted = todos.filter(t=>t.id!== id)
    saveLocal(deleted)
  
  }

const lineCross = todo.isDone?'line-through':''






  return (
    <form className="lg:flex-row flex lg:w-[30%] rounded-md p-5 mt-4 
    bg-cardBackground h-auto md:flex-row
    sm:flex-col  sm:w-[70%] items-center
    "
    onSubmit={
      (e)=>{
        handleEdit(e,todo.id)
       
      }}
    
  
  
  >
      
{edit ?
(
<input 
value={editTask}
onChange={(e)=>setEditTask(e.target.value)}
className="outline-none border-none p-2 rounded-sm"
ref = {inputRef}
/>
):(
  <span className={`flex-1 p-1 border-none text-lg focus:outline-none ${lineCross}`}>
  {todo.todo}
</span>
)}




     
      <div className='flex'>
        <span 
        className="ml-3 text-lg cursor-pointer"
        onClick={()=>{
          if(!edit && !todo.isDone){
          setEdit(!edit)
          
        }}}

        >
            <AiFillEdit/>
        </span>
        <span className="ml-3 text-lg cursor-pointer" onClick ={()=>handleDelete(todo.id)}>
            <AiFillDelete/>
        </span>
        <span className="ml-3 text-lg cursor-pointer" onClick={()=>handleDone(todo.id)}>
           <MdDone/> 
        </span>
      </div>
    </form>
  );
}

export default SingleTodo;
