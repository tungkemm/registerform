import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { ToastError, ToastSuccess } from "../utils/toast";
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
import { useDispatch, useSelector } from "react-redux";
import { addNewAccount, deleteStatusRegister } from "../features/slices/accountSlice";
import { statusRegister } from "../features/selector";
import Loading from "../components/Loading/Loading";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const statusRegisterSelector = useSelector(statusRegister);
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

  // console.log(statusRegisterSelector)

  const handleChangeFullname = (e) => {
    setFullname(e.target.value);
    setErrFullname(validateFullname(e.target.value));
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail(validateEmail(e.target.value));
  };

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
    setErrUsername(validateUsername(e.target.value));
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword(validatePassword(e.target.value));
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setErrConfirmPassword(validateConfirmPassword(password, e.target.value));
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
    setErrPhone(validatePhone(e.target.value));
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
      ToastError("Dang ky khong thanh cong !!!");
    } else {
      dispatch(
        addNewAccount({
          id: uuidv4(),
          fullname,
          email,
          username,
          password,
          phone,
        })
      );

      setFullname("");
      setEmail("");
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setPhone("");
    }
  };

  useEffect(() => {
    return () => {
      dispatch(deleteStatusRegister())
    }
  }, [])
  
  useEffect(() => {
    if (statusRegisterSelector === "success") {
      navigate("/login");
      ToastSuccess("Dang ky thanh cong !!!");
    }
  }, [statusRegisterSelector]);

  return (
    <div className="register-box">
      <h2>Sign up</h2>
      <form onSubmit={handleSubmitRegister}>
        <Input
          type="text"
          label="Full Name"
          value={fullname}
          onChange={handleChangeFullname}
          msgValidate={errFullname}
        />
        <Input
          type="text"
          label="Email"
          value={email}
          onChange={handleChangeEmail}
          msgValidate={errEmail}
        />
        <Input
          type="text"
          label="User Name"
          value={username}
          onChange={handleChangeUsername}
          msgValidate={errUsername}
        />
        <Input
          type="password"
          label="Password"
          displayIcon
          activeIcon={activePassword}
          setActiveIcon={setActivePassword}
          value={password}
          onChange={handleChangePassword}
          msgValidate={errPassword}
        />
        <Input
          type="password"
          label="Confirm Password"
          displayIcon
          activeIcon={activeConfirmPassword}
          setActiveIcon={setActiveConfirmPassword}
          value={confirmPassword}
          onChange={handleChangeConfirmPassword}
          msgValidate={errConfirmPassword}
        />
        <Input
          type="text"
          label="Phone"
          value={phone}
          onChange={handleChangePhone}
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
      {statusRegisterSelector === "loading" && <Loading />}
    </div>
  );
};

export default Register;
