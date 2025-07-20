import React, { useState } from "react";
import "./login.css";

const userInfo = {
  userName: "",
  password: "",
};

const Login = () => {
  const [data, setData] = useState(userInfo);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", data.userName);
    console.log("Password:", data.password);
  };

  // Generic handler for both inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="login-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="userName">
          <label>Username</label>
          <input
            type="text"
            name="userName"
            value={data.userName}
            onChange={handleChange}
          />
        </div>

        <div className="password">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
