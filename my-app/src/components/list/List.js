import ListItem from '../list-item/ListItem';

import "./List.css";


function List({tasks, removeItem, toggleMode}) {

    const items = tasks.map(task => {
        return  <ListItem
                    key = {task.id}
                    id = {task.id}
                    desc = {task.desc}
                    date = {task.date}
                    isDone = {task.isDone}
                    removeItem = {removeItem}
                    isEdit = {task.isEdit}
                    toggleMode = {toggleMode}
                />;
    });

	return  <div className="list">
                <ul className="list-group">
                    {items}
                </ul>
            </div>
}

export default List;