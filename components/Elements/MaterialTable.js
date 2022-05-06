import React from "react";
import MaterialTable from "@material-table/core";
import { Box } from "@mui/material";

export default function DataTable({
  title,
  data,
  columns,
  options,
  onEdit,
  ...other
}) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <Box sx={{ padding: 2, width: "100%" }}>
        <MaterialTable
          title={title}
          columns={columns}
          data={data}
          options={options}
          components={{
            Container: (props) => props.children,
          }}
          actions={[
            {
              icon: "edit",
              tooltip: "Edit Record",
              onClick: (event, rowData) => onEdit({ action: "edit", rowData }),
            },
            {
              icon: "add",
              tooltip: "Add Data",
              isFreeAction: true,
              onClick: (event, rowData) =>
                onEdit({ action: "create", rowData }),
            },
          ]}
          {...other}
        />
      </Box>
    </>
  );
}
