import React from "react";
// import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import axios from "axios";

// v18
// --------------------------------------------------------------------
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// --------------------------------------------------------------------

// axios Interceptor Code
// --------------------------------------------------------------------
// Request
axios.interceptors.request.use((request) => {
  // console.log("Intterceptor Req", request);
  request.headers.channelName = "Abhishek";
  return request;
});

// Response
axios.interceptors.response.use((response) => {
  // console.log("Intterceptor Res", response);
  return response;
});
// --------------------------------------------------------------------

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
