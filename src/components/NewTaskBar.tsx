import styles from "./NewTaskBar.module.css";

import plusIcon from "../assets/plus.svg";

export function NewTaskBar() {
  return (
    <div className={styles.container}>
      <input className={styles.input} placeholder="Adicione uma nova tarefa" />
      <button className={styles.button}>
        Criar
        <img src={plusIcon} />
      </button>
    </div>
  );
}
