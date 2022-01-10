import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import Input from "../../Input/Input";
import Form from "../../Form/Form";
import authOperations from "../../../redux/auth/auth-operations";

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
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Input
          type="email"
          name="email"
          value={email}
          placeholder="e-mail"
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={handleChange}
        />
        <Button variant="primary" type="submit">
          Log in
        </Button>
      </Form>
    </div>
  );
}
