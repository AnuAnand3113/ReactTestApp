import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../actions/signUpAction";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const existingUser = useSelector((state) => {
    return state.signInUser;
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setError((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clear the error message for the current field
    }));

    // Update the corresponding state based on the input field's name
    switch (name) {
      case "fullName":
        setFullName(value);
        break;
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!fullName) {
      newErrors.fullName = "Please fill full name.";
    }

    if (!username) {
      newErrors.username = "Please fill email.";
    }

    if (!password) {
      newErrors.password = "Please fill password.";
    }

    if (password.length < 8) {
      newErrors.password = "Password is too short";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please fill confirm password.";
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      // alert("hello");
      return;
    }

    const userData = {
      username,
      password,
      fullName,
    };

    const duplicateCheck = existingUser.find(
      (ele) => ele.username === username && ele.fullName === fullName
    );

    if (duplicateCheck) {
      toast.error("User already exists");
      return;
    }
    dispatch(signup(userData));
    toast.success("Suucessfully Registered.Please Login...");
    navigate("/login"); // Ensure signup action is dispatched properly
  };

  return (
    <div>
      <div className="background-image"></div>
      <div className="container-fluid h-100 mt-5">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title text-center mb-4">Sign Up</h1>
                <form onSubmit={handleSignup}>
                  <div className="row mb-3">
                    <label
                      htmlFor="name"
                      className="col-sm-3 col-md-4 col-form-label"
                    >
                      Full Name
                    </label>
                    <div className="col-sm-9 col-md-8">
                      <input
                        type="text"
                        className={`form-control ${
                          error && error.fullName ? "is-invalid" : ""
                        }`}
                        value={fullName}
                        id="name"
                        name="fullName"
                        placeholder="xyz"
                        onChange={handleInputChange}
                      />
                      {error && error.fullName && (
                        <div className="invalid-feedback">{error.fullName}</div>
                      )}
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="inputEmail"
                      className="col-sm-3 col-md-4 col-form-label"
                    >
                      Email address
                    </label>
                    <div className="col-sm-9 col-md-8">
                      <input
                        type="email"
                        className={`form-control ${
                          error && error.username ? "is-invalid" : ""
                        }`}
                        value={username}
                        id="inputEmail"
                        name="username"
                        placeholder="name@example.com"
                        onChange={handleInputChange}
                      />
                      {error && error.username && (
                        <div className="invalid-feedback">{error.username}</div>
                      )}
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="inputPassword"
                      className="col-sm-3 col-md-4 col-form-label"
                    >
                      Password
                    </label>
                    <div className="col-sm-9 col-md-8">
                      <input
                        type="password"
                        className={`form-control ${
                          error && error.password ? "is-invalid" : ""
                        }`}
                        value={password}
                        id="inputPassword"
                        name="password"
                        placeholder="Password"
                        onChange={handleInputChange}
                      />
                      <small className="form-text text-muted">
                        Must be 8-20 characters long.
                      </small>
                      {error && error.password && (
                        <div className="invalid-feedback">{error.password}</div>
                      )}
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="inputConfirmPassword"
                      className="col-sm-3 col-md-4 col-form-label"
                    >
                      Confirm Password
                    </label>
                    <div className="col-sm-9 col-md-8">
                      <input
                        type="password"
                        className={`form-control ${
                          error && error.confirmPassword ? "is-invalid" : ""
                        }`}
                        id="inputConfirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={handleInputChange}
                      />
                      {error && error.confirmPassword && (
                        <div className="invalid-feedback">
                          {error.confirmPassword}
                        </div>
                      )}
                    </div>
                  </div>
                  <button type="submit" className="btn btn-success w-100">
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
