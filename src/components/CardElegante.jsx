import React from "react";
import '../styles/card.css'

const CardElegante = ({ children, className = "" }) => {
  return <div className={`card-elegante ${className}`}>{children}</div>;
}; 

export default CardElegante;
