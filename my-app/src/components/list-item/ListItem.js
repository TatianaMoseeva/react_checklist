import "./ListItem.css";


function ListItem({id, desc, date, isDone, removeItem, isEdit, toggleMode, editTask}) {

    let classNames = "mb-1";
    if (isDone) {
        classNames+= " is_done";
    }

    let elem;
    if (!isEdit) {
        elem = <>
                <div 
                    className="d-flex w-100 justify-content-between" 
                    onClick={() => toggleMode(id, 'isDone')}
                >
                        <h5 className={classNames}>{desc}</h5>
                        <small>{date}</small>
                </div>
                <div className="d-flex w-100 justify-content-end">
                    <i className="fas fa-pen" onClick={() => toggleMode(id, 'isEdit')}></i>
                    <i className="fas fa-trash" onClick={() => removeItem(id)}></i>
                </div>
            </>
    } else {
        elem =  <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        value={desc}
                        onChange={e => editTask(id, e)}
                    />
                    <button 
                        className="btn btn-secondary btn-custom" 
                        type="button" 
                        onClick={() => toggleMode(id, 'isEdit')}
                    >
                        Save changes
                    </button>             
                </div>
    }



	return  <li className="list-group-item list-group-item-action ">
        {elem}
    </li>
}

export default ListItem;