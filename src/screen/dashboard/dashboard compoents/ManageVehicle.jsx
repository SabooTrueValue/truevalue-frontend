import { useMemo } from "react";

//Date Picker Imports - these should just be in your Context Provider
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

//MRT Imports
import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_GlobalFilterTextField,
  MRT_ToggleFiltersButton,
} from "material-react-table";

//Material UI Imports
import {
  Box,
  //   Button,
  ListItemIcon,
  MenuItem,
  Typography,
  lighten,
} from "@mui/material";

//Icons Imports
import { AccountCircle, Send } from "@mui/icons-material";

//Mock Data
// import { data } from './makeData';

const data = [
  {
    vehicleBrand: "Dusty",
    vehicleTitle: "Kuvalis",
    email: "Randy63@yahoo.com",
    registrationNo: "MH 12 1234",
    jobTitle: "Chief Creative Technician",
    price: 52729,
    startDate: "3/20/2014",
    signatureCatchPhrase: "Cross-platform disintermediate workforce",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/106.jpg",
    vehicleStatus: "Booked",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F1.jpg?alt=media&token=54585563-ce17-476a-b434-d8f3e29e2644",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F2.jpg?alt=media&token=8af998bb-bb2e-4b1f-bb16-77c12fe094d1",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F3.jpg?alt=media&token=9b3f3eca-a5c9-4624-82ec-a6295ede3eba",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F7.jpeg?alt=media&token=72d93d00-2d10-448b-9778-8568a05e61d0",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F5.jpeg?alt=media&token=f0f936c4-e22e-4b24-b1ec-068c8f369501",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F4.jpg?alt=media&token=a678f73a-d107-4aea-a639-dca2898c7e84",
    ],
  },
  {
    vehicleBrand: "D'angelo",
    vehicleTitle: "Moen",
    email: "Andrew88@hotmail.com",
    registrationNo: "MH 12 1235",
    jobTitle: "Forward Response Engineer",

    price: 71964,
    startDate: "3/9/2018",
    signatureCatchPhrase: "Virtual local support",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/420.jpg",
    vehicleStatus: "Sale",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F1.jpg?alt=media&token=54585563-ce17-476a-b434-d8f3e29e2644",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F2.jpg?alt=media&token=8af998bb-bb2e-4b1f-bb16-77c12fe094d1",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F3.jpg?alt=media&token=9b3f3eca-a5c9-4624-82ec-a6295ede3eba",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F7.jpeg?alt=media&token=72d93d00-2d10-448b-9778-8568a05e61d0",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F5.jpeg?alt=media&token=f0f936c4-e22e-4b24-b1ec-068c8f369501",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F4.jpg?alt=media&token=a678f73a-d107-4aea-a639-dca2898c7e84",
    ],
  },
  {
    vehicleBrand: "Devan",
    vehicleTitle: "Reinger",
    email: "Melissa_Lockman@hotmail.com",
    registrationNo: "MH 12 1235",
    jobTitle: "Customer Intranet Consultant",
    price: 72551,
    startDate: "8/12/2020",
    signatureCatchPhrase: "Pre-emptive composite hierarchy",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1091.jpg",
    vehicleStatus: "Sale",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F1.jpg?alt=media&token=54585563-ce17-476a-b434-d8f3e29e2644",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F2.jpg?alt=media&token=8af998bb-bb2e-4b1f-bb16-77c12fe094d1",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F3.jpg?alt=media&token=9b3f3eca-a5c9-4624-82ec-a6295ede3eba",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F7.jpeg?alt=media&token=72d93d00-2d10-448b-9778-8568a05e61d0",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F5.jpeg?alt=media&token=f0f936c4-e22e-4b24-b1ec-068c8f369501",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F4.jpg?alt=media&token=a678f73a-d107-4aea-a639-dca2898c7e84",
    ],
  },
  {
    vehicleBrand: "Leonardo",
    vehicleTitle: "Langworth",
    email: "Chadrick.Goldner87@gmail.com",
    registrationNo: "MH 12 1235",
    jobTitle: "Senior Security Manager",
    price: 57801,
    startDate: "7/25/2017",
    signatureCatchPhrase: "Progressive real-time core",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/639.jpg",
    vehicleStatus: "Sale",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F1.jpg?alt=media&token=54585563-ce17-476a-b434-d8f3e29e2644",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F2.jpg?alt=media&token=8af998bb-bb2e-4b1f-bb16-77c12fe094d1",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F3.jpg?alt=media&token=9b3f3eca-a5c9-4624-82ec-a6295ede3eba",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F7.jpeg?alt=media&token=72d93d00-2d10-448b-9778-8568a05e61d0",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F5.jpeg?alt=media&token=f0f936c4-e22e-4b24-b1ec-068c8f369501",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F4.jpg?alt=media&token=a678f73a-d107-4aea-a639-dca2898c7e84",
    ],
  },
  {
    vehicleBrand: "Douglas",
    vehicleTitle: "Denesik",
    email: "Dante.Deckow@hotmail.com",
    registrationNo: "MH 12 1235",
    jobTitle: "Legacy Security Assistant",
    price: 23792,
    startDate: "4/12/2020",
    signatureCatchPhrase: "Operative well-modulated info-mediaries",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/394.jpg",
    vehicleStatus: "Sold",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F1.jpg?alt=media&token=54585563-ce17-476a-b434-d8f3e29e2644",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F2.jpg?alt=media&token=8af998bb-bb2e-4b1f-bb16-77c12fe094d1",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F3.jpg?alt=media&token=9b3f3eca-a5c9-4624-82ec-a6295ede3eba",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F7.jpeg?alt=media&token=72d93d00-2d10-448b-9778-8568a05e61d0",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F5.jpeg?alt=media&token=f0f936c4-e22e-4b24-b1ec-068c8f369501",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F4.jpg?alt=media&token=a678f73a-d107-4aea-a639-dca2898c7e84",
    ],
  },
  {
    vehicleBrand: "Jameson",
    vehicleTitle: "Mayer",
    email: "Rosamond_Schuster@yahoo.com",
    registrationNo: "MH 12 1235",
    jobTitle: "Regional Division Planner",
    price: 80916,
    startDate: "10/30/2017",
    signatureCatchPhrase: "Front-line intermediate firmware",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1205.jpg",
    vehicleStatus: "Sold",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F1.jpg?alt=media&token=54585563-ce17-476a-b434-d8f3e29e2644",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F2.jpg?alt=media&token=8af998bb-bb2e-4b1f-bb16-77c12fe094d1",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F3.jpg?alt=media&token=9b3f3eca-a5c9-4624-82ec-a6295ede3eba",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F7.jpeg?alt=media&token=72d93d00-2d10-448b-9778-8568a05e61d0",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F5.jpeg?alt=media&token=f0f936c4-e22e-4b24-b1ec-068c8f369501",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F4.jpg?alt=media&token=a678f73a-d107-4aea-a639-dca2898c7e84",
    ],
  },
  {
    vehicleBrand: "Madaline",
    vehicleTitle: "Quitzon",
    email: "Alex_Grimes82@hotmail.com",
    registrationNo: "MH 12 1235",
    jobTitle: "Corporate Paradigm Strategist",
    price: 68052,
    startDate: "1/17/2018",
    signatureCatchPhrase: "Right-sized high-level algorithm",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/432.jpg",
    vehicleStatus: "Sold",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F1.jpg?alt=media&token=54585563-ce17-476a-b434-d8f3e29e2644",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F2.jpg?alt=media&token=8af998bb-bb2e-4b1f-bb16-77c12fe094d1",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F3.jpg?alt=media&token=9b3f3eca-a5c9-4624-82ec-a6295ede3eba",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F7.jpeg?alt=media&token=72d93d00-2d10-448b-9778-8568a05e61d0",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F5.jpeg?alt=media&token=f0f936c4-e22e-4b24-b1ec-068c8f369501",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F4.jpg?alt=media&token=a678f73a-d107-4aea-a639-dca2898c7e84",
    ],
  },
  {
    vehicleBrand: "Wilfrid",
    vehicleTitle: "Vandervort",
    email: "Buddy.Torphy@gmail.com",
    registrationNo: "MH 12 1235",
    jobTitle: "Legacy Functionality Specialist",
    price: 85573,
    startDate: "8/4/2014",
    signatureCatchPhrase: "Focused interactive secured line",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1131.jpg",
    vehicleStatus: "Booked",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F1.jpg?alt=media&token=54585563-ce17-476a-b434-d8f3e29e2644",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F2.jpg?alt=media&token=8af998bb-bb2e-4b1f-bb16-77c12fe094d1",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F3.jpg?alt=media&token=9b3f3eca-a5c9-4624-82ec-a6295ede3eba",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F7.jpeg?alt=media&token=72d93d00-2d10-448b-9778-8568a05e61d0",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F5.jpeg?alt=media&token=f0f936c4-e22e-4b24-b1ec-068c8f369501",
      "https://firebasestorage.googleapis.com/v0/b/sabootruevalue-12.appspot.com/o/images%2F9999999979856%2F4.jpg?alt=media&token=a678f73a-d107-4aea-a639-dca2898c7e84",
    ],
  },
];

