import API from "../../api";
import {
  Heading,
  Container,
  Button,
  Field,
  Stack,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import "./Login.scss";

const Login = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    name: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await API.authApi.login(loginCredentials);
      if (response === "OK") {
        navigate("/search");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container className="Login-Container">
      <Heading size="5xl">Login</Heading>
      <form onSubmit={handleSubmit}>
        <Stack gap="5" className="Login-Stack">
          <Field.Root>
            <Field.Label>Name</Field.Label>
            <Input
              name="name"
              className="Login-Input"
              value={loginCredentials.name}
              placeholder="John Doe"
              onChange={handleInputChange}
            />
          </Field.Root>

          <Field.Root>
            <Field.Label>Email</Field.Label>
            <Input
              name="email"
              className="Login-Input"
              value={loginCredentials.email}
              placeholder="me@example.com"
              onChange={handleInputChange}
            />
          </Field.Root>
        </Stack>
        <Button type="submit" className="Login-Btn" colorPalette={"green"}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Login;
