import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { ToastError, ToastLoading } from "../components/common/toast";

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      ToastError("You don't enter enough infor");
    } else {
      ToastLoading("Please wait a second");
    }
  };

  return (
    <div className="login-box">
      <h2>Sign in</h2>
      <form onSubmit={handleSubmitLogin}>
        <Input
          type="text"
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="text"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          type="submit"
          content="Login"
          width="160px"
          color="rgb(28, 30, 33)"
          backgroundColor="var(--primary-color)"
        />
      </form>
      <div
        style={{
          width: "76%",
          borderBottom: "1px solid var(--primary-color)",
          margin: "30px 0 20px 46px",
        }}
      />
      <Button
        content="Create New Account"
        width="80%"
        color="rgb(28, 30, 33)"
        backgroundColor="var(--primary-color)"
        onClick={() => navigate("/register")}
      />
    </div>
  );
};

export default Login;