import { PlusCircle } from "@phosphor-icons/react";

import styles from "./NewTaskBar.module.css";

export function NewTaskBar() {
  return (
    <div className={styles.container}>
      <input className={styles.input} placeholder="Adicione uma nova tarefa" />
      <button className={styles.button}>
        <span>Criar</span>
        <PlusCircle  size={24}/>
      </button>
    </div>
  );
}
