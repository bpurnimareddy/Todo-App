import React from 'react';
import './App.css'

const Todo =(props)=>{
    return(
        <div className="todo-box">
            <p>{props.name}<button onClick={props.deteleTask}>Delete</button></p>
        </div>
    )
}

export default Todo;