const ManageVehicle = ({ data2 }) => {
  console.log(data2);

  const columns = useMemo(() => [
    {
      id: "employee", //id used to define `group` column
      header: "Employee",
      columns: [
        {
          accessorFn: (row) => `${row.vehicleBrand} ${row.vehicleTitle}`, //accessorFn used to join multiple data into a single cell
          id: "name", //id is still required when using accessorFn instead of accessorKey
          header: "Car Name",
          size: 250,
          Cell: ({ renderedCellValue, row }) => (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <img
                alt="Car Image"
                //   height={1}
                src={row.original.images[0]}
                loading="lazy"
                style={{ borderRadius: "50%", height: "60px", width: "60px" }}
              />
              {/* using renderedCellValue instead of cell.getValue() preserves filter match highlighting */}
              <span>{renderedCellValue}</span>
            </Box>
          ),
        },

        {
          accessorKey: "registrationNo", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
          enableClickToCopy: true,
          filterVariant: "autocomplete",
          header: "Registration No",
          size: 100,
        },
        {
          accessorKey: "price",
          // filterVariant: 'range', //if not using filter modes feature, use this instead of filterFn
          filterFn: "between",
          header: "Price",
          size: 200,
          //custom conditional format and styling
          Cell: ({ cell }) => (
            <Box
              component="span"
              // sx={(theme) => ({
              //   backgroundColor:
              //     cell.getValue() < 50_000
              //       ? theme.palette.error.dark
              //       : cell.getValue() >= 50_000 && cell.getValue() < 75_000
              //       ? theme.palette.warning.dark
              //       : theme.palette.success.dark,
              //   borderRadius: "0.25rem",
              //   color: "#fff",
              //   maxWidth: "9ch",
              //   p: "0.25rem",
              // })}
            >
              {cell.getValue()?.toLocaleString?.("en-IN", {
                style: "currency",
                currency: "INR",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </Box>
          ),
        },
      ],
    },
    //   {
    //     id: "id",
    //     header: "Job Info",
    //     columns: [
    //       {
    //         accessorKey: "price",
    //         // filterVariant: 'range', //if not using filter modes feature, use this instead of filterFn
    //         filterFn: "between",
    //         header: "Price",
    //         size: 200,
    //         //custom conditional format and styling
    //         Cell: ({ cell }) => (
    //           <Box
    //             component="span"
    //             // sx={(theme) => ({
    //             //   backgroundColor:
    //             //     cell.getValue() < 50_000
    //             //       ? theme.palette.error.dark
    //             //       : cell.getValue() >= 50_000 && cell.getValue() < 75_000
    //             //       ? theme.palette.warning.dark
    //             //       : theme.palette.success.dark,
    //             //   borderRadius: "0.25rem",
    //             //   color: "#fff",
    //             //   maxWidth: "9ch",
    //             //   p: "0.25rem",
    //             // })}
    //           >
    //             {cell.getValue()?.toLocaleString?.("en-IN", {
    //               style: "currency",
    //               currency: "INR",
    //               minimumFractionDigits: 0,
    //               maximumFractionDigits: 0,
    //             })}
    //           </Box>
    //         ),
    //       },
    //       {
    //         accessorKey: "jobTitle", //hey a simple column for once
    //         header: "Job Title",
    //         size: 350,
    //       },
    //     ],
    //   },
  ]);

  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableColumnFilterModes: true,
    enableColumnOrdering: true,
    enableGrouping: true,
    enableColumnPinning: true,
    enableFacetedValues: true,
    enableRowActions: true,
    enableRowSelection: true,
    initialState: {
      showColumnFilters: true,
      showGlobalFilter: true,
      columnPinning: {
        left: ["mrt-row-expand", "mrt-row-select"],
        right: ["mrt-row-actions"],
      },
    },
    paginationDisplayMode: "pages",
    positionToolbarAlertBanner: "bottom",
    muiSearchTextFieldProps: {
      size: "small",
      variant: "outlined",
    },
    muiPaginationProps: {
      color: "secondary",
      rowsPerPageOptions: [10, 20, 30],
      shape: "rounded",
      variant: "outlined",
    },
    renderDetailPanel: ({ row }) => (
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-around",
          left: "30px",
          maxWidth: "1000px",
          position: "sticky",
          width: "100%",
        }}
      >
        <img
          alt="avatar"
          height={200}
          src={row.original.avatar}
          loading="lazy"
          style={{ borderRadius: "50%" }}
        />
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4">Signature Catch Phrase:</Typography>
          <Typography variant="h1">
            &quot;{row.original.signatureCatchPhrase}&quot;
          </Typography>
        </Box>
      </Box>
    ),
    renderRowActionMenuItems: ({ closeMenu }) => [
      <MenuItem
        key={0}
        onClick={() => {
          // View profile logic...
          closeMenu();
        }}
        sx={{ m: 0 }}
      >
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        View Profile
      </MenuItem>,
      <MenuItem
        key={1}
        onClick={() => {
          // Send email logic...
          closeMenu();
        }}
        sx={{ m: 0 }}
      >
        <ListItemIcon>
          <Send />
        </ListItemIcon>
        Send Email
      </MenuItem>,
    ],
    renderTopToolbar: ({ table }) => {
      //   const handleDeactivate = () => {
      //     table.getSelectedRowModel().flatRows.map((row) => {
      //       alert("deactivating " + row.getValue("name"));
      //     });
      //   };

      //   const handleActivate = () => {
      //     table.getSelectedRowModel().flatRows.map((row) => {
      //       alert("activating " + row.getValue("name"));
      //     });
      //   };

      //   const handleContact = () => {
      //     table.getSelectedRowModel().flatRows.map((row) => {
      //       alert("contact " + row.getValue("name"));
      //     });
      //   };

      return (
        <Box
          sx={(theme) => ({
            backgroundColor: lighten(theme.palette.background.default, 0.05),
            display: "flex",
            gap: "0.5rem",
            p: "8px",
            justifyContent: "space-between",
          })}
        >
          <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            {/* import MRT sub-components */}
            <MRT_GlobalFilterTextField table={table} />
            <MRT_ToggleFiltersButton table={table} />
          </Box>
          {/* <Box>
            <Box sx={{ display: "flex", gap: "0.5rem" }}>
              <Button
                color="error"
                disabled={!table.getIsSomeRowsSelected()}
                onClick={handleDeactivate}
                variant="contained"
              >
                Deactivate
              </Button>
              <Button
                color="success"
                disabled={!table.getIsSomeRowsSelected()}
                onClick={handleActivate}
                variant="contained"
              >
                Activate
              </Button>
              <Button
                color="info"
                disabled={!table.getIsSomeRowsSelected()}
                onClick={handleContact}
                variant="contained"
              >
                Contact
              </Button>
            </Box>
          </Box> */}
        </Box>
      );
    },
  });

  return <MaterialReactTable table={table} />;
};

const ExampleWithLocalizationProvider = () => (
  //App.tsx or AppProviders file
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <ManageVehicle />
  </LocalizationProvider>
);

export default ExampleWithLocalizationProvider;
