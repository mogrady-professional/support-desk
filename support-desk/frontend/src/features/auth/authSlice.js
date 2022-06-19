// Create a slice
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

// Create initial state
const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Register new user (user comes from form and thunkAPI)
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    console.log(user);
  }
);

// Login user (user comes from form and thunkAPI)
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  console.log(user);
});

// Export slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

// Export default authSlice.reducer
export default authSlice.reducer;
