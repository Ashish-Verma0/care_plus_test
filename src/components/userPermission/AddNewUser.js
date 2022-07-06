import React, { useState } from 'react'
import { Box, Typography } from "@mui/material";
import Multiselect from "multiselect-react-dropdown"
import axios from "axios"
import { postFetch } from "../../common/api";
import { CREATE } from '../../common/constants';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddNewUser = ({ getUserPermissionList }) => {

    const [data, setData] = useState({
        name: "",
        email: "",
        designation: "",
        password: "",
        passwordConfirm: "",
        permissions: {
            dashboard: false,
            patient: false,
            clinic: false,
            doctor: false,
            department: false,
            appointment: false,
            payments: false,
            report: false,
            userPermissions: false,
            adminProfile: false,
            commission: false,

        }
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })

    }

    const select = [
        { option: "dashboard" },
        { option: "patient" },
        { option: "clinic" },
        { option: "doctor" },
        { option: "department" },
        { option: "appointment" },
        { option: "payments" },
        { option: "report" },
        { option: "userPermissions" },
        { option: "adminProfile" },
        { option: "commission" },
    ]

    const [options] = useState(select)

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(data)
        const res = await postFetch(CREATE, data)
        if (res.status == 200) {
            toast("User created succesfully");
            getUserPermissionList();
            clearData()
        } else {
            toast("Server Problem");
        }
    }
    const clearData = () => {
        return setData({
            name: "",
            email: "",
            designation: "",
            password: "",
            passwordConfirm: "",
            permissions: {}
        })
    }
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
                    Add New User
                </Typography>
            </Box>
            <section class="vh-100 gradient-custom w-100">
                <div class="container py-0 h-100">
                    <div class="row ">
                        <div class="col-12 col-lg-9 col-xl-7">
                            <div class="main-form" style={{ borderRadius: "15px", width: "170%" }}>
                                <div class="card-body p-4 p-md-5">
                                    <form onSubmit={handleSubmit}>

                                        <div class="row">
                                            <div class="col-md-6 mb-4">

                                                <div class="form-outline">
                                                    <input type="text" id="firstName" class="form-control form-control-lg" placeholder='Name' name="name" value={data.name} onChange={handleChange} />
                                                </div>

                                            </div>
                                            <div class="col-md-6 mb-4">

                                                <div class="form-outline">
                                                    <input type="text" id="email" class="form-control form-control-lg" placeholder='Email' name='email' value={data.email} onChange={handleChange} />
                                                </div>

                                            </div>
                                        </div>



                                        <div class="row">
                                            <div class="col-md-6 mb-4 pb-2 w-100">

                                                <div class="form-outline">
                                                    <input type="text" id="emailAddress" class="form-control form-control-lg" placeholder='Designation' name='designation' value={data.designation} onChange={handleChange} />
                                                </div>

                                            </div>

                                        </div>
                                        <div class="row">

                                            <div class="col-md-6 mb-4 pb-2">

                                                <div class="form-outline">
                                                    <input type="password" id="phoneNumber" class="form-control form-control-lg" placeholder='Password' name='password' value={data.password} onChange={handleChange} minLength={8} />
                                                </div>

                                            </div>
                                            <div class="col-md-6 mb-4 pb-2">
                                                <div class="form-outline">
                                                    <input type="password" id="phoneNumber" class="form-control form-control-lg" placeholder="Confirm Password" name='passwordConfirm' value={data.passwordConfirm} onChange={handleChange} minLength={8} />
                                                </div>
                                            </div>
                                        </div>
                                        {/* <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" name="select" value={data.select} onChange={handleChange}>
                                            <option selected select>Open this select menu</option>
                                            <option value="1" name="one" >One</option>
                                            <option value="2" name="two" >Two</option>
                                            <option value="3" name="three" >Three</option>
                                        </select> */}
                                        <Multiselect options={options} displayValue="option" name="select" value={options.permissions} onSelect={(dataaa) => {
                                            return dataaa?.map((dataa, index) => {
                                                return setData((prev) => {
                                                    return { ...prev, permissions: { ...prev.permissions, [dataa.option]: true } }
                                                })
                                            })

                                        }} onChange={handleChange} />

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
                                                }}
                                                    onClick={clearData}
                                                > Reset</button>

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
            <ToastContainer />
        </div>
    )
}

export default AddNewUser