import React, { useState } from 'react';
import { addTask, readTasks, removeTask } from '../../utils/functions';
import Task from '../Task/Task';
import './leftbar.css';

const LeftBar = () => {
    const [value,setValue] = useState('');
    const [tasks,setTasks] = useState(readTasks());

    const handleEnter = () => {
        addTask({ name: value, at: Date.now() })
        setTasks((t) => [...t,{ name: value, at: Date.now() }])
        setValue('');
    }

    const handleClick = (e) => {
        const time = e.target.getAttribute('data-time');
        removeTask(time);
        setTasks((t) => t.filter((a) => a.at !== parseInt(time)));
    }

    return <div className="left-bar">
        <div onClick={handleClick} className="tasks-container">
            {tasks.map((t,i) => <Task data={t} key={t.at} />)}
        </div>
        <textarea 
            placeholder="Add a Task" 
            value={value} 
            onChange={(e) => setValue(e.target.value)}
            onKeyPress={(e) => { if(e.key == "Enter"){ handleEnter() } }}
        ></textarea>
    </div>
}

export default LeftBar;