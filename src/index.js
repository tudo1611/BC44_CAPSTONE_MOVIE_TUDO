import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userSlice from "./redux/userSlice";
import spinnerSlice from "./redux/spinnerSlice";
import movieSlice from "./redux/movieSlice";
import setBooking from "./redux/bookingSlice";
import setDetail from "./redux/detailSlice";
import setUserRegis from "./redux/regisSlice";
import selectItem from "./redux/selectItemSlice";
import deselectItem from "./redux/selectItemSlice";
const root = ReactDOM.createRoot(document.getElementById("root"));
export let store = configureStore({
  reducer: {
    userSlice: userSlice,
    spinnerSlice,
    setBooking,
    movieSlice,
    setDetail,
    setUserRegis,
    selectItem,
    deselectItem,
  },
});

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
