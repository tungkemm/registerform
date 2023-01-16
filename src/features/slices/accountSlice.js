import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  accountRegister: {
    status: "",
    data: {},
  },
  accountLogin: {
    status: "",
    data: {},
  },
};

// POST data when register
export const addNewAccount = createAsyncThunk(
  "account/addNewAccount",
  async (newaccount, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/account/register",
        newaccount
      );
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

// POST data when login
export const addAccountLogin = createAsyncThunk(
  "account/addAccountLogin",
  async (infoaccount, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/account/login",
        infoaccount
      );
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const accountSlice = createSlice({
  name: "account",
  initialState,

  reducers: {
    //
    resetAccountRegister: (state) => {
      state.accountRegister.status = "";
      state.accountRegister.data = {};
    },
    resetStatusAccountLogin: (state) => {
      state.accountLogin.status = "";
    },
  },

  extraReducers: (builder) => {
    builder
      // Register
      .addCase(addNewAccount.pending, (state) => {
        state.accountRegister.status = "loading";
      })
      .addCase(addNewAccount.fulfilled, (state, action) => {
        state.accountRegister.status = "success";
        state.accountRegister.data = action.payload;
      })
      .addCase(addNewAccount.rejected, (state) => {
        state.accountRegister.status = "failure";
      })

      // Login
      .addCase(addAccountLogin.pending, (state) => {
        state.accountLogin.status = "loading";
      })
      .addCase(addAccountLogin.fulfilled, (state, action) => {
        state.accountLogin.status = "success";
        state.accountLogin.data = action.payload;
      })
      .addCase(addAccountLogin.rejected, (state) => {
        state.accountLogin.status = "failure";
      });
  },
});

export const { resetAccountRegister, resetStatusAccountLogin } =
  accountSlice.actions;

export default accountSlice.reducer;
