import React from "react";
import { Link } from "react-router-dom";

const Btn = (props) => {
  return (
    <Link
      to={props.href}
      className={`btn ${props.fill ? "btn-fill" : ""} ${props.className} block text-center`}
      style={props.style}
    >
      {props.children}
    </Link>
  );
};

export default Btn;
