import React from 'react';
import {Todo} from './model'
import SingleTodo from './SingleTodo';
interface TodoListProps {
todos:Todo[]
setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
saveLocal:(todos: Todo[]) => void
}
const TodoList = ({todos,setTodos,saveLocal}:TodoListProps) => {
  return (
    <div className="flex justify-evenly w-[90%] flex-wrap">
      {todos.map(task=>(
       <SingleTodo todo={task} key={task.id} 
       todos={todos}
       setTodos={setTodos}
       saveLocal={saveLocal}
       />
      ))}
    </div>
  );
}

export default TodoList;
