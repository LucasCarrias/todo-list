import { useState } from "react";
import { Check, Circle, Trash } from "@phosphor-icons/react";

import styles from "./Task.module.css";

const ICON_SIZE = 24;

export function Task() {
  const [isChecked, setIsChecked] = useState(false);

  function handleOnChecked() {
    setIsChecked((state) => !state);
  }

  return (
    <div className={styles.task}>
      <button onClick={handleOnChecked}>
        {isChecked ? (
          <Check className={styles.check} size={ICON_SIZE} />
        ) : (
          <Circle className={styles.circle} size={ICON_SIZE} />
        )}
      </button>

      <span className={isChecked ? styles.checkedContent : styles.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        aperiam necessitatibus deleniti quas quia nesciunt quae ducimus
        aspernatur ab maiores doloremque reiciendis nihil labore voluptatem, eos
        enim eum! Ipsa, ea?
      </span>
      <button>
        <Trash className={styles.trash} size={ICON_SIZE} />
      </button>
    </div>
  );
}
