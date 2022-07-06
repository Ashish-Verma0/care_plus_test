import React, { useMemo, useCallback, useRef } from "react";

import {
  Box,
  Tab,
  Tabs,
  Grid,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import { AgGridReact } from "ag-grid-react";

import data from "./feesData";
import Dialog from "../dialog/Dialog";

import { useNavigate } from "react-router-dom";

const Fees = () => {
  const gridRef = useRef();
  const navigate = useNavigate();

  const [columns] = React.useState(data[0].columns);
  const [rows] = React.useState(data[0].rows);

  const [selected, setSelected] = React.useState();
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

  const getRowClass = (params) => {
    if (params.node.rowIndex % 2 === 0) {
      return "my-shaded-effect";
    }
  };

  const clearFilters = useCallback(() => {
    gridRef.current.api.setFilterModel(null);
  }, []);

  const handleRowDoubleClicked = useCallback(
    (row) => {
      setOpenDialog(true);
      setDialogDetails({
        title: `${selected.name}`,
        content: ` ${selected.name} is a popular general medicine clininc based in the west coast`,
        noText: "Update",
        yesText: "Know More",
        yesFun: () => {
          navigate(`admin/clinic/${selected.id}`);
          setOpenDialog(false);
        },
        noFun: () => {
          setOpenDialog(false);
        },
      });
    },
    [selected, navigate]
  );

  const handleCloseDialog = useCallback(() => {
    setOpenDialog(false);
  }, []);

  return (
    <>
      <Grid container p={2} justifyContent="space-between">
        <Typography variant="h4">Fees</Typography>
        <Grid item height="100%" alignItems="center">
          <Button variant="standard" size="small" onClick={clearFilters}>
            Reset Filters
          </Button>
        </Grid>
      </Grid>
      <Divider />
      <Grid container justifyContent="end"></Grid>

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
          getRowClass={getRowClass}
          checkboxSelection={true}
          onRowDoubleClicked={handleRowDoubleClicked}
          pagination={true}
          paginationPageSize={10}
        ></AgGridReact>
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

export default Fees;
