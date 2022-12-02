import "./List.css";


function List() {
	return <div className="list">

        <ul className="list-group">

            <li  className="list-group-item list-group-item-action " aria-current="true">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading List group item heading</h5>
                <small>3 days ago</small>
            </div>
            <div className="d-flex w-100 justify-content-end">
                <i className="fas fa-pen"></i>
                <i className="fas fa-trash"></i>
            </div>
            </li>

            <li  className="list-group-item list-group-item-action" aria-current="true">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1 done">List group item heading</h5>
                <small>3 days ago</small>
            </div>
            <div className="d-flex w-100 justify-content-end">
                <i className="fas fa-pen"></i>
                <i className="fas fa-trash"></i>
            </div>
            </li>

            <li className="list-group-item list-group-item-action " aria-current="true">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small>3 days ago</small>
            </div>
            <div className="d-flex w-100 justify-content-end">
                <i className="fas fa-pen"></i>
                <i className="fas fa-trash"></i>
            </div>
            </li>

        </ul>
    </div>
}

export default List;