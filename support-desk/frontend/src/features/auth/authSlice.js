// Create a slice
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Create initial state
const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Export slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

// Export default authSlice.reducer
export default authSlice.reducer;
