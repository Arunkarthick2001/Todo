import React from "react";
import "../App.css";
export const Footer = ({ length }) => {
  return (
    <div className="text-center">
      <p className="fs-3 bg-danger-subtle">Reamaining tasks {length}</p>
      <p className="fs-0 copyright">Copyright 2023</p>
    </div>
  );
};
