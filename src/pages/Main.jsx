import { Outlet, useNavigate } from "react-router-dom";
import { Footer } from "./Footer";

export const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <header className="fixed-top">
        <nav className="navShade bg-secondary nav d-flex justify-content-between align-items-center p-2">
          <div className="d-flex align-items-center">
            <img
              src="src\assets\react.svg"
              alt="Logo"
              className="me-2"
              style={{ height: "30px" }}
            />
            {/* <a className="nav-link text-white" href="/">
              About
            </a> */}
          </div>
          <ul className="nav">
            <li className="nav-item">
              <button
                className="btn btn-outline-dark text-white mx-1"
                onClick={() => navigate("/login")}
              >
                Login
              </button>{" "}
            </li>
            <li className="nav-item">
              <button
                className="btn btn-outline-dark text-white mx-1"
                onClick={() => navigate("/signup")}
              >
                Signup
              </button>{" "}
            </li>
          </ul>
        </nav>
      </header>
      <main style={{ marginTop: "40px", marginBottom: "40px" }}>
        {<Outlet />}
      </main>
      <Footer />
    </div>
  );
};
