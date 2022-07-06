import React, { useEffect, useState } from "react";
import SingleClinic from "./singleClinic/SingleClinic";

import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import { getFetchByLimit } from "../../common/api";
import { GETCLINICLISTBYLIMIT } from "../../common/constants";

const Clinics = () => {
  useEffect(() => {
    getClinicData()
  }, [])

  const [clinicData, setClinicData] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10
  })
  const getClinicData = async (page) => {
    const res = await getFetchByLimit(GETCLINICLISTBYLIMIT, pagination.limit, page);
    // console.log(res)
    return setClinicData(res?.clinic);
  };

  console.log(clinicData)
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
            Clinics's List
          </Typography>
        </Box>
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
            lg: "10px 10px",
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
            Add Clinic
          </Typography>
        </Box>
      </Stack>
      <Stack direction="column" maxWidth="100%">
        {clinicData.map((item) => (

          < SingleClinic
            // key={item + 3859}
            id={item._id}
            image="https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVpbGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            name={item.name}
            hospital="Bangabandhu Sheikh Mujib Medical University Hospital"
            // hospital={item.location.coordinates}
            getClinicData={getClinicData}
            block={item.block}
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
        <Pagination count={10} onClick={data => {
          setPagination({
            ...pagination, page: parseInt(data?.target?.innerText)
          })
          getClinicData(data?.target?.innerText)
        }} color="secondary" />
      </Grid>
    </Stack>
  );
};

export default Clinics;

/*
import React, { useMemo, useCallback, useRef } from "react";
import { Typography, Grid, Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { columns, rows } from "./ClinicsData";
import Dialog from "../dialog/Dialog";
import NewClinic from "./newClinic/NewClinic";
import { AgGridReact } from "ag-grid-react";

const Clinics = () => {
  const gridRef = useRef();
  const navigate = useNavigate();
  const [data, setData] = React.useState();
  const [selected, setSelected] = React.useState();
  const [showNewClinicDialog, setShowNewClinicDialog] = React.useState(false);
  const [dialogDetails, setDialogDetails] = React.useState({
    title: "",
    content: "",
    noText: "",
    yesText: "",
    yesFun: () => {},
    noFun: () => {},
  });
  const [openDialog, setOpenDialog] = React.useState(false);

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      resizable: true,
    }),
    []
  );
  const rowClickedListener = useCallback(({ data }) => {
    console.log("cellClicked", data);
    setSelected(data);
  }, []);

  // const getRowClass = (params) => {
  //   if (params.node.rowIndex % 2 === 0) {
  //     return "my-shaded-effect";
  //   }
  // };
  const getRowStyle = (params) => {
    if (params.node.rowIndex % 2 === 0) {
      return { background: "#fff" };
    }
  };
  const rowStyle = { boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" };

  const clearFilters = useCallback(() => {
    gridRef.current.api.setFilterModel(null);
  }, []);

  const handleRowDoubleClicked = (row) => {
    setOpenDialog(true);
    setDialogDetails({
      title: `${selected.name} `,
      content: `  ${selected.name}  is a popular heart-clinic based in San Fransico`,
      noText: "Delete",
      yesText: "Know More",
      yesFun: () => {
        navigate(`admin/clinic/${selected.id}`);
        setOpenDialog(false);
      },
      noFun: () => {
        setOpenDialog(false);
      },
    });
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleButtonClick = (text) => {
    if (text === "newClinic") {
      setData({ text: "Create a new clinic", btnText: "Create" });
      setShowNewClinicDialog(true);
    } else if (selected) {
      if (text === "update") {
        setShowNewClinicDialog(true);
        setData({
          text: `Update ${selected.name}`,
          btnText: "Update",
          name: selected.name,
          description: selected.description,
          address: selected.officeAddress,
          contact: selected.contact,
          open: selected.open,
          close: selected.close,
        });
      } else if (text === "delete") {
        setOpenDialog(true);
        setDialogDetails({
          title: `Delete ${selected.name} clinic`,
          content: `Are you sure you want to delete ${selected.name} clinic`,
          noText: "Cancel",
          yesText: "Confirm",
          yesFun: () => {
            setOpenDialog(false);
          },
          noFun: () => {
            setOpenDialog(false);
          },
        });
      } else if (text === "block") {
        setOpenDialog(true);
        setDialogDetails({
          title: `Block ${selected.name} clinic`,
          content: `Are you sure you want to block ${selected.name} clinic`,
          noText: "Cancel",
          yesText: "Confirm",
          yesFun: () => {
            setOpenDialog(false);
          },
          noFun: () => {
            setOpenDialog(false);
          },
        });
      }
    }
  };

  return (
    <>
      <Grid container p={2}>
        <Typography variant="h4">All Clinics</Typography>
      </Grid>
      <Divider />
      <Grid container spacing={3} padding={1}>
        {/* <Grid item>
          <TextField
            size="small"
            elevation={2}
            id="input-with-icon-textfield"
            style={{ height: "10px" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
        </Grid> 
        <Grid item>
          <Button
            variant="outlined"
            size="medium"
            onClick={handleButtonClick.bind(null, "newClinic")}
          >
            Add Clinic
          </Button>
        </Grid>
        {selected && (
          <>
            <Grid item>
              <Button
                variant="outlined"
                size="medium"
                onClick={handleButtonClick.bind(null, "update")}
              >
                Update Clinic
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                size="medium"
                onClick={handleButtonClick.bind(null, "delete")}
              >
                Delete Clinic
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                size="medium"
                onClick={handleButtonClick.bind(null, "block")}
              >
                Block Clinic
              </Button>
            </Grid>
          </>
        )}
        <Grid item>
          <Button variant="standard" size="medium" onClick={clearFilters}>
            Clear Filters
          </Button>
        </Grid>
      </Grid>
      <div className="green-theme">
        <div
          className="ag-theme-alpine"
          style={{ height: "80vh", width: "100%" }}
        >
          <AgGridReact
            ref={gridRef}
            rowData={rows}
            columnDefs={columns}
            defaultColDef={defaultColDef}
            animateRows={true}
            rowSelection="multiple"
            onRowClicked={rowClickedListener}
            rowClass="my-green-class"
            getRowStyle={getRowStyle}
            rowStyle={rowStyle}
            checkboxSelection={true}
            onRowDoubleClicked={handleRowDoubleClicked}
            pagination={true}
            paginationPageSize={10}
          ></AgGridReact>
        </div>
      </div>
      {openDialog && selected && (
        <Dialog
          open={openDialog}
          handleClose={handleCloseDialog}
          title={dialogDetails.title}
          content={dialogDetails.content}
          noText={dialogDetails.noText}
          yesText={dialogDetails.yesText}
          yesFun={dialogDetails.yesFun}
          noFun={dialogDetails.noFun}
        />
      )}
      {showNewClinicDialog && (
        <NewClinic
          open={showNewClinicDialog}
          handleClose={() => setShowNewClinicDialog(false)}
          data={data}
        />
      )}
    </>
  );
};

export default Clinics;

*/
