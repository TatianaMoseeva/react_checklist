import "./AddNew.css";


function AddNew() {
	return <div className="add_new">
    <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Add a new task" aria-label="Recipient's username" aria-describedby="button-addon2"/>
        <button className="btn btn-secondary btn-custom" type="button" id="button-addon2">Add to the list</button>
    </div>
</div>
}

export default AddNew;