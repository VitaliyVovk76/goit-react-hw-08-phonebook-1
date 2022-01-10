import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import Input from "../../Input/Input";
import Form from "../../Form/Form";
import authOperations from "../../../redux/auth/auth-operations";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const notify = () => {
    toast.warning("password must be at least 7 characters");
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    if (password.length < 7) {
      notify();
    }
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Input
          type="text"
          name="name"
          value={name}
          placeholder="name"
          onChange={handleChange}
        />
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
          Register
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
}
