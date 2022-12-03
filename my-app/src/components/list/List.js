import ListItem from '../list-item/ListItem';

import "./List.css";


function List({tasks, markAsDone, removeItem}) {

    const items = tasks.map(task => {
        return  <ListItem
                    key = {task.id}
                    id = {task.id}
                    desc = {task.desc}
                    date = {task.date}
                    isDone = {task.isDone}
                    markAsDone = {markAsDone}
                    removeItem = {removeItem}
                    isEdit = {task.isEdit}
                />;
    });

	return  <div className="list">
                <ul className="list-group">
                    {items}
                </ul>
            </div>
}

export default List;