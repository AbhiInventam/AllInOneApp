import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import {
  getUserData,
  selectUserData,
} from "../../redux/store/slices/userSlice";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "username", headerName: "User name", width: 130 },
  // {
  //   field: "age",
  //   headerName: "Age",
  //   type: "number",
  //   width: 90,
  // },
  { field: "email", headerName: "Email", width: 200 },
  { field: "phone", headerName: "Phone", width: 170 },
  {
    field: "actions",
    headerName: "Actions",
    width: 70,
    renderCell: (cellValues) => {
      return (
        <EditIcon
          style={{
            justifyContent: "flex-end",
            marginLeft: "10px",
          }}
          onClick={() => console.log("Work in")}
        />
      );
    },
  },
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  // },
];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
//   { id: 10, lastName: "Bhai", firstName: "Rocky", age: 35 },
// ];

const UserTable = () => {
  const users = useSelector(selectUserData);
  const dispatch = useDispatch();

  // console.log("users", users);
  // console.log("users key", Object.entries(users));

  // use if required Multiple and dynamic Header List
  // // ------------------------------------------------------------------------
  // users
  // ? users.map((user) => {
  //   console.log("User Map", user);
  //   const getHeaderObject = Object.entries(user);
  //   const getHeader = getHeaderObject[0][0];
  //   console.log("users key", getHeader);
  // })
  // : console.log("user not found----------------");
  // // ------------------------------------------------------------------------
  // console.log("user actions", columns);

  useEffect(() => {
    dispatch(getUserData());

    console.log("users---------------");
  }, [dispatch]);
  // console.log("users", users);

  // Put Loading Here
  // users ? console.log("data done") : <h1>Loading .....</h1>;

  return (
    <div style={{ height: 400, width: "100%" }}>
      {/* <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      /> */}
      {users && (
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      )}
    </div>
  );
};

export default UserTable;
