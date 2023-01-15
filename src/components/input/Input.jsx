import React from "react";
import "./Input.css";

const Input = (props) => {
  const {
    type,
    label,
    displayIcon,
    activeIcon,
    setActiveIcon,
    value,
    onChange,
    msgValidate,
  } = props;
  return (
    <div className="user-box">
      <input
        type={activeIcon ? "text" : type}
        value={value}
        onChange={onChange}
      />
      <label>{label}</label>
      {msgValidate && <p>{msgValidate}</p>}
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
