import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "./pages/Main";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { DashboardLayout } from "./pages/DashboardLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.loginUser);

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            {/* Redirect to login if not authenticated */}
            <Route index element={<Navigate to="/login" />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          {/* Protected routes */}
          {isAuthenticated && Object.keys(isAuthenticated).length > 0 ? (
            <Route path="dashboardL/*" element={<DashboardLayout />}>
              <Route path="profile" element={<Profile />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          ) : (
            <Route path="dashboardL/*" element={<Navigate to="/login" />} />
          )}
          {/* Redirect unmatched routes to login */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
