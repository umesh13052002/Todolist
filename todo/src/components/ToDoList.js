import { useEffect, useState } from "react";

import styles from "./ToDoList.module.css";
function ToDoList(props) {
  const [status, setStatus] = useState(localStorage.getItem(props.item));

  useEffect(() => {
    localStorage.setItem(props.item, status);
  }, [props.item, status]);
  return (
    <div className={styles.list_box}>
      <div className={styles.check_label_container}>
        <input
          type="checkbox"
          onChange={(e) => {
            if (e.target.checked) {
              setStatus("Completed");
            } else {
              setStatus("Pending");
            }
          }}
        />
        <label className={styles.task_label}>{props.item}</label>
      </div>
      <div>
        <button
          className={styles.deletebtn_div}
          onClick={(e) => {
            if (window.confirm("Are you sure")) {
              props.delete(props.i);
            }
          }}
        >
          Delete
        </button>
      </div>
      <span className={styles.status}>Status: {status}</span>
    </div>
  );
}
export default ToDoList;
