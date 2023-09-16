import { Check, Circle, Trash } from "@phosphor-icons/react";
import { TaskType } from "../types/TaskType";

import styles from "./Task.module.css";

const ICON_SIZE = 24;

type TaskProps = {
  task: TaskType;
  onCheckTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
};

export function Task({ task, onCheckTask, onDeleteTask }: TaskProps) {
  function handleOnChecked() {
    onCheckTask(task.id);
  }

  function handleOnDeleted() {
    onDeleteTask(task.id);
  }

  return (
    <div className={styles.task}>
      <button onClick={handleOnChecked}>
        {task.isChecked ? (
          <Check className={styles.check} size={ICON_SIZE} />
        ) : (
          <Circle className={styles.circle} size={ICON_SIZE} />
        )}
      </button>

      <span className={task.isChecked ? styles.checkedContent : styles.content}>
        {task.content}
      </span>
      <button onClick={handleOnDeleted}>
        <Trash className={styles.trash} size={ICON_SIZE} />
      </button>
    </div>
  );
}
