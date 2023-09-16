import { useState } from "react";

import { Header } from "./components/Header";
import { NewTaskBar } from "./components/NewTaskBar";
import { TaskList } from "./components/TaskList";
import { TaskType } from "./types/TaskType";

import { v4 as uuidv4 } from 'uuid';

import styles from "./App.module.css";

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  function onAddTask(content: string) {
    const task: TaskType = {
      content: content,
      isChecked: false,
      id: uuidv4(),
    };
    setTasks([task, ...tasks]);
  }

  function onCheckTask(id: string) {
    const updatedTasks = tasks
      .map((task) => {
        if (task.id == id) {
          task.isChecked = !task.isChecked;
        }

        return task;
      })
      .sort((task) => (task.isChecked ? 1 : -1));

    setTasks(updatedTasks);
  }

  function onDeleteTask(id: string) {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);
  }

  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.main}>
        <NewTaskBar onAddTask={onAddTask} />

        <TaskList onCheckTask={onCheckTask} onDeleteTask={onDeleteTask} tasks={tasks} />
      </main>
    </div>
  );
}

export default App;
