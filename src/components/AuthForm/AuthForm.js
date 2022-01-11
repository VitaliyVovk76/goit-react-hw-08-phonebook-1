import styles from "./AuthForm.module.css";

export default function Form(props) {
  return (
    <form {...props} className={styles.form}>
      {props.children}
    </form>
  );
}
