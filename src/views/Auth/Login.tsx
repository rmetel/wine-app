import axios, { AxiosError } from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col";
import { useCookies } from "react-cookie";
import { getApiUrl, showToast } from "~/helpers";
import { JwtToken } from "~/models";

interface LoginProps {
  token: string | undefined;
  setToken: (token: string | undefined) => void;
}

export const Login: React.FC<LoginProps> = ({ token, setToken }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cookies, setCookie] = useCookies(["jwt-token"]);

  const apiUrl = getApiUrl();

  const addOneDay = () => {
    const currentDate = new Date();
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + 1);
    return nextDay;
  };

  const handleLogin = () => {
    axios
      .post(apiUrl + "/auth/login", { username, password })
      .then(({ data }) => {
        if (data?.token) {
          setToken(data.token);
          setCookie("jwt-token", data.token, {
            expires: addOneDay(),
          });
          showToast("Sie haben sich erfolgreich eingeloggt!", "success");
        }
      })
      .catch((error: AxiosError) => {
        showToast(
          `${error.response?.statusText}: ${(error.response?.data as { message: string }).message}`,
          "error",
        );
      });
  };

  useEffect(() => {
    const jwtToken = cookies["jwt-token"] ?? null;
    setToken(jwtToken);
    setUsername(jwtToken ? (jwtDecode(jwtToken) as JwtToken).username : "");
  }, []);

  if (token) {
    return <>{`Hallo ${username}!`}</>;
  }

  return (
    <div className="row mt-5">
      <div className="col-12 mb-3">
        <h2>Login</h2>
      </div>
      <Col md={{ span: 4, offset: 4 }}>
        <div className="row">
          <Form style={{ background: "#fff", borderRadius: 4, padding: 15 }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="email"
                placeholder="Username eingeben"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="outline-primary"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                handleLogin();
              }}
              value={password}
            >
              Login
            </Button>

            <hr />

            <a href="/register" className="link-secondary">
              Registrieren
            </a>
          </Form>
        </div>
      </Col>
    </div>
  );
};
