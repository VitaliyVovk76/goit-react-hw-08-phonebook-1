import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import Navigation from "../navigation/Navigation/Navigation";
import UserMenu from "../UserMenu";
import AuthNav from "../navigation/AuthNav/AuthNav";

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #2A363B",
  },
};

function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header style={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

export default AppBar;
