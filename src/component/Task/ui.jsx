import { Task } from './task';
import styles from './ui.module.css';

export function Tasks({ tasks, onComplete, onDelete }) {
  const tasksQuantity = tasks.length;
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Total Tasks</p>
          <span>{tasksQuantity}</span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map(task => (
          <Task key={task.id} task={task} onComplete={onComplete} onDelete={onDelete} />

        ))}
      </div>
    </section>
  )
}