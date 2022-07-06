import React, { useEffect, useState } from 'react'
import UnapprovedDoctor from './UnapprovedDoctor'
import { Box, Grid, ListItemText, Pagination, Stack, Typography } from "@mui/material";
import { UNAPPROVEDDOCTOR, } from '../../../common/constants';
import { getFetchByLimit } from '../../../common/api';
const UnapprovedDoctorData = () => {
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 10
    })
    const [UnapproveddoctorData, setUnapprovedDoctorData] = useState([]);
    const getDoctorData = async (page) => {
        const res = await getFetchByLimit(UNAPPROVEDDOCTOR, pagination.limit, page);
        console.log(res)
        return setUnapprovedDoctorData(res?.doctor);
    };
    useEffect(() => {
        getDoctorData()
    }, [])
    console.log(UnapproveddoctorData)

    // const getModal = (data) => {
    //     console.log(data)
    // }
    return (
        <  >
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
                            Doctor's List
                        </Typography>
                    </Box>

                </Stack>
                <Stack direction="column" maxWidth="100%" >
                    {UnapproveddoctorData.map((item) => (

                        < UnapprovedDoctor
                            id={item._id}
                            image="https://images.unsplash.com/photo-1656350703134-3411d026f397?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                            name={item.fullName}
                            hospital="Bangabandhu Sheikh Mujib Medical University Hospital"
                            specialist={item.specialist}
                            // onclick={() => getModal(UnapproveddoctorData)}
                            item={item}
                        />
                    ))}
                </Stack>
                <Grid
                    mt={2}
                    mb={3}
                    pr={5}
                    display="flex"
                    justifyContent="end"
                    sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
                >
                    <Pagination

                        count={10} onClick={data => {
                            setPagination({
                                ...pagination, page: parseInt(data?.target?.innerText)
                            })
                            getDoctorData(data?.target?.innerText)
                        }} color="secondary" />
                </Grid>
            </Stack>
        </ >
    )
}

export default UnapprovedDoctorData