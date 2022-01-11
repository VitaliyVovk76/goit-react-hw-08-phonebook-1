import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import AuthInput from "components/AuthInput";
import AuthForm from "components/AuthForm";
import authOperations from "redux/auth/auth-operations";

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    dispatch(authOperations.logIn({ email, password }));

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <AuthForm onSubmit={handleSubmit} autoComplete="off">
        <AuthInput
          type="email"
          name="email"
          value={email}
          placeholder="e-mail"
          onChange={handleChange}
        />
        <AuthInput
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={handleChange}
        />
        <Button variant="primary" type="submit">
          Log in
        </Button>
      </AuthForm>
    </div>
  );
}
