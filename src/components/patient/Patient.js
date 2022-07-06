import React from "react";
import SinglePatient from "./singlePatient/SinglePatient";

import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";

const Patients = () => {
  return (
    <Stack direction="column">
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
          Patient's List
        </Typography>
      </Box>
      <Stack direction="row" sx={{ flexWrap: "wrap" }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
          <SinglePatient
            key={item + 3859}
            image="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            name="Ali Mohd Waza"
            diagnostic="Radiology"
            bloodGroup="O-"
          />
        ))}
      </Stack>
      <Grid
        mt={2}
        pr={5}
        display="flex"
        justifyContent="end"
        sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
      >
        <Pagination count={10} color="secondary" />
      </Grid>
    </Stack>
  );
};

export default Patients;

/*  import React, { useState, useMemo, useCallback, useRef } from "react";
import { AgGridReact } from "ag-grid-react";

import { useNavigate } from "react-router-dom";

import { Button, Divider, Grid, Typography } from "@mui/material";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import { rowData, columnDefs } from "./doctorsData";
import Dialog from "../dialog/Dialog";
import NewDoctor from "./newDoctor/NewDoctor";

const Doctors = () => {
  const [newDialog, setNewDialog] = React.useState(false);
  const [dialogData, setDialogData] = React.useState({});
  const navigate = useNavigate();
  const [selected, setSelected] = useState();
  const gridRef = useRef();
  const [dialogDetails, setDialogDetails] = React.useState({
    title: "",
    content: "",
    noText: "",
    yesText: "",
    yesFun: () => {},
    noFun: () => {},
  });
  const [openDialog, setOpenDialog] = React.useState(false);
  columnDefs.checkboxSelection = () => true;

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      resizable: true,
    }),
    []
  );
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const rowClickedListener = useCallback(({ data }) => {
    console.log("cellClicked", data);
    setSelected(data);
  }, []);

  const getRowClass = (params) => {
    if (params.node.rowIndex % 2 === 0) {
      return "my-shaded-effect";
    }
  };

  const clearFilters = useCallback(() => {
    gridRef.current.api.setFilterModel(null);
  }, []);

  const handleRowDoubleClicked = (row) => {
    setOpenDialog(true);
    setDialogDetails({
      title: `${selected.firstName} ${selected.lastName}`,
      content: `I'm  ${selected.firstName} ${selected.lastName}, I'm a heart sergon at BareHills lab. I've eight years of experience in the specified field.`,
      noText: "Delete",
      yesText: "Know More",
      yesFun: () => {
        navigate(`admin/doctor/${selected.id}`);
        setOpenDialog(false);
      },
      noFun: () => {
        setOpenDialog(false);
      },
    });
  };

  const handleButtonClick = (event) => {
    if (event === "newDoctor") {
      setDialogData({ text: "Create a new doctor", btnText: "Create" });
      setNewDialog(true);
    }

    if (selected && event === "update") {
      setDialogData({
        text: `Update ${selected.firstName} ${selected.lastName}`,
        btnText: "Update",
        fName: selected.firstName,
        lName: selected.lastName,
        description: selected.description,
        clinic: selected.clinic,
        address: selected.address,
        contact: selected.contact,
      });
      setNewDialog(true);
    }

    if (event === "delete") {
      setOpenDialog(true);
      setDialogDetails({
        title: `Delete ${selected.firstName} ${selected.lastName} doctor`,
        content: `Are you sure you want to delete ${selected.firstName} ${selected.lastName} doctor`,
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
  };
  return (
    <>
      <Grid container p={2}>
        <Typography variant="h4">Doctors</Typography>
      </Grid>
      <Divider />
      <Grid container spacing={2} padding={1}>
        <Grid item>
          <Button
            variant="outlined"
            size="medium"
            onClick={handleButtonClick.bind(null, "newDoctor")}
          >
            Add Doctor
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
                Update Doctor
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                size="medium"
                onClick={handleButtonClick.bind(null, "delete")}
              >
                Delete Doctor
              </Button>
            </Grid>
          </>
        )}
        <Grid item>
          <Button variant="standard" size="medium" onClick={clearFilters}>
            Reset Filters
          </Button>
        </Grid>
      </Grid>
      <div
        className="ag-theme-alpine"
        style={{ height: "80vh", width: "100%" }}
      >
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          animateRows={true}
          rowSelection="multiple"
          onRowClicked={rowClickedListener}
          rowClass="my-green-class"
          getRowClass={getRowClass}
          checkboxSelection={true}
          onRowDoubleClicked={handleRowDoubleClicked}
          pagination={true}
          paginationPageSize={10}
        />
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

      {newDialog && (
        <NewDoctor
          open={newDialog}
          handleClose={() => setNewDialog(false)}
          data={dialogData}
        />
      )}
    </>
  );
};

export default Doctors;

*/

