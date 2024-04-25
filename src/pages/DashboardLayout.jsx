import { useState } from "react";
import { Footer } from "./Footer";
import { Link, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../actions/loginAction";
import ibm from "../assets/ibm.jpg";

export const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-dark bg-secondary fixed-top">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <img
              src={ibm}
              alt="Logo"
              className="navbar-brand me-2"
              style={{ height: "40px" }}
            />
            <span className="navbar-brand">“THINK”</span>
          </div>
          <button
            onClick={handleLogout}
            className="btn btn-outline-dark text-white"
          >
            Logout
          </button>
          <button
            className="navbar-toggler d-md-none"
            type="button"
            onClick={toggleSidebar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      <div className="row mt-5 pt-4">
        <div
          className={`col-md-3${
            isSidebarOpen ? "" : " d-none d-md-block"
          } sidebar`}
          style={{ height: "75vh", overflowY: "auto" }}
        >
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Link to="/dashboardL/profile" className="text-dark linkStyle">
                Profile
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/dashboardL/contact" className="text-dark linkStyle">
                Contact Details
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-9">{<Outlet />}</div>
      </div>

      <Footer />
    </div>
  );
};
