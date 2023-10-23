import React,{ useState , useEffect, Suspense} from 'react';
import InputField from './Taskify/Components/InputField';
import { Todo } from './Taskify/Components/model';
import './App'
import { SplashScreen } from './QuizApp';
import TodoList from './Taskify/Components/TodoList';
const App : React.FC= ()=> {
  const [ isFocused  , setIsFocused] = useState(false)
  const [todo , setTodo] = useState<string>("")
  const [todos , setTodos] = useState<Todo[]>([])


 // Function to save todos to local storage
 const saveTodosToLocalStorage = (todos: Todo[]) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const loadTodosFromLocalStorage = () => {
  const storedTodos = localStorage.getItem('todos');
  if (storedTodos) {
    setTodos(JSON.parse(storedTodos));
  }
};
useEffect(() => {
  loadTodosFromLocalStorage(); // Load todos from local storage when the component mounts
}, []);


const handleFocus=()=>{
  setIsFocused(true)
}
const handleBlur = () => {
  setIsFocused(false);
};
 const handleTask = (e:React.FormEvent)=>{
  e.preventDefault()
  if (todo){
    const newTodo = { id: Date.now(), todo, isDone: false };
      const newTodos = [...todos, newTodo];
      setTodos(newTodos);
      saveTodosToLocalStorage(newTodos); // Save the updated todos to local storage
      setTodo('');

  }
  
 }
  const setBg = isFocused ? 'bg-[#021529]  bg-opacity-[0.9]':''

  return (
  <div className={`w-screen h-screen flex flex-col items-center bg-[#2f74c0] font-neucha transition duration-300 ${setBg}`}>
   <span className="upper text-[40px] my-[30px] text-white z-1 text-center max-w-screen-sm:my-15px max-w-screen-sm:text-[35px]">Taskify</span> 
   <InputField 
   handleFocus = {handleFocus} handleBlur={handleBlur} 
   todo={todo} 
   setTodo={setTodo}
   handleTask={handleTask}


   />
   <TodoList todos={todos} setTodos={setTodos} saveLocal={saveTodosToLocalStorage}/>

    </div>
  );
}

export default App;
