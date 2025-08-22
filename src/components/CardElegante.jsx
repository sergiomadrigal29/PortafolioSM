import React from "react";

const CardElegante = ({ children, className = "" }) => {
  return <div className={`card-elegante ${className}`}>{children}</div>;
};

export default CardElegante;
