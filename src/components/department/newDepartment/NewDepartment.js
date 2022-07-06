import { Grid } from "@chakra-ui/react";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const NewDepartment = () => {
  return (
    <Stack direction="column">
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
            Add Department
          </Typography>
        </Box>
      </Stack>
      <Grid direction="row" padding="10px">
        <Grid item>
          <TextField
            id="filled-basic"
            variant="outlined"
            size="small"
            width={{ xs: "100%" }}
            sx={{
              border: "1px solid black",
              borderRadius: "4px",
              width: "500px",
              marginBottom: "20px",
              marginRight: "20px",
            }}
            placeholder="Enter Doctor Name"
          />
        </Grid>
        <Grid item>
          <TextField
            id="filled-basic"
            variant="outlined"
            size="small"
            width={{ xs: "100%" }}
            sx={{
              border: "1px solid black",
              borderRadius: "4px",
              width: "500px",
              marginBottom: "20px",
              marginRight: "20px",
            }}
            placeholder="Enter Department Name"
          />
        </Grid>
        <Grid item>
          <TextField
            id="filled-basic"
            variant="outlined"
            size="small"
            width={{ xs: "100%" }}
            sx={{
              border: "1px solid black",
              borderRadius: "4px",
              width: "500px",
              marginBottom: "20px",
              marginRight: "20px",
            }}
            placeholder="Enter Department Head Name"
          />
        </Grid>
        <Grid item>
          <FormControl
            sx={{
              marginBottom: "30px",
              marginRight: "20px",
            }}
          >
            <FormLabel id="demo-row-radio-buttons-group-label">
              Status
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="active"
                control={<Radio />}
                label="Active"
              />
              <FormControlLabel
                value="inactive"
                control={<Radio />}
                label="Inactive"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      <Grid
        display="flex"
        container
        direction="row"
        marginBottom={3}
        sx={{ flexDirection: "row" }}
      >
        <Grid item paddingLeft={10}>
          <Button
            sx={{
              width: "90px",
              height: "33px",
              background: "#F6F6FF",
              border: "1px solid #3E4095",
              borderRadius: "64px",
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "20px",
              marginRight: "10px",
            }}
            variant="filled"
          >
            Reset
          </Button>
        </Grid>
        <Grid item>
          <Button
            sx={{
              width: "90px",
              height: "33px",
              background:
                "linear-gradient(94.43deg, #54E6D8 -14.68%, #3E4095 87%)",
              border: "1px solid #3E4095",
              borderRadius: "64px",
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "20px",
              color: "#fff",
            }}
            variant="filled"
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default NewDepartment;
