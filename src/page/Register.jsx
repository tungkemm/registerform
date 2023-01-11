import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastError, ToastSuccess } from "../components/common/toast";
import Button from "../components/Button";
import Input from "../components/Input";
import {
  validateEmail,
  validateUsername,
  validatePassword,
  validateConfirmPassword,
  validatePhone,
} from "../utils/validateRegister";

const Register = () => {
  const navigate = useNavigate()
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
  // const [infoRegister, setInfoRegister] = useState({});

  // validate form
  const [errEmail, setErrEmail] = useState(false);
  const [errUsername, setErrUsername] = useState(false);
  const [errPassword, setErrPassword] = useState(false);
  const [errConfirmPassword, setErrConfirmPassword] = useState(false);
  const [errPhone, setErrPhone] = useState(false);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value) ? setErrEmail(true) : setErrEmail(false);
  };

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
    validateUsername(e.target.value)
      ? setErrUsername(true)
      : setErrUsername(false);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    validatePassword(e.target.value)
      ? setErrPassword(true)
      : setErrPassword(false);
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    validateConfirmPassword(password, e.target.value)
      ? setErrConfirmPassword(true)
      : setErrConfirmPassword(false);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
    validatePhone(e.target.value) ? setErrPhone(true) : setErrPhone(false);
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    if (fullname && email && username && password && confirmPassword && phone) {
      if (
        !errEmail &&
        !errUsername &&
        !errPassword &&
        !errConfirmPassword &&
        !errPhone
      ) {
        console.log({
          fullname,
          email,
          username,
          password,
          confirmPassword,
          phone,
        });

        ToastSuccess("Register success !!!");
        navigate("/login")

        setFullname("");
        setEmail("");
        setUsername("");
        setFullname("");
        setPassword("");
        setConfirmPassword("");
        setPhone("");
      } else {
        ToastError("Thong tin chua hop le");
      }
    } else {
      ToastError("Chua nhap day du thong tin");
    }
  };

  return (
    <div className="register-box">
      <h2>Register</h2>
      <form onSubmit={handleSubmitRegister}>
        <Input
          type="text"
          label="Full Name"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
        <Input
          type="text"
          label="Email"
          onChange={handleChangeEmail}
          value={email}
          errEmail={errEmail}
        />
        <Input
          type="text"
          label="User Name"
          onChange={handleChangeUsername}
          value={username}
          errUsername={errUsername}
        />
        <Input
          type="password"
          label="Password"
          displayIcon
          activeIcon={activePassword}
          setActiveIcon={setActivePassword}
          onChange={handleChangePassword}
          value={password}
          errPassword={errPassword}
        />
        <Input
          type="password"
          label="Confirm Password"
          displayIcon
          activeIcon={activeConfirmPassword}
          setActiveIcon={setActiveConfirmPassword}
          onChange={handleChangeConfirmPassword}
          value={confirmPassword}
          errConfirmPassword={errConfirmPassword}
        />
        <Input
          type="text"
          label="Phone"
          onChange={handleChangePhone}
          value={phone}
          errPhone={errPhone}
        />
        <Button type="submit" content="Submit" />
      </form>
    </div>
  );
};

export default Register;
