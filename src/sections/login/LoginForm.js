import React, { useState } from "react";
import axios from "axios";
import "../login/Login.css"
const LoginForm = (props) => {
  const [password, setPassword] = useState("");
  const emailHandler = (event) => {
    props.setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("/api/v1/admin", {
        email: props.email,
        password,
      });
      console.log(res);
      props.setOpenSnackbar(true);
      props.setMessage(res.data.message);
      props.setSeverity("success");
      props.setPage(1);
    } catch (error) {
      console.log(error.response);
      props.setEmail("");
      setPassword("");
      props.setOpenSnackbar(true);
      props.setMessage(error.response.data.message);
      props.setSeverity("error");
    }
  };

  return (
    <>

      <div className="col-md-6 col-lg-7 align-items-center ">
        <div className="  mb-3 pb-1">
          <i
            className="fas fa-cubes fa-2x me-3"
            style={{ color: "#ff6219" }}
          ></i>
          <span className="h1 fw-bold mb-0">
            <img src="/images/carePlusLogo.svg" alt="Logo" />
          </span>
        </div>
        <div className="card-body p-4 p-lg-5 text-black loginAlign" style={{ backgroundColor: "#3E4095", width: "80%", borderRadius: "20px", }}>
          <form onSubmit={submitHandler} style={{ width: "80%" }} >
            {/* <div className="d-flex align-items-center mb-3 pb-1">
              <i
                className="fas fa-cubes fa-2x me-3"
                style={{ color: "#ff6219" }}
              ></i>
              <span className="h1 fw-bold mb-0">
                <img src="/images/carePlusLogo.svg" alt="Logo" />
              </span>
            </div> */}
            <div className="">
              <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px", color: "white", fontSize: "35px" }}>
                Welcome
              </h5>

              <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px", color: "white", fontSize: "25px" }}>
                Login to your account
              </h5>
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form2Example17">
                Email address
              </label>
              <input
                type="email"
                id="form2Example17"
                className="form-control form-control-lg"
                onChange={emailHandler}
                value={props.email}
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form2Example27">
                Password
              </label>
              <input
                type="password"
                id="form2Example27"
                className="form-control form-control-lg"
                onChange={passwordHandler}
                value={password}
              />
            </div>

            <div className="pt-1 mb-4">
              <button className="btn btn-dark btn-lg btn-block" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
