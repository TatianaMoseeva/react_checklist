import {useState} from 'react';

import "./AddNew.css";


function AddNew({addTask}) {

    const [task, setTask] = useState('');
    

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
            onClick={() => {addTask(task, 'today'); setTask('')}}
        >Add to the list</button>
    </div>
</div>
}

export default AddNew;