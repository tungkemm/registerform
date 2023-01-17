import React from "react";
import "./Button.css";

const Button = (props) => {
  const { type, content, width, color, backgroundColor, onClick } = props;
  return (
    <div style={{ textAlign: "center" }}>
      <button
        type={type}
        className="button"
        style={{
          width: `${width}`,
          color: `${color}`,
          backgroundColor: `${backgroundColor}`,
        }}
        onClick={onClick}
      >
        {content}
      </button>
    </div>
  );
};

export default Button;
