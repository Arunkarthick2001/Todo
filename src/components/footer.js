import React from "react";

export const Footer = ({ length }) => {
  return (
    <div className="text-center   h-100 align-text-bottom">
      <p className="fs-1 bg-danger-subtle border-5 border-end-3">
        Reamaining tasks {length}
      </p>
      <p className="fs-0">Copyright 2023</p>
    </div>
  );
};
