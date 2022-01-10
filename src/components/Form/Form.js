import styles from "./Form.module.css";

export default function Form(props) {
  return (
    <form {...props} className={styles.form}>
      {props.children}
    </form>
  );
}
