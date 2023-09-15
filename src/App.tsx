import { Header } from "./components/Header";
import { NewTaskBar } from "./components/NewTaskBar";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.main}>
        <NewTaskBar />
      </main>
    </div>
  );
}

export default App;
