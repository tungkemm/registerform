import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastError, ToastSuccess } from "../../../utils/toast";
import Button from "../../ui/button/Button";
import Input from "../../ui/input/Input";
import {
  validateFullname,
  validateEmail,
  validateUsername,
  validatePassword,
  validateConfirmPassword,
  validatePhone,
} from "../../../utils/validateRegister";
import {
  addNewAccount,
  resetAccountRegister,
} from "../../../features/slices/accountSlice";
import { register } from "../../../features/selector";
import { finishedLoading, loading } from "../../../features/slices/loadingSlice";
import "./Register.css"

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const registerSelector = useSelector(register);

  // an hien icon password
  const [activePassword, setActivePassword] = useState(false);
  const [activeConfirmPassword, setActiveConfirmPassword] = useState(false);

  // value input
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");

  // validate form
  const [errFullname, setErrFullname] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errUsername, setErrUsername] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errConfirmPassword, setErrConfirmPassword] = useState("");
  const [errPhone, setErrPhone] = useState("");

  const handleChangeFullname = (value) => {
    setFullname(value);
    setErrFullname(validateFullname(value));
  };

  const handleChangeEmail = (value) => {
    setEmail(value);
    setErrEmail(validateEmail(value));
  };

  const handleChangeUsername = (value) => {
    setUsername(value);
    setErrUsername(validateUsername(value));
  };

  const handleChangePassword = (value) => {
    setPassword(value);
    setErrPassword(validatePassword(value));
  };

  const handleChangeConfirmPassword = (value) => {
    setConfirmPassword(value);
    setErrConfirmPassword(validateConfirmPassword(password, value));
  };

  const handleChangePhone = (value) => {
    setPhone(value);
    setErrPhone(validatePhone(value));
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    if (
      validateFullname(fullname) ||
      validateEmail(email) ||
      validateUsername(username) ||
      validatePassword(password) ||
      validateConfirmPassword(password, confirmPassword) ||
      validatePhone(phone)
    ) {
      setErrFullname(validateFullname(fullname));
      setErrEmail(validateEmail(email));
      setErrUsername(validateUsername(username));
      setErrPassword(validatePassword(password));
      setErrConfirmPassword(validateConfirmPassword(password, confirmPassword));
      setErrPhone(validatePhone(phone));
      ToastError("Thong tin nhap chua day du hoac khong hop le !!!");
    } else {
      dispatch(
        addNewAccount({
          fullname,
          email,
          username,
          password,
          phone,
        })
      );
    }
  };

  useEffect(() => {
    if (registerSelector.status === "loading") {
      dispatch(loading());
    }
    if (registerSelector.status === "success") {
      dispatch(finishedLoading());
      if (registerSelector.data.status === 200) {
        ToastSuccess(registerSelector.data.message);
        setFullname("");
        setEmail("");
        setUsername("");
        setPassword("");
        setConfirmPassword("");
        setPhone("");
        navigate("/login");
      }
      if (
        registerSelector.data.status === 400 ||
        registerSelector.data.status === 500
      ) {
        ToastError(registerSelector.data.message);
      }
    }
    if (registerSelector.status === "failure") {
      dispatch(finishedLoading());
      ToastError("Khong the ket noi voi server !!!");
    }
  }, [dispatch, navigate, registerSelector]);

  useEffect(() => {
    return () => {
      dispatch(resetAccountRegister());
    };
  }, [dispatch]);

  return (
    <div className="register">
      <div className="register-box">
        <h2>Sign up</h2>
        <form onSubmit={handleSubmitRegister}>
          <Input
            type="text"
            label="Full Name"
            value={fullname}
            onChange={(e) => handleChangeFullname(e.target.value)}
            msgValidate={errFullname}
          />
          <Input
            type="text"
            label="Email"
            value={email}
            onChange={(e) => handleChangeEmail(e.target.value)}
            msgValidate={errEmail}
          />
          <Input
            type="text"
            label="User Name"
            value={username}
            onChange={(e) => handleChangeUsername(e.target.value)}
            msgValidate={errUsername}
          />
          <Input
            type="password"
            label="Password"
            displayIcon
            activeIcon={activePassword}
            setActiveIcon={setActivePassword}
            value={password}
            onChange={(e) => handleChangePassword(e.target.value)}
            msgValidate={errPassword}
          />
          <Input
            type="password"
            label="Confirm Password"
            displayIcon
            activeIcon={activeConfirmPassword}
            setActiveIcon={setActiveConfirmPassword}
            value={confirmPassword}
            onChange={(e) => handleChangeConfirmPassword(e.target.value)}
            msgValidate={errConfirmPassword}
          />
          <Input
            type="text"
            label="Phone"
            value={phone}
            onChange={(e) => handleChangePhone(e.target.value)}
            msgValidate={errPhone}
          />
          <Button
            type="submit"
            content="Register"
            width="200px"
            color="rgb(28, 30, 33)"
            backgroundColor="var(--primary-color)"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
