import React from 'react'
import { Box, Typography } from "@mui/material";
import '../appointment/AddAppointment.css'
const AddAppointment = () => {
    return (
        <div>
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
                    Add Appointment
                </Typography>
            </Box>
            <section class="vh-100 gradient-custom w-100">
                <div class="container py-0 h-100">
                    <div class="row ">
                        <div class="col-12 col-lg-9 col-xl-7">
                            <div class="main-form" style={{ borderRadius: "15px", width: "170%" }}>
                                <div class="card-body p-4 p-md-5">
                                    {/* <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Add Appointments</h3> */}
                                    <form>

                                        <div class="row">
                                            <div class="col-md-6 mb-4">

                                                <div class="form-outline">
                                                    <input type="text" id="firstName" class="form-control form-control-lg" placeholder='Enter First Name' />
                                                </div>

                                            </div>
                                            <div class="col-md-6 mb-4">

                                                <div class="form-outline">
                                                    <input type="text" id="lastName" class="form-control form-control-lg" placeholder='Enter Last Name' />
                                                </div>

                                            </div>
                                        </div>



                                        <div class="row">
                                            <div class="col-md-6 mb-4 pb-2">

                                                <div class="form-outline">
                                                    <input type="text" id="emailAddress" class="form-control form-control-lg" placeholder='Enter E-mail' />
                                                </div>

                                            </div>
                                            <div class="col-md-6 mb-4 pb-2">

                                                <div class="form-outline">
                                                    <input type="password" id="phoneNumber" class="form-control form-control-lg" placeholder='Enter Password' />
                                                </div>

                                            </div>
                                        </div>
                                        <div class="row">

                                            <div class="col-md-6 mb-4 pb-2">

                                                <div class="form-outline">
                                                    <input type="number" id="phoneNumber" class="form-control form-control-lg" placeholder='Patient Id' />
                                                </div>

                                            </div>
                                            <div class="col-md-6 mb-4 pb-2">

                                                <div class="form-outline">
                                                    <input type="text" id="phoneNumber" class="form-control form-control-lg" placeholder="Enter department name" />
                                                </div>

                                            </div>
                                        </div>
                                        <div class="row">

                                            <div class="col-md-6 mb-4 pb-2">

                                                <div class="form-outline">
                                                    <input type="text" id="phoneNumber" class="form-control form-control-lg" placeholder="Enter appointment doctor's name" />
                                                </div>

                                            </div>
                                            <div class="col-md-6 mb-4 pb-2">

                                                <div class="form-outline">
                                                    <input type="date" id="phoneNumber" class="form-control form-control-lg" placeholder='Appointment Date' />
                                                </div>

                                            </div>
                                        </div>
                                        <div class="row">

                                            <div class="col-md-6 mb-4 pb-2">

                                                <div class="form-outline">
                                                    <input type="text" id="phoneNumber" class="form-control form-control-lg" placeholder='Address' />
                                                </div>

                                            </div>
                                            <div class="col-md-6 mb-4 pb-2">

                                                <div class="form-outline">
                                                    <input type="text" id="phoneNumber" class="form-control form-control-lg" placeholder='Mobile Number' />
                                                </div>

                                            </div>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <textarea class="form-control" id="form4Example3" rows="4" placeholder='Problem'></textarea>
                                        </div>
                                        {/* gender */}
                                        <div class="row">

                                            <div class="col-md-6 mb-4">

                                                <h6 class="mb-2 pb-1">Gender: </h6>

                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                                                        value="option1" checked />
                                                    <label class="form-check-label" for="femaleGender">Female</label>
                                                </div>

                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                                                        value="option2" />
                                                    <label class="form-check-label" for="maleGender">Male</label>
                                                </div>

                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                                                        value="option3" />
                                                    <label class="form-check-label" for="otherGender">Other</label>
                                                </div>

                                            </div>
                                        </div>
                                        {/* gender */}
                                        <div className='d-flex justify-content-center'>
                                            <div class=" mt-4 pt-2 me-3">
                                                <button className="btn btn-primary" style={{
                                                    display: "flex",
                                                    width: 140,
                                                    height: 31,
                                                    background: "linear-gradient(94.43deg, #54E6D8 -14.68%, #3E4095 87%)",
                                                    borderRadius: "64px",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}> Reset</button>

                                            </div>
                                            <div class=" mt-4 pt-2">
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

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default AddAppointment