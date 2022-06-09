import { configureStore } from "@reduxjs/toolkit";
import users from "../../pages/tables/userSlice";

export const store = configureStore({
  reducer: {
    users,
  },
});
