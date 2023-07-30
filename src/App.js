import React from "react";
import Form from "./form";
import "./App.css";

function App() {
  const list = [
    {
      task: "Aprender React",
      isDone: false,
    },
    {
      task: "Repasar SQL",
      isDone: false,
    },
    {
      task: "Estudiar useState",
      isDone: false,
    },
  ];

  const [tasks, setTask] = React.useState(list);

  const addTodo = (value) => {
    setTask([...tasks, { task: value, isDone: false }]);
  };

  const handlerRemove = (e) => {
    const element = e.target.id;
    const newTasks = tasks;
    newTasks.splice(element, 1);
    setTask([...newTasks]);
  };

  return (
    <>
    <h1 className="d-flex flex-colum justify-content-center">To-Do List</h1>
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
        
        <Form addTodo={addTodo} />
      </div>
    </div>
    </>
  );
}

export default App;
