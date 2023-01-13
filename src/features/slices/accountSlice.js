import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  accountRegister: {
    status: "",
  },
  accountLogin: {
    listAccount: [],
    statusGetListAccount: "idle",
    currentAccount: {},
  },
};

// POST data register
export const addNewAccount = createAsyncThunk(
  "account/addNewAccount",
  async (newaccount) => {
    try {
      await axios.post("http://localhost:4000/listaccount", newaccount);
    } catch (error) {
      console.error("loi call api khi add new account", error);
    }
  }
);

// GET list account
export const getAccount = createAsyncThunk("account/getAccount", async () => {
  try {
    const response = await axios.get("http://localhost:4000/listaccount");
    return response.data;
  } catch (error) {
    console.error("loi call api khi get list account", error);
  }
});

export const accountSlice = createSlice({
  name: "account",
  initialState,

  reducers: {
    //
    deleteStatusRegister: (state) => {
      state.accountRegister.status = "";
    },
    // current account
    getCurrentAccount: (state, action) => {
      const accountLogin = state.infoAccount.listAccount.find(
        (account) =>
          account.username === action.payload.username &&
          account.password === action.payload.password
      );
      if (accountLogin) state.accountLogin.currentAccount = accountLogin;
    },
    deleteCurrentAccount: (state) => {
      state.accountLogin.currentAccount = {};
    },
  },

  extraReducers: (builder) => {
    builder
      // Post data register
      .addCase(addNewAccount.pending, (state) => {
        state.accountRegister.status = "loading";
      })
      .addCase(addNewAccount.fulfilled, (state) => {
        state.accountRegister.status = "success";
      })

      // Get list account
      .addCase(getAccount.pending, (state) => {
        state.accountLogin.statusGetListAccount = "loading";
      })
      .addCase(getAccount.fulfilled, (state, action) => {
        state.accountLogin.listAccount = action.payload;
        state.accountLogin.statusGetListAccount = "success";
      });
  },
});

export const {deleteStatusRegister, getCurrentAccount, deleteCurrentAccount } = accountSlice.actions;

export default accountSlice.reducer;
