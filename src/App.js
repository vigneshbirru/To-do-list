import React,{ useState } from 'react'
import './App.css'
import ShowTodo from './ShowTodo';

const App = () => {
    const [task,setTask]  =  useState("");
    const [data,setData]  =  useState([]);
    
    const ChangeHandler = (e)=>{
        setTask(e.target.value);
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        const newData = task;
        setData([...data,newData])
        setTask('');
    }
    
    const deleteItem=(i)=>{
        const finalData = data.filter((current,index)=>{
            return index !== i;
        })
        setData(finalData)
    }
    
    return (
    <div className='container'>
        <div className="outter-div">
            <div className="main-heading">
                <h1>To do List</h1>
            </div>
            <form onSubmit={submitHandler}>
                <div className="todo" >
                    <input type="text" className='input-value' value={task} onChange={ChangeHandler}/>
                    <button type='submit'>Add todo</button>
                </div>
                </form>
            {
                data.map((value,index)=>{
                    return <ShowTodo 
                    key={index}
                    id={index}
                    task={value}
                    onSelect={deleteItem}
                    />
                })
            }
         
        </div>
    </div>
)

}
export default App