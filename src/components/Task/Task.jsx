import React from 'react';
import './task.css';

const Task = ({data}) => {
    const { name, at } = data;
    return <div className="task" data-time={at}>
        {name}
    </div>
}

export default Task;