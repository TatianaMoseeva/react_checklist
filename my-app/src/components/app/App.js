import {useState} from 'react';
import { nanoid } from 'nanoid'

import Header from '../header/Header';
import List from '../list/List';
import AddNew from '../add-new/AddNew';

function id() {
	return nanoid();
}

const initData = [
    {id: id(), desc: 'Make a mess in the kitchen by creating snow angels in flour', date: '2 days ago', isDone: false, isEdit: false},
    {id: id(), desc: 'Rearrange all the furniture overnight', date: '5 days ago', isDone: false, isEdit: false},
    {id: id(), desc: 'Park the car in the middle of the garden', date: '3 days ago', isDone: false, isEdit: false},
    {id: id(), desc: 'Have a marshmallow snowball fight with other soft toys', date: '3 days ago', isDone: false, isEdit: false}
]

function App() {

    const [tasks, setTasks] = useState(initData);

    function editTask (id, e) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return {...task, desc: e.target.value}
            } 
            return task;
        }));
    }

    function toggleMode (id, prop) {
        setTasks(tasks.map(task => {
            if(task.id === id) {
                return {...task, [prop]: !task[prop]};
            }
            return task;
        }));
    }

    function removeItem(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    function addTask(desc, date) {
        let newTask = {
            id: id(),  
            desc: desc,
            date: 'today'
        };
        if (newTask.desc.length > 0 ) {
            setTasks([...tasks, newTask]);
        }
    }


	return <div className='container'>
		<Header />
        <List tasks={tasks} removeItem={removeItem} toggleMode={toggleMode} editTask={editTask}/>
        <AddNew addTask={addTask}/>
	</div>;
}

export default App;
