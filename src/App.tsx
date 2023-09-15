import { Header } from "./components/Header";
import { NewTaskBar } from "./components/NewTaskBar";
import { Task } from "./components/Task";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.main}>
        <NewTaskBar />

        <Task />
      </main>
    </div>
  );
}

export default App;
