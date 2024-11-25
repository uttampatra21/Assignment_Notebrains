import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Auth.scss";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/authSlice";
import { cookiesService } from "../../shared/_session/cookies";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = cookiesService.getItem("accessToken");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(true);

  if (token) {
    navigate("/");
  }

  const handleClick = () => {
    setShowPass(!showPass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <div id="login">
      <div className="login-box">
        <div className="items">
          <h2>Login into your account</h2>

          <form onSubmit={handleSubmit}>
            <div className="input">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
            <div className="input">
              <input
                type={showPass ? "password" : "text"}
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
              <div className="eye" onClick={handleClick}>
                {showPass ? (
                  <i className="bx bxs-hide"></i>
                ) : (
                  <i className="bx bxs-show"></i>
                )}
              </div>
            </div>

            <div className="btn">
              <button type="submit">Login</button>
            </div>
          </form>

          <div className="sign-up">
            <p>
              Don't have an account?{" "}
              <NavLink to="/register">
                <strong>Register here</strong>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
