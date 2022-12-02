import "./AddNew.css";


function AddNew() {
	return <div class="add_new">
    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Add a new task" aria-label="Recipient's username" aria-describedby="button-addon2"/>
        <button class="btn btn-secondary btn-custom" type="button" id="button-addon2">Add to the list</button>
    </div>
</div>
}

export default AddNew;