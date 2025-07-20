import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style.css";

const data = {
  email: "",
  password: "",
};

const Profile = () => {
  const [formData, setFormData] = useState(data);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = { email: "", password: " " };
    let isValid = true;
    if (!formData.email) {
      tempErrors.email = "Email is required.";
      isValid = false;
    } else if (!formData.email.includes("@")) {
      tempErrors.email = "Email must contain @.";
      isValid = false;
    }

    if (!formData.password) {
      tempErrors.password = "Password is required.";
      isValid = false;
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form submitted!");
      console.log("Form Data:", formData);

      // reset
      setFormData(data);
      setErrors({ email: "", password: "" });
      navigate("/");
    }
  };

  return (
    <div className="login-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={handleChange}
          />

          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Enter password"
            onChange={handleChange}
          />

          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Profile;
