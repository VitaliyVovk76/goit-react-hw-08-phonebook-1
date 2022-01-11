import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import Navigation from "../Navigations";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav";
import styles from "./AppBar.module.css";

function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

export default AppBar;