/*import React, { useState, useMemo, useCallback, useRef } from "react";
import { AgGridReact } from "ag-grid-react";

import { useNavigate } from "react-router-dom";

import { Button, Divider, Grid, Typography } from "@mui/material";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import { rowData, columnDefs } from "./doctorsData";
import Dialog from "../dialog/Dialog";

const Doctors = () => {
  const [newDialog, setNewDialog] = React.useState(false);
  const [dialogData, setDialogData] = React.useState({});
  const navigate = useNavigate();
  const [selected, setSelected] = useState();
  const gridRef = useRef();
  const [dialogDetails, setDialogDetails] = React.useState({
    title: "",
    content: "",
    noText: "",
    yesText: "",
    yesFun: () => {},
    noFun: () => {},
  });
  const [openDialog, setOpenDialog] = React.useState(false);
  columnDefs.checkboxSelection = () => true;

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      resizable: true,
    }),
    []
  );
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const rowClickedListener = useCallback(({ data }) => {
    console.log("cellClicked", data);
    setSelected(data);
  }, []);

  const getRowClass = (params) => {
    if (params.node.rowIndex % 2 === 0) {
      return "my-shaded-effect";
    }
  };

  const clearFilters = useCallback(() => {
    gridRef.current.api.setFilterModel(null);
  }, []);

  const handleRowDoubleClicked = (row) => {
    setOpenDialog(true);
    setDialogDetails({
      title: `${selected.firstName} ${selected.lastName}`,
      content: `I'm  ${selected.firstName} ${selected.lastName}, I'm a heart sergon at BareHills lab. I've eight years of experience in the specified field.`,
      noText: "Delete",
      yesText: "Know More",
      yesFun: () => {
        navigate(`admin/doctor/${selected.id}`);
        setOpenDialog(false);
      },
      noFun: () => {
        setOpenDialog(false);
      },
    });
  };

  const handleButtonClick = (event) => {
    if (event === "newDoctor") {
      setDialogData({ text: "Create a new doctor", btnText: "Create" });
      setNewDialog(true);
    }

    if (selected && event === "update") {
      setDialogData({
        text: `Update ${selected.firstName} ${selected.lastName}`,
        btnText: "Update",
        fName: selected.firstName,
        lName: selected.lastName,
        description: selected.description,
        clinic: selected.clinic,
        address: selected.address,
        contact: selected.contact,
      });
      setNewDialog(true);
    }

    if (event === "delete") {
      setOpenDialog(true);
      setDialogDetails({
        title: `Delete ${selected.firstName} ${selected.lastName} doctor`,
        content: `Are you sure you want to delete ${selected.firstName} ${selected.lastName} doctor`,
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
  };
  return (
    <>
      <Grid container p={2}>
        <Typography variant="h4">Patients</Typography>
      </Grid>
      <Divider />
      <Grid container spacing={2} padding={1}>
        <Grid item>
          <Button
            variant="outlined"
            size="medium"
            onClick={handleButtonClick.bind(null, "newDoctor")}
          >
            Add Patient
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
                Update Patient
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                size="medium"
                onClick={handleButtonClick.bind(null, "delete")}
              >
                Delete Patient
              </Button>
            </Grid>
          </>
        )}
        <Grid item>
          <Button variant="standard" size="medium" onClick={clearFilters}>
            Reset Filters
          </Button>
        </Grid>
      </Grid>
      <div
        className="ag-theme-alpine"
        style={{ height: "80vh", width: "100%" }}
      >
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          animateRows={true}
          rowSelection="multiple"
          onRowClicked={rowClickedListener}
          rowClass="my-green-class"
          getRowClass={getRowClass}
          checkboxSelection={true}
          onRowDoubleClicked={handleRowDoubleClicked}
          pagination={true}
          paginationPageSize={10}
        />
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
    </>
  );
};

export default Doctors; */
