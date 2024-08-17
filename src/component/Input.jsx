import styles from './Input.module.css'
function Input({ inputVal }) {
    return <div className={styles.subdiv}>
        <input className={styles.input}  type="text" value={inputVal} readOnly />
  </div>
}
export default Input;