import styles from "./Input.module.css";
export default function InputEmail(props) {
  return <input {...props} className={styles.input} />;
}
