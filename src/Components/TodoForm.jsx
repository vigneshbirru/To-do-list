import {useState} from 'react'

const TodoForm = () => {

    const [text,setText]=useState('');

    const  onInputChange =(e)=>{
        e.preventDefault()
        setText(e.target.value)
        // console.log(text);
    } 

    const handlenewtodo=()=>{
        if (text.trim() !== ''){
    
        setText(prevTodos => [
                    ...prevTodos,
                    { id: Date.now(), text: text, completed: false }              
                    ]);
        setText('');   
        }                 
    }
    

  return (
    <form action="">
        <div>
        <input type="text"
        value={text}
        onChange={onInputChange}
        placeholder='Enter new Todo..' />
        <button onClick={handlenewtodo}>Add Todo</button>
    </div>
    </form>
  )
}

export default TodoForm