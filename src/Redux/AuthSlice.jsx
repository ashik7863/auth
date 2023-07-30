import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./Helper";

const initialState = {
  upload_status: "idle",
  upload_message: "idle",
  redirectContact: null,
  isloggedIn: false,
  isinRegistration: false,
};

export const register = createAsyncThunk("/register", async (formData) => {
  let resp = await axiosInstance.post("/signup", formData);
  let respData = resp?.data;
  return respData;
});

export const LogIn = createAsyncThunk("/login", async (formData) => {
  let resp = await axiosInstance.post("/signin", formData);
  let respData = resp?.data;
  return respData;
});

export const loginSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    reset_redirectTo: (state, { payload }) => {
      state.redirectTo = payload;
    },
    check_token: (state, { payload }) => {
      let token = localStorage.getItem("token");
      if (token !== null && token !== undefined) {
        state.isloggedIn = true;
      }
    },
    handleLoggedout: (state, { payload }) => {
      localStorage.removeItem("token");
      state.isloggedIn = false;
    },
    reset_redirectContact: (state, { payload }) => {
      state.redirectContact = payload;
    },
    check_myname: (state, { payload }) => {
      let name = localStorage.getItem("name");
      if (name !== null && name !== undefined) {
        state.isinRegistration = true;
      }
    },
    handleredirectContact: (state, { payload }) => {
      localStorage.removeItem("name");
      state.isinRegistration = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(LogIn.pending, (state, { payload }) => {
        state.status = "loading";
      })
      .addCase(LogIn.fulfilled, (state, { payload }) => {
        state.status = "idle";
        localStorage?.setItem("token", payload?.token);
        localStorage?.setItem("Name", payload?.user.first_name);
        localStorage?.setItem("Email", payload?.user.email);
        state.redirectTo = "/";
        state.isloggedIn = true;
      })
      .addCase(LogIn.rejected, (state, payload) => {
        state.status = "idle";
      })

      .addCase(register.pending, (state, payload) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.status = "idle";
        localStorage?.setItem("name", payload?.data.first_name);
        state.isinRegistration = true;
        state.redirectContact = "/login";
      })
      .addCase(register.rejected, (state, payload) => {
        state.status = "idle";
      });
  },
});
export const {
  reset_redirectTo,
  reset_redirectContact,
  check_token,
  check_myname,
  handleLoggedout,
  handleredirectContact,
  clearUserDetails,
} = loginSlice.actions;

export default loginSlice.reducer;