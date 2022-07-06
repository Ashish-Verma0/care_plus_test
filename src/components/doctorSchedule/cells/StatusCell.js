import { Tooltip } from "@mui/material";
import React from "react";

import c from "./StatusCell.module.css";

const StatusCell = ({ value }) => {
  return (
    <div className={c.container}>
      <Tooltip title={value}>
        <div className={value === "active" ? c.active : c.inactive}></div>
      </Tooltip>
    </div>
  );
};

export default StatusCell;
