// import React from "react";

// import { Grid, Button, Typography, Divider } from "@mui/material";
// import PasswordField from "./passwordField/PasswordField";

// const AdminProfile = () => {
//   const [error, setError] = React.useState(null);
//   const oldPasswordRef = React.useRef();
//   const newPasswordRef = React.useRef();
//   const confirmPasswordRef = React.useRef();

//   const submitHandler = async () => {
//     try {
//       const oldPassword = oldPasswordRef.current.value;
//       const newPassword = newPasswordRef.current.value;
//       const confirmPassword = confirmPasswordRef.current.value;

//       if (!oldPassword && oldPassword === "") {
//         return setError("Old Password Can't be empty");
//       } else if (!newPassword && newPassword === "") {
//         return setError("New Password Can't be empty");
//       } else if (!confirmPassword && confirmPassword === "") {
//         return setError("Confirm Password Can't be empty");
//       } else if (newPassword !== confirmPassword) {
//         return setError("New Password and Confirm Password do not match");
//       }

//       setError(null);

//     } catch (error) {
//       console.log(error.response);
//       return setError(error.response.data.message);
//     }
//   };
//   return (
//     <>
//       <Grid container p={2}>
//         <Typography variant="h4">Admin Profile</Typography>
//       </Grid>
//       <Divider />
//       <Grid container direction="column" pl={2}>
//         <Grid item>
//           <PasswordField label="Old Password" fRef={oldPasswordRef} />
//         </Grid>
//         <Grid item>
//           <PasswordField label="New Password" fRef={newPasswordRef} />
//         </Grid>
//         <Grid item>
//           <PasswordField
//             label="Confirm New Password"
//             fRef={confirmPasswordRef}
//           />
//         </Grid>
//         {error && (
//           <Grid item>
//             <Typography variant="caption" component="p" sx={{ color: "red" }}>
//               *{error}
//             </Typography>
//           </Grid>
//         )}
//         <Grid item>
//           <Button variant="contained" onClick={submitHandler}>
//             Submit
//           </Button>
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default AdminProfile;

import React, { useContext } from "react";
import "../adminProfile/AdminProfile.css";
import { Box, Typography } from "@mui/material";
import { UserDataContext } from "../../hooks/useContext/UserContext";
const AdminProfile = () => {
  const { adminData } = useContext(UserDataContext)
  return (
    <div>
      <Box
        alignItems="center"
        justifyContent="center"
        sx={{
          display: "flex",
          width: 140,
          height: 31,
          background: "linear-gradient(94.43deg, #54E6D8 -14.68%, #3E4095 87%)",
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
          Admin Profile
        </Typography>
      </Box>
      <section className="vh-100 gradient-custom w-100">
        <div className="container py-0 h-100">
          <div className="row ">
            <div className="col-12 col-lg-9 col-xl-7">
              <div
                className="main-form"
                style={{ borderRadius: "15px", width: "150%" }}
              >
                <div className="card-body p-4 p-md-5">
                  <div className="main-container ">
                    <form>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="firstName"
                              className="form-control form-control-lg"
                              placeholder="Enter First Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="lastName"
                              className="form-control form-control-lg"
                              placeholder="Enter Last Name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="emailAddress"
                              className="form-control form-control-lg"
                              placeholder="E-mail"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="tel"
                              id="phoneNumber"
                              className="form-control form-control-lg"
                              placeholder="Date Of Birth"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="phone"
                              id="phoneNumber"
                              className="form-control form-control-lg"
                              placeholder="Mobile Number"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="file"
                              id="phoneNumber"
                              className="form-control form-control-lg"
                              placeholder="Profile Picture"
                            />
                          </div>
                        </div>
                      </div>
                      {/* <div className="mt-4 pt-2">
                        <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
                      </div> */}
                    </form>
                    <div style={{ marginLeft: "150px" }} className="admin-img">
                      <img
                        src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt="logo"
                        className="img img-fluid"
                        width="200px"
                        height="auto"
                      />
                      <p className="fs-3">{adminData.name}</p>
                    </div>
                  </div>

                  {/* gender */}
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <h6 className="mb-2 pb-1">Gender: </h6>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="femaleGender"
                          value="option1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="femaleGender"
                        >
                          Female
                        </label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="maleGender"
                          value="option2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="maleGender"
                        >
                          Male
                        </label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="otherGender"
                          value="option3"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="otherGender"
                        >
                          Other
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* gender */}
                  <div className="mt-4 pt-2">
                    <button className="btn btn-primary" style={{
                      display: "flex",
                      width: 140,
                      height: 31,
                      background: "linear-gradient(94.43deg, #54E6D8 -14.68%, #3E4095 87%)",
                      borderRadius: "64px",
                      alignItems: "center",
                      justifyContent: "center"
                    }}> Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminProfile;
