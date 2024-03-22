import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components";
import { Home, Login } from "./views";
import { useState } from "react";

export const App = () => {
  const [token, setToken] = useState<string | undefined>(undefined);

  return (
    <div className="App">
      <NavBar token={token} setToken={setToken} />

      <div className="container" style={{ marginTop: 100 }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={<Login token={token} setToken={setToken} />}
            />
          </Routes>
        </Router>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
