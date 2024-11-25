import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Auth.scss";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/authSlice";
import { cookiesService } from "../../shared/_session/cookies";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = cookiesService.getItem("accessToken");

  const [showPass, setShowPass] = useState(true);

  if (token) {
    navigate("/");
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    state: "",
    city: "",
    postalCode: "",
    age: "",
    gender: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClick = () => {
    setShowPass(!showPass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };

  return (
    <div id="login">
      <div className="login-box">
        <div className="items">
          <h2>Register your account</h2>
          <form onSubmit={handleSubmit}>
            <div className="input">
              <input
                required
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="input">
              <input
                required
                type="email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="input">
              <input
                required
                type="number"
                placeholder="Your Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>

            <div className="col-2">
              <div className="input">
                <input
                  required
                  type="number"
                  placeholder="Your Age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>

              <select
                required
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="input">
              <input
                required
                type="text"
                placeholder="Your Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className="col-2">
              <div className="input">
                <input
                  required
                  type="text"
                  placeholder="Your State"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>

              <div className="input">
                <input
                  required
                  type="text"
                  placeholder="Your City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="input">
              <input
                required
                type="number"
                placeholder="Your Postal Code"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
              />
            </div>

            <div className="input">
              <input
                type={showPass ? "password" : "text"}
                placeholder="Set Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <div className="eye">
                {showPass ? (
                  <i onClick={handleClick} className="bx bxs-hide"></i>
                ) : (
                  <i onClick={handleClick} className="bx bxs-show"></i>
                )}
              </div>
            </div>

            <div className="btn">
              <button type="submit">Register</button>
            </div>
          </form>

          <div className="sign-up">
            <p>
              Have an account?{" "}
              <NavLink to="/login">
                <strong>Sign in</strong>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
