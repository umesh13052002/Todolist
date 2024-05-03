import { useEffect, useState } from "react";
import ToDoInput from "./components/TodoInput";
import ToDoList from "./components/ToDoList";
import styles from "./App.module.css";
import Footer from "./components/Footer";

function App() {
  const [taskList, setTaskList] = useState([]);
  let addlist = (newtask) => {
    setTaskList([...taskList, newtask]);
    localStorage.setItem("tasks", JSON.stringify([...taskList, newtask]));
  };
  const deleteItem = (i) => {
    let newList = [...taskList];
    newList.splice(i, 1);
    setTaskList([...newList]);

    localStorage.setItem("tasks", JSON.stringify([...newList]));
  };
  useEffect(() => {
    if (localStorage.getItem("tasks")) {
      setTaskList(JSON.parse(localStorage.getItem("tasks")));
    }
  }, []);
  return (
    <div className={styles.top_wrapper}>
      <div className={styles.main_container}>
        <ToDoInput addlist={addlist} />

        {taskList.map((item, index) => {
          return (
            <ToDoList key={index} i={index} item={item} delete={deleteItem} />
          );
        })}
      </div>
      <hr />
      <Footer />
    </div>
  );
}
export default App;
