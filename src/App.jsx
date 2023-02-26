import logo from "./logo.svg";
import "./App.scss";
import { useEffect, useState } from "react";
import Task from "./Task";
import { v4 as uuidv4 } from "uuid";

function App() {
  // create new item:done
  // delete item:done
  // edit item:done
  // mark item as finished:done
  // save item to the local storage:done
  const [tasks, setTasks] = useState(() => {
    return localStorage.getItem("task") == null
      ? []
      : JSON.parse(localStorage.getItem("task"));
  });
  const [text, setText] = useState("");
  // functions
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      return alert("you can not leave the task empty");
    }
    const newTask = { completed: false, _id: uuidv4(), text };
    setTasks([newTask, ...tasks]);
    setText("");
  };
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <div className="App">
      <div className="app-container">
        <div className="header">What do you plan to do today</div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="task"
            required
            className="task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input type="submit" value="create" className="submit" />
        </form>
        <div className="task-list">
          {tasks.map((item) => {
            return (
              <Task
                key={item._id}
                task={item}
                tasks={tasks}
                setTasks={setTasks}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
