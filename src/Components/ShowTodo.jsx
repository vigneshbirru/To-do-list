import React, { useState } from 'react';
import './Todo.css';

function ShowTodo(props) {
    const [isCompleted, setIsCompleted] = useState(false);

    const handleDelete = () => {
        props.onSelect(props.id);
    }

    const handleToggleComplete = () => {
        setIsCompleted(!isCompleted);
    }

    return (
        <div className={`taskdata2 ${isCompleted ? 'completed' : ''}`}>
            <div className="row">
                <div className="task1">
                    <h6 className={isCompleted ? 'completed-task' : ''}>{props.task}</h6>
                </div>
                <div className="button">
                    <button onClick={handleToggleComplete}>{isCompleted ? 'Undo' : 'Done'}</button>
                </div>
                <div className="btn2">
                    <button onClick={handleDelete}>X</button>
                </div>
            </div>
        </div>
    )
}

export default ShowTodo;
