import axios, { AxiosError } from "axios";
// import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { getApiUrl, showToast } from "~/helpers";

export const Register: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  // const [cookies, setCookie] = useCookies(["jwt-token"]);

  const apiUrl = getApiUrl();

  const handleRegister = () => {
    if (password !== confirmPassword) {
      showToast("Ihre Passwörter stimmen nicht überein!", "error");
      return;
    }

    axios
      .post(apiUrl + "/auth/register", { username, password })
      .then(({ data }) => {
        if (data) {
          // setToken(data.token);
          // setCookie("jwt-token", data.token, {
          //   expires: addOneDay(),
          // });
          setIsRegistered(true);
        }
      })
      .catch((error: AxiosError) => {
        showToast(
          `${(error.response?.data as { message: string }).message}`,
          "error",
        );
      });
  };

  // useEffect(() => {
  //   const jwtToken = cookies["jwt-token"] ?? null;
  //   setToken(jwtToken);
  //   setUsername(jwtToken ? (jwtDecode(jwtToken) as JwtToken).username : "");
  // }, []);

  // if (token) {
  //   return <>{`Hallo ${username}!`}</>;
  // }

  return (
    <div className="row mt-5">
      <div className="col-12 mb-3">
        <h2>Registrierung</h2>
      </div>
      {isRegistered ? (
        <Col md={{ span: 8, offset: 2 }}>
          <Row>
            <i
              className="bi bi-check2-circle"
              style={{ fontSize: 40, color: "green" }}
            ></i>
            <br />
            <p style={{ fontSize: 20 }}>
              Willkommen {username},
              <br />
              du hast dich erfolgreich registriert!
            </p>
            <a href="/login" className="link-secondary">
              Zum Login
            </a>
          </Row>
        </Col>
      ) : (
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

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm password..."
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Group>

              <div
                style={{ display: "flex", gap: 10, justifyContent: "center" }}
              >
                <Button
                  variant="outline-primary"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    handleRegister();
                  }}
                  value={password}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      )}
    </div>
  );
};
