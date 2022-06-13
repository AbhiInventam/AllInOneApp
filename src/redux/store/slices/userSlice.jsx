import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Call Api get Data
export const getUserData = createAsyncThunk("users/getUserData", async () => {
  const response = await axios.get(
    // "https://jsonplaceholder.typicode.com/users"
    `${process.env.REACT_APP_API_KEY}`
  );
  const data = response.data;
  // console.log("Data", data);
  return data;
});

const initialState = {
  entries: [],
  isLoading: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [getUserData.pending]: (state) => {
      state.isLoading = true;
    },
    [getUserData.fulfilled]: (state, action) => {
      // console.log("actions", action.payload);
      state.entries = action.payload;
      state.isLoading = false;
    },
    [getUserData.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const selectUserData = (state) => state.users.entries;

export default userSlice.reducer;
