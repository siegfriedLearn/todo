import React from 'react';

const Task = ( params ) => {

    return (
    <>
    <div  className="d-flex flex-colum justify-content-center">
      <div className="card text-bg-primary mb-3" style={{ width: "30rem" }}>
        {/* <div className="card-header">To-Do List</div> */}
        <div>
        <ul className="list-group list-group-flush">
          {tasks.map((task, i) => (
            <li className="bg-info card-text list-group-item" onClick={handlerRemove} id={i}>
              {task.task}    (-)
            </li>
          ))}
        </ul>
        </div>
        </div>
    </div>
    </>
    )
};


export default Task;