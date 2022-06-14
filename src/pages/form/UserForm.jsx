import { createTheme, ThemeProvider } from "@mui/material";
import axios from "axios"; // for Normal call

// import axiosInstance from "./axiosInstance"; // for Instance
import React, { useEffect } from "react";
import { useState } from "react";
import useAxiosHook from "../plugins/custom hooks/useAxiosHook/useAxiosHook";

const UserForm = () => {
  // Custom Hook
  // --------------------------------------------------------------
  // const userData = useAxiosHook({
  //   url: "https://jsonplaceholder.typicode.com/posts",
  //   method: "get",
  // });
  // console.log("Data ", userData);
  // --------------------------------------------------------------

  // Traditional way -- For Normal && For axios Interceptors
  // --------------------------------------------------------------
  const [userData, setUserData] = useState();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log("axios data ", res.data);
        setUserData(res.data);
        // return res.data;
      })
      .catch((err) => {
        console.log("err");
        return err;
      });
  }, []);
  // --------------------------------------------------------------

  // Using Axios Instance
  // --------------------------------------------------------------
  // const [userData, setUserData] = useState();

  // useEffect(() => {
  //   axiosInstance
  //     .get("posts")
  //     .then((res) => {
  //       console.log("axios data ", res.data);
  //       setUserData(res.data);
  //       // return res.data;
  //     })
  //     .catch((err) => {
  //       console.log("err");
  //       return err;
  //     });
  // }, []);
  // --------------------------------------------------------------

  // Style Component Use
  const theme = createTheme({
    display: "flex",
  });

  return (
    <ThemeProvider theme={theme}>
      <div
        className="uselist"
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        {console.log("Data inside jsx", userData)}
        {userData &&
          userData.map((user, index) => {
            // console.log("userId", user.id);
            return (
              <div key={user.id}>
                <h6>{`UserId:-${user.userId}`}</h6>
                <h5>{`Id:- ${user.id}`}</h5>
                <h3>{`Title:- ${user.title}`}</h3>
                <p>{`Body:- ${user.body}`}</p>
                <hr />
              </div>
            );
          })}
      </div>
    </ThemeProvider>
  );
};

export default UserForm;
