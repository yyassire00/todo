import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";
function Task({ task, tasks, setTasks }) {
  const [isCompleted, setIsCompleted] = useState(task.completed);
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState(task.text);
  const handleIscompleted = () => {
    setIsCompleted(!isCompleted);
    setTasks(
      tasks.map((item) => {
        if (item._id === task._id) {
          item.completed = !item.completed;
        }
        return item;
      })
    );
  };
  const handleEdit = () => {
    setEditMode(true);
  };
  const handleDelete = () => {
    const newTasks = tasks.filter((item) => {
      return item._id !== task._id;
    });
    setTasks(newTasks);
  };
  const handleSve = () => {
    setEditMode(false);
    setTasks(
      tasks.map((item) => {
        if (item._id === task._id) {
          item.text = text;
        }
        return item;
      })
    );
  };
  return (
    <div className="task-container">
      <div className="text-container">
        <input
          type="checkbox"
          defaultChecked={isCompleted}
          onChange={handleIscompleted}
        />
        <input
          className="text"
          style={{ textDecoration: isCompleted ? "line-through" : "none" }}
          defaultValue={text}
          disabled={!editMode}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="action">
        {editMode ? (
          <SaveIcon className="green" onClick={handleSve} />
        ) : (
          <EditIcon className="green" onClick={handleEdit} />
        )}

        <DeleteOutlineIcon className="red" onClick={handleDelete} />
      </div>
    </div>
  );
}

export default Task;
