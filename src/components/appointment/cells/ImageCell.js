import React from "react";

import c from "./ImageCell.module.css";

const ImageCell = ({ value }) => {
  return (
    <div className={c.container}>
      <img className={c.image} src={value} alt="patient" />
    </div>
  );
};

export default ImageCell;
