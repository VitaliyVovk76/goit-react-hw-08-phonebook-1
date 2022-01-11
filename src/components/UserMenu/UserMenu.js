import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import authSelectors from "redux/auth/auth-selectors";
import authOperations from "redux/auth/auth-operations";
import styles from "./UserMenu.module.css";

export default function UserMenu() {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <span className={styles.name}>Welcome, {name}</span>
      <Button
        variant="danger"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </Button>
    </div>
  );
}
