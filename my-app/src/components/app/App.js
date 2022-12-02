import {useState} from 'react';
import { nanoid } from 'nanoid'

import Header from '../header/Header';
import List from '../list/List';
import AddNew from '../add-new/AddNew';

function id() {
	return nanoid();
}

const initData = [
    {id: id(), desc: 'Make a mess in the kitchen by creating snow angels in flour', date: '2 days ago', done: false},
    {id: id(), desc: 'Rearrange all the furniture overnight', date: '5 days ago', done: false},
    {id: id(), desc: 'Park the car in the middle of the garden', date: '3 days ago', done: false},
    {id: id(), desc: 'Have a marshmallow snowball fight with other soft toys', date: '3 days ago', done: false},
]

function App() {

    const [tasks, setTasks] = useState(initData);

	return <div className='container'>
		<Header />
        <List tasks={tasks}/>
        <AddNew />
	</div>;
}

export default App;
