import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../../hooks/useContext/UserContext";
import "../login/Login.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const OtpForm = (props) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState({
    first: "",
    second: "",
    third: "",
    fourth: ""
  });

  // const otpHandler = (event) => {
  //   setOtp(event.target.value);
  // };
  const otpHandler = (e) => {
    const { name, value } = e.target
    setOtp({ ...otp, [name]: value })

  }
  const submitHandler = async (event) => {
    // console.log((`${otp.first}${otp.second}${otp.third}${otp.fourth}`) * 1)
    event.preventDefault();
    try {
      const otpNum = (`${otp.first}${otp.second}${otp.third}${otp.fourth}`) * 1
      const res = await axios.post("/api/v1/admin/otpLogin", {
        email: props.email,
        otp: otpNum,
      });
      console.log(res.data.data.user);
      props.setOpenSnackbar(true);
      props.setMessage(res.data.message);
      props.setSeverity("success");
      navigate("/");
    } catch (error) {
      console.log(error.response);
      props.setEmail("");
      setOtp("");
      props.setOpenSnackbar(true);
      props.setMessage(error.response.data.message);
      props.setSeverity("error");
    }
  };
  const handleClick = () => {
    navigate("/")
  }
  return (
    <div className="col-md-6 col-lg-7  align-items-center">
      <div className="d-flex align-items-center mb-3 pb-1" style={{ marginTop: "20px" }}>
        <i
          className="fas fa-cubes fa-2x me-3"
          style={{ color: "#ff6219" }}
        ></i>
        <img src="/images/carePlusLogo.svg" alt="Logo" />
        <span className="h1 fw-bold mb-0"></span>
      </div>
      <div className="card-body p-4 p-lg-5 text-black otpAlign" style={{ backgroundColor: "#3E4095", width: "80%", borderRadius: "20px", color: "white" }}>
        <form onSubmit={submitHandler}>
          {/* <div className="d-flex align-items-center mb-3 pb-1">
            <i
              className="fas fa-cubes fa-2x me-3"
              style={{ color: "#ff6219" }}
            ></i>
            <img src="/images/carePlusLogo.svg" alt="Logo" />
            <span className="h1 fw-bold mb-0"></span>
          </div> */}


          <div>
            <ArrowBackIcon style={{ marginLeft: "-33px", marginBottom: "10px" }} onclick={() => handleClick()} />
          </div>


          <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
            Otp has been successfully send
          </h5>

          <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
            your code to{" "}
            {props.email.replace(/(\w{3})[\w.-]+@([\w.]+\w)/, "$1***@$2")}
          </h5>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example27">
              Enter OTP
            </label>
            {/* <input
              type="password"
              id="form2Example27"
              className="form-control form-control-lg"
              onChange={otpHandler}
              value={otp}
            /> */}
            <div id="otp" class="inputs d-flex flex-row justify-content-center mt-2">
              <input class="m-2 text-center form-control rounded" type="text" id="first" name="first" maxlength="1" onChange={otpHandler}
                value={otp.first} />
              <input class="m-2 text-center form-control rounded" type="text" id="second" name="second" maxlength="1" onChange={otpHandler}
                value={otp.second} />
              <input class="m-2 text-center form-control rounded" type="text" id="third" name="third" maxlength="1" onChange={otpHandler}
                value={otp.third} />
              <input class="m-2 text-center form-control rounded" type="text" id="fourth" name="fourth" maxlength="1" onChange={otpHandler}
                value={otp.fourth} />
            </div>
          </div>

          <div className="pt-1 mb-4">
            <button className="btn btn-dark btn-lg btn-block" type="submit">
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OtpForm;
