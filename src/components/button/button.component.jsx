import React from "react";

const Button = ({
  label,
  type = "button",
  classes = "",
  onClick = () => {},
}) => {
  const styles =
    "bg-primary2 hover:bg-transparent border border-primary2 text-primary1 hover:text-white py-1 px-3 rounded-full";
  return (
    <button
      type={type}
      className={`${styles} ${classes}`}
      onClick={onClick}
      role="button"
    >
      {label}
    </button>
  );
};

export default Button;
