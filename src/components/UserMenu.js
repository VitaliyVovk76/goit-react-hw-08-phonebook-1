import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import authSelectors from "../redux/auth/auth-selectors";
import authOperations from "../redux/auth/auth-operations";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
  button: {
    paddingTop: 0,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 0,
    display: "flex",
    marginLeft: 10,
  },
};

export default function UserMenu() {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
  return (
    <div style={styles.container}>
      <span style={styles.name}>Welcome, {name}</span>
      <Button
        style={styles.button}
        variant="danger"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </Button>
    </div>
  );
}
