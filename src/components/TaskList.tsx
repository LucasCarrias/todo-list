import { TaskType } from "../types/TaskType";
import { EmptyTasks } from "./EmptyTasks";
import { Task } from "./Task";

import styles from "./TaskList.module.css";

type TaskListProps = {
  tasks: TaskType[];
  onCheckTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
};

export function TaskList({ tasks, onCheckTask, onDeleteTask }: TaskListProps) {
  const tasksCount = tasks.length;
  const checkedTasksCount = tasks.filter(
    (task) => task.isChecked === true
  ).length;
  const isEmptyTasks = tasksCount === 0;

  const TasksComponent = tasks.map((task) => (
    <Task
      key={task.id}
      task={task}
      onCheckTask={onCheckTask}
      onDeleteTask={onDeleteTask}
    />
  ));

  return (
    <div className={styles.taskList}>
      <header className={styles.header}>
        <div className={styles.createdTasks}>
          <div>Tarefas Criadas</div>

          <span className={styles.badge}>{tasksCount}</span>
        </div>

        <div className={styles.finishedTasks}>
          <div>Concluídas</div>

          {isEmptyTasks ? (
            <span className={styles.badge}>{tasksCount}</span>
          ) : (
            <span className={styles.badge}>
              {" "}
              {checkedTasksCount} de {tasksCount}
            </span>
          )}
        </div>
      </header>

      <main>{isEmptyTasks ? <EmptyTasks /> : TasksComponent}</main>
    </div>
  );
}
