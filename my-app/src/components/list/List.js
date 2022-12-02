import ListItem from '../list-item/ListItem';

import "./List.css";


function List({tasks}) {

    const items = tasks.map(task => {
        return  <ListItem
                    key = {task.id}
                    desc = {task.desc}
                    date = {task.date}
                    done = {task.done}
                />
    })

	return <div className="list">
                <ul className="list-group">
                    {items}
                </ul>
        </div>
}

export default List;