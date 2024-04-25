import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../actions/loginAction";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.signInUser;
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if username and password are not empty
    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    // Check if the email is valid
    if (!validateEmail(username)) {
      setError("Please enter a valid email address.");
      return;
    }

    const userCheck = data.find(
      (user) => user.username === username && user.password === password
    );

    if (userCheck) {
      setError(""); // Clear any previous error messages
      toast("Login Success");
      const user = {
        username,
        password,
      };
      dispatch(login(user));
      navigate("/dashboardL");
    } else {
      setError("Invalid username or password");
    }
  };

  // Function to validate email format
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div>
      <div className="background-image"></div>
      <div className="container-fluid h-100 mt-5">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title text-center mb-4">Login</h1>
                <form onSubmit={handleSubmit}>
                  {error && <p className="text-danger">{error}</p>}
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
                        className="form-control"
                        id="inputEmail"
                        value={username}
                        placeholder="name@example.com"
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                      />
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
                        className="form-control"
                        id="inputPassword"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-success w-100">
                    Login
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
