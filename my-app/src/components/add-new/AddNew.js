import {useState} from 'react';

import "./AddNew.css";


function AddNew({addTask, addDate}) {

    const [task, setTask] = useState('');
    
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();
    let day = currentDate.getDate();

	return <div className="add_new">
    <div className="input-group mb-3">
        <input 
            type="text" 
            className="form-control" 
            placeholder="Add a new task"
            value = {task}
            onChange={e => setTask(e.target.value)}
        />
        <button 
            className="btn btn-secondary btn-custom" 
            type="button" 
            onClick={() => {addTask(task, addDate(year, month, day)); setTask('')}}
        >Add to the list</button>
    </div>
</div>
}

export default AddNew;