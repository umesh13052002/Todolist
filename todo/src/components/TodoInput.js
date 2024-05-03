import { useState } from "react";
import styles from "./TodoInput.module.css";
function ToDoInput(props) {
  const [input, setInput] = useState();
  return (
    <div>
      <h1>To Do List</h1>
      <div className={styles.input_component_container}>
        <input
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
          className={styles.task_input}
        />
        <button
          onClick={() => {
            if (input) {
              props.addlist(input);
              setInput("");
            }
          }}
          className={styles.add_btn}
        >
          Add Task
        </button>
      </div>
    </div>
  );
}
export default ToDoInput;
