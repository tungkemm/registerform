import React from "react";

const Button = (props) => {
  const { type, content } = props;
  return <button type={type}>{content}</button>;
};

export default Button;
