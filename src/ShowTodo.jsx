import React, { useState } from 'react';
import './App.css';

function ShowTodo(props) {
    const [isCompleted, setIsCompleted] = useState(false);

    const handleDelete = () => {
        props.onSelect(props.id);
    }

    const handleToggleComplete = () => {
        setIsCompleted(!isCompleted);
    }

    return (
        <div className={`taskdata ${isCompleted ? 'completed' : ''}`}>
            <div className="row">
                    <h3 className={isCompleted ? 'completed-task' : ''}>{props.task}</h3>
             
                    <div className="btn">
                    <button className="button1" onClick={handleToggleComplete}>{isCompleted ? 'Undo' : 'Done'}</button>
                    <button className="button2" onClick={handleDelete}>X</button>
                    </div>
            </div>
        </div>
    )
}

export default ShowTodo;
