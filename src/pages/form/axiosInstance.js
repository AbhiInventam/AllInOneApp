import axios from "axios";
import React from "react";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    "content-type": "application/json",
    // Accept: "application/json",
    Authorization: "auth-token",
  },
});

// axios.defaults.headers.common["Accept"] = "application/json";

export default axiosInstance;
