import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

import SingleDepartment from "./singleDepartment/SingleDepartment.js";

const Department = () => {
  return (
    <>
      <Stack direction="row">
        <Box
          alignItems="center"
          justifyContent="center"
          sx={{
            display: "flex",
            width: 140,
            height: 31,
            background:
              "linear-gradient(94.43deg, #54E6D8 -14.68%, #3E4095 87%)",
            borderRadius: "64px",
          }}
          margin={{
            lg: "10px 30px",
            md: "5xp 10px",
            sm: "5px 10px",
            xs: "5px 10px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "13px",
              lineHeight: "16px",
              color: "#fff",
            }}
          >
            Department List
          </Typography>
        </Box>
      </Stack>
      <Grid
        container
        padding={{
          lg: "10px 20px",
          md: "5xp 10px",
          sm: "5px 10px",
          xs: "5px 10px",
        }}
        spacing={2}
      >
        {[
          "Radiology",
          "Gastric Fluid Test",
          "Pathalogy and Lab",
          "Blood Analysis",
          "Teleradiology",
          "Pathalogy and Lab",
          "Radiology",
          "Gastric Fluid Test",
          "Pathalogy and Lab",
          "Blood Analysis",
          "Teleradiology",
        ].map((dept, index) => (
          <Grid item key={index + 5477}>
            <SingleDepartment dept={dept} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Department;
