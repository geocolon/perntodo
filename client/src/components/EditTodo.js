import React,{Fragment, useState} from 'react';

  const EditTodo = ({todo}) => {

  const [description, setDescription] = useState(todo.description);

  // edit description function
  const updateDescription = async e => {
    e.preventDefault();
    try {
      const body = {description};
      const response = await fetch(`/todos/${todo.todo_id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });

      window.location = "/";
      console.log(response);
      
    } catch (error) {
      console.error(error.message);
      
    }
  }

  return (
    <Fragment>

      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#id${todo.todo_id}`}>
        Edit
      </button>

      <div className="modal" id={`id${todo.todo_id}`} 
      onClick={() => setDescription(todo.description)}
      tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Todo</h1>
              <button 
              onClick={() => setDescription(todo.description)
              }
              type="button" 
                className="btn-close" 
                data-bs-dismiss="modal" 
                aria-label="Close">
              </button>
            </div>
            <div className="modal-body">
              <input type="text" className="form-control" value={description}
                onChange={e => setDescription(e.target.value)}
               />
            </div>
            <div className="modal-footer">
              <button type="button" 
              className="btn btn-warning"
              onClick={e => updateDescription(e)}
              >Edit</button>
              <button type="button" 
                className="btn btn-danger" 
                data-bs-dismiss="modal"
                onClick={() => setDescription(todo.description)}
                >
                Close
              </button>

            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default EditTodo;