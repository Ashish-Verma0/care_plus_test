import React, { useEffect, useState } from 'react'
import { Box, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddNewUser from './AddNewUser';
import axios from "axios"
import { DELETE, GET_ADMIN } from '../../common/constants';
import { deleteFetch, getFetch } from "../../common/api"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UserPermission = () => {
    const [api, setApi] = useState([])
    useEffect(() => {
        getUserPermissionList()
    }, [])
    const getUserPermissionList = async () => {
        const res = await getFetch(GET_ADMIN)
        return setApi(res?.admin)
    }
    const handleDelete = async (id) => {
        const res = await deleteFetch(DELETE, id)
        if (res.status === 200) {
            getUserPermissionList();
            toast("User deleted succesfully");
        }
    }
    return (
        <div>
            <Box
                alignItems="center"
                justifyContent="center"
                sx={{
                    display: "flex",
                    width: 200,
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
                    User Admin Permission
                </Typography>
            </Box>
            <div className='tablr-responsive'>
                <table className='table table-hover'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Designation</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody >
                        {api.map((elem) => {
                            const { name, email, designation, _id } = elem;
                            return (
                                <>
                                    <tr>
                                        <td>{name}</td>
                                        <td>{email}</td>
                                        <td>{designation}</td>
                                        <td onClick={() => handleDelete(_id)}><DeleteIcon /></td>
                                    </tr>
                                </>
                            )
                        })}


                    </tbody>
                </table>
            </div>
            <AddNewUser getUserPermissionList={getUserPermissionList} />
            <ToastContainer />
        </div>
    )
}

export default UserPermission