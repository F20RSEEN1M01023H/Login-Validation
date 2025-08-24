import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const Validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Email is not valid";
      isValid = false;
    }
    if (!password) {
      tempErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      tempErrors.password = "Password must be at least 6 chracters";
      isValid = false;
    }
    setError(tempErrors);
    return isValid;
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (Validate()) {
      alert("Login Successfully 🚀");
    }
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="">
          <label for="Email">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full rounded-lg border-2 focus:outline-none ${
              error.email ? "border-red-500 " : "border-gray-400"
            }`}
          />
          {error.email && <p>{error.email}</p>}
        </div>
        <div>
          <label for="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full rounded-lg border-2 focus:outline-none ${
              error.password ? "border-red-500 " : "border-gray-400"
            }`}
          />
          {error.password && <p>{error.password}</p>}
        </div>
        <button type="submit">Login Here</button>
      </form>
    </div>
  );
};

export default LoginForm;
