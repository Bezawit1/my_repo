import React, { useRef } from 'react';

interface InputFieldProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleTask: (e: React.FormEvent) => void;
  handleFocus: () => void; // Corrected prop name
  handleBlur: () => void;  // Corrected prop name
}

const InputField = ({
  handleFocus, // Corrected prop name
  handleBlur,  // Corrected prop name
  todo,
  setTodo,
  handleTask
}: InputFieldProps) => {

const inputRef = useRef <HTMLInputElement>(null)





  return (
    <div>
      <form
        className='flex w-[90%] relative items-center justify-center text-center m-auto'
        onSubmit={
          (e)=>{
            handleTask(e);
          inputRef.current?.blur()
        }}
      >
        <input
          type='text' // Corrected input type
          placeholder='Enter a task'
          className="w-screen  rounded-[50px] py-4 px-8 text-xl border-none transition duration-200 shadow-inner shadow-black focus:shadow-none focus:bg-opacity-50 focus:outline-none"
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          ref={inputRef}
        />
        <button
          type='submit'
          className="absolute w-[50px] h-[50px] m-3 rounded-full right-0 border-none text-sm bg-[#2f74c0] text-white transition-all duration-200 shadow-md hover:bg-[#388ae2] active:transform active:scale-90 active:shadow-sm"
        >
          Go
        </button>
      </form>
    </div>
  );
}

export default InputField;
