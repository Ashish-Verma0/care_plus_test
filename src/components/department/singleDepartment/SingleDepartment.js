import React from "react";

import { Stack } from "@chakra-ui/react";
import { Box } from "@mui/system";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import { Typography } from "@mui/material";

const SingleDepartment = ({dept}) => {
  return (
    <Box
      sx={{
        width: "304.55px",
        height: "113.98px",
        borderRadius: "13.3575px",
        background: "white",
      }}
    >
      <Stack
        direction="row"
        height="100%"
        justifyContent="start"
        alignItems="center"
        spacing={20}
        paddingLeft="20px"
      >
        <CorporateFareIcon
          sx={{ width: "79px", height: "79px", outline: "1px solid black" }}
        />
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: "22px",

            /* identical to box height */
            letterSpacing: "0.890501px",

            color: "#5B6889",
          }}
          variant="body1"
        >
          {dept}
        </Typography>
      </Stack>
    </Box>
  );
};

export default SingleDepartment;
