import React from "react";

const Input = (props) => {
  const {
    type,
    label,
    displayIcon,
    activeIcon,
    setActiveIcon,
    value,
    onChange,
    errEmail,
    errUsername,
    errPassword,
    errConfirmPassword,
    errPhone,
  } = props;
  return (
    <div className="user-box">
      <input
        type={activeIcon ? "text" : type}
        value={value}
        onChange={onChange}
      />
      <label>{label}</label>
      {errEmail && <p>Email is not valid</p>}
      {errUsername && <p>Username is not valid</p>}
      {errPassword && <p>Password is not strong</p>}
      {errConfirmPassword && (
        <p>Confirm password is not compatible with password</p>
      )}
      {errPhone && <p>Phone is not valid</p>}
      {displayIcon && (
        <span onClick={() => setActiveIcon(!activeIcon)}>
          {activeIcon ? (
            <i className="fa-solid fa-eye"></i>
          ) : (
            <i className="fa-sharp fa-solid fa-eye-slash"></i>
          )}
        </span>
      )}
    </div>
  );
};

export default Input;
