import React from "react";

const Button = ({ variant = "primary", children, onClick }) => {
  return (
    <>
      <button type="button" className={`btn btn-${variant}`} onClick={onClick} style={{margin: "auto 2.5px"}}>{children}</button>
    </>
  );
};

export default Button;