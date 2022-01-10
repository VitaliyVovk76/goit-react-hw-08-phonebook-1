import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import authSelectors from "../../../redux/auth/auth-selectors";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <h2 className={styles.title}>Welcome to our service</h2>

      {!isLoggedIn && (
        <div className={styles.buttonBox}>
          <NavLink className={styles.buttonLink} to="/login" exact>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </NavLink>
          <NavLink className={styles.buttonLink} to="/register" exact>
            <Button variant="primary" type="button">
              Register
            </Button>
          </NavLink>
        </div>
      )}
    </>
  );
}
