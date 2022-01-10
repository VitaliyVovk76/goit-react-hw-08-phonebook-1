import { useEffect, Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Container from "./components/Container/Container";
import PrivateRoute from "./components/routers/PrivateRoute";
import PublicRoute from "./components/routers/PublicRoute";
import AppBar from "./components/AppBar/AppBar";
import authOperations from "./redux/auth/auth-operations";
import authSelectors from "./redux/auth/auth-selectors";

const HomePage = lazy(() => import("./components/pages/HomePage/HomePage"));
const ContactsPage = lazy(() =>
  import("./components/pages/ContactsPage/ContactsPage")
);
const LoginPage = lazy(() => import("./components/pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() =>
  import("./components/pages/RegisterPage/RegisterPage")
);

function App() {
  const dispatch = useDispatch();

  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Container>
        <AppBar />
        <Switch>
          <Suspense fallback={<p>Загружаем...</p>}>
            <PublicRoute path="/" exact>
              <HomePage />
            </PublicRoute>

            <PublicRoute exact path="/register" restricted>
              <RegisterPage />
            </PublicRoute>

            <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
              <LoginPage />
            </PublicRoute>

            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsPage />
            </PrivateRoute>
          </Suspense>
        </Switch>
      </Container>
    )
  );
}

export default App;
