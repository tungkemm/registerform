import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastError, ToastSuccess } from "../components/common/toast";
import Button from "../components/Button";
import Input from "../components/Input";
import {
  validateFullname,
  validateEmail,
  validateUsername,
  validatePassword,
  validateConfirmPassword,
  validatePhone,
} from "../utils/validateRegister";

const Register = () => {
  const navigate = useNavigate();
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
  const [errFullname, setErrFullname] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errUsername, setErrUsername] = useState(false);
  const [errPassword, setErrPassword] = useState(false);
  const [errConfirmPassword, setErrConfirmPassword] = useState(false);
  const [errPhone, setErrPhone] = useState(false);
  // const [dataRegister, setDataRegister] = useState([]);

  const handleChangeFullname = (e) => {
    setFullname(e.target.value);
    if (e.target.value) {
      validateFullname(e.target.value)
        ? setErrFullname(true)
        : setErrFullname(false);
    } else {
      setErrFullname(false);
    }
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value) {
      validateEmail(e.target.value) ? setErrEmail(true) : setErrEmail(false);
    } else {
      setErrEmail(false);
    }
  };

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
    if (e.target.value) {
      validateUsername(e.target.value)
        ? setErrUsername(true)
        : setErrUsername(false);
    } else {
      setErrUsername(false);
    }
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value) {
      validatePassword(e.target.value)
        ? setErrPassword(true)
        : setErrPassword(false);
    } else {
      setErrPassword(false);
    }
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value) {
      validateConfirmPassword(password, e.target.value)
        ? setErrConfirmPassword(true)
        : setErrConfirmPassword(false);
    } else {
      setErrConfirmPassword(false);
    }
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
    if (e.target.value) {
      validatePhone(e.target.value) ? setErrPhone(true) : setErrPhone(false);
    } else {
      setErrPhone(false);
    }
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    if (
      !fullname ||
      !email ||
      !username ||
      !password ||
      !confirmPassword ||
      !phone
    ) {
      ToastError("You don't enter enough infor");
    } else {
      if (
        errEmail ||
        errUsername ||
        errPassword ||
        errConfirmPassword ||
        errPhone
      ) {
        ToastError("Information is invalid");
      } else {
        console.log({
          fullname,
          email,
          username,
          password,
          confirmPassword,
          phone,
        });

        ToastSuccess("Register success !!!");
        navigate("/login");

        setFullname("");
        setEmail("");
        setUsername("");
        setFullname("");
        setPassword("");
        setConfirmPassword("");
        setPhone("");
      }
    }
  };

  return (
    <div className="register-box">
      <h2>Sign up</h2>
      <form onSubmit={handleSubmitRegister}>
        <Input
          type="text"
          label="Full Name"
          value={fullname}
          onChange={handleChangeFullname}
          errFullname={errFullname}
        />
        <Input
          type="text"
          label="Email"
          value={email}
          onChange={handleChangeEmail}
          errEmail={errEmail}
        />
        <Input
          type="text"
          label="User Name"
          value={username}
          onChange={handleChangeUsername}
          errUsername={errUsername}
        />
        <Input
          type="password"
          label="Password"
          displayIcon
          activeIcon={activePassword}
          setActiveIcon={setActivePassword}
          value={password}
          onChange={handleChangePassword}
          errPassword={errPassword}
        />
        <Input
          type="password"
          label="Confirm Password"
          displayIcon
          activeIcon={activeConfirmPassword}
          setActiveIcon={setActiveConfirmPassword}
          value={confirmPassword}
          onChange={handleChangeConfirmPassword}
          errConfirmPassword={errConfirmPassword}
        />
        <Input
          type="text"
          label="Phone"
          value={phone}
          onChange={handleChangePhone}
          errPhone={errPhone}
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
  );
};

export default Register;
