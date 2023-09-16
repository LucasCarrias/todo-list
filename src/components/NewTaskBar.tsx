import { PlusCircle } from "@phosphor-icons/react";

import styles from "./NewTaskBar.module.css";
import { ChangeEvent, useState } from "react";

type NewTaskBarProps = {
  onAddTask: (content: string) => void;
};

export function NewTaskBar({ onAddTask }: NewTaskBarProps) {
  const [content, setContent] = useState("");

  function handleOnAddTask() {
    if (content.length < 1) return;
    
    onAddTask(content);
    setContent("");
  }

  function handleOnChangeContent(event: ChangeEvent<HTMLInputElement>) {
    setContent(event.target.value);
  }

  return (
    <div className={styles.container}>
      <input
        value={content}
        className={styles.input}
        placeholder="Adicione uma nova tarefa"
        onChange={handleOnChangeContent}
      />
      <button className={styles.button} onClick={handleOnAddTask}>
        <span>Criar</span>
        <PlusCircle size={24} />
      </button>
    </div>
  );
}
