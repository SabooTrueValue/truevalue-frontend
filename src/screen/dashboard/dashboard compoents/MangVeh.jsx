import {
  MaterialReactTable,
  createMRTColumnHelper,
  useMaterialReactTable,
} from "material-react-table";
import { Box, Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { mkConfig, generateCsv, download } from "export-to-csv"; //or use your library of choice here
import React from "react";
// import { data } from "./makeData";

const columnHelper = createMRTColumnHelper();

// const data = [
//   {
//     id: 1,
//     firstName: "John",
//     lastName: "Doe",
//     company: "True Value",
//     city: "New York",
//     country: "USA",
//   },
//   {
//     id: 2,

//     firstName: "Jane",
//     lastName: "Doe",
//     company: "True Value",
//     city: "New York",
//     country: "USA",
//   },
// ];

const columns = [
  columnHelper.accessor("index", {
    header: "Sr.",
    size: 10,
  }),
  columnHelper.accessor("images1", {
    header: "Image",
    size: 150,
    Cell: (value) => (
      <div>
        {value && (
          <img
            src={value.renderedCellValue}
            alt="Saboo True Value"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
        )}
      </div>
    ),
  }),
  columnHelper.accessor("vehicleBrand", {
    header: "Brand",
    size: 150,
  }),
  columnHelper.accessor("vehicleTitle", {
    header: "Model",
    size: 120,
  }),
  columnHelper.accessor("vehicleStatus", {
    header: "Status",
    size: 80,
    Cell: (value, rowData) => {
      const [editMode, setEditMode] = React.useState(false);
      const [editedValue, setEditedValue] = React.useState(
        value.renderedCellValue
      );
      // if (!rowData) {
      //   return null; // Handle case where rowData is undefined
      // }

      console.log(value);

      const handleChange = (event) => {
        setEditedValue(event.target.value);
      };

      const handleSave = () => {
        // Save edited value to Firebase or perform necessary actions
        if (rowData) {
          rowData.vehicleStatus = editedValue;
          // Here you would implement the code to save rowData to Firebase
        }
        console.log(rowData);
        setEditMode(false);
      };

      return (
        <div>
          {editMode ? (
            <div>
              <select value={editedValue} onChange={handleChange}>
                <option value="Sale">Sale</option>
                <option value="Sold">Sold</option>
                <option value="Booked">Booked</option>
              </select>
              <button onClick={handleSave}>Save</button>
            </div>
          ) : (
            <div
              style={{
                backgroundColor:
                  value.renderedCellValue === "Sale"
                    ? "#8ecae6"
                    : value.renderedCellValue === "Sold"
                    ? "green"
                    : value.renderedCellValue === "Booked"
                    ? "orange"
                    : "inherit", // Default background color
                borderRadius: "0.25rem",
                color: "#fff",
                maxWidth: "9ch",

                padding: "0.25rem",
              }}
              onClick={() => setEditMode(true)}
            >
              {value && value.renderedCellValue}
            </div>
          )}
        </div>
      );
    },
  }),
  // columnHelper.accessor("vehicleStatus", {
  //   header: "Status",
  //   size: 80,
  //   Cell: (value) => (
  //     <div
  //       style={{
  //         backgroundColor:
  //           value.renderedCellValue === "Sale"
  //             ? "#8ecae6"
  //             : value.renderedCellValue === "Sold"
  //             ? "green"
  //             : value.renderedCellValue === "Booked"
  //             ? "orange"
  //             : "inherit", // Default background color
  //         borderRadius: "0.25rem",
  //         color: "#fff",
  //         maxWidth: "9ch",
  //         p: "1rem",
  //         paddingLeft: "0.25rem",
  //       }}
  //     >
  //       {value && value.renderedCellValue}
  //     </div>
  //   ),
  // }),
  columnHelper.accessor("price", {
    header: "Price",
    size: 10,
    // size: 200,
  }),

  columnHelper.accessor("registrationNo", {
    header: "Registration No",
    size: 80,
  }),
  columnHelper.accessor("date", {
    header: "Date",
    // size: 120,
  }),
  // columnHelper.accessor("time", {
  //   header: "Time",
  //   // size: 120,
  // }),
];

const csvConfig = mkConfig({
  fieldSeparator: ",",
  decimalSeparator: ".",
  useKeysAsHeaders: true,
});

const MangVeh = ({ data }) => {
  const handleExportRows = (rows) => {
    const rowData = rows.map((row) => row.original);
    const csv = generateCsv(csvConfig)(rowData);
    download(csvConfig)(csv);
  };

  const handleExportData = () => {
    const csv = generateCsv(csvConfig)(data);
    download(csvConfig)(csv);
  };

  const table = useMaterialReactTable({
    columns,
    data,
    initialState: { density: "compact" },
    enableRowSelection: true,
    columnFilterDisplayMode: "popover",
    paginationDisplayMode: "pages",
    positionToolbarAlertBanner: "bottom",
    renderTopToolbarCustomActions: ({ table }) => (
      <Box
        sx={{
          display: "flex",
          gap: "16px",
          padding: "8px",
          flexWrap: "wrap",
        }}
      >
        <Button
          //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
          onClick={handleExportData}
          startIcon={<FileDownloadIcon />}
        >
          Export All Data
        </Button>
        {/* <Button
          disabled={table.getPrePaginationRowModel().rows.length === 0}
          //export all rows, including from the next page, (still respects filtering and sorting)
          onClick={() =>
            handleExportRows(table.getPrePaginationRowModel().rows)
          }
          startIcon={<FileDownloadIcon />}
        >
          Export All Rows
        </Button> */}
        <Button
          disabled={table.getRowModel().rows.length === 0}
          //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
          onClick={() => handleExportRows(table.getRowModel().rows)}
          startIcon={<FileDownloadIcon />}
        >
          Export Page Rows
        </Button>
        <Button
          disabled={
            !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
          }
          //only export selected rows
          onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
          startIcon={<FileDownloadIcon />}
        >
          Export Selected Rows
        </Button>
      </Box>
    ),
  });

  return <MaterialReactTable table={table} />;
};

export default MangVeh;
