import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/button/Button";
import Input from "../../ui/input/Input";
import { ToastSuccess, ToastError } from "../../../utils/toast";
import {
  addAccountLogin,
  resetStatusAccountLogin,
} from "../../../features/slices/accountSlice";
import { login } from "../../../features/selector";
import { finishedLoading, loading } from "../../../features/slices/loadingSlice";
import "./Login.css"

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginSelector = useSelector(login);

  // value input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // an hien icon password
  const [activePassword, setActivePassword] = useState(false);

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    dispatch(
      addAccountLogin({
        username,
        password,
      })
    );
  };

  useEffect(() => {
    if (loginSelector.status === "loading") {
      dispatch(loading());
    }
    if (loginSelector.status === "success") {
      dispatch(finishedLoading());
      if (loginSelector.data.status === 200) {
        ToastSuccess(loginSelector.data.message);
        setUsername("");
        setPassword("");
        navigate("/home");
      }
      if (
        loginSelector.data.status === 400 ||
        loginSelector.data.status === 500
      ) {
        ToastError(loginSelector.data.message);
      }
    }
    if (loginSelector.status === "failure") {
      dispatch(finishedLoading());
      ToastError("Khong the ket noi voi server !!!");
    }
  }, [dispatch, loginSelector, navigate]);

  useEffect(() => {
    return () => {
      dispatch(resetStatusAccountLogin());
    };
  }, [dispatch]);

  return (
    <div className="login">
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
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            displayIcon
            activeIcon={activePassword}
            setActiveIcon={setActivePassword}
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
    </div>
  );
};

export default Login;
