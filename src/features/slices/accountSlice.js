import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  accountRegister: {
    status: "",
    data: {
      status: "",
      message: "",
    },
  },
  accountLogin: {
    // listAccount: [],
    // statusGetListAccount: "idle",
    // currentAccount: {},
  },
};

// POST data register
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

// GET list account
// export const getAccount = createAsyncThunk("account/getAccount", async () => {
//   try {
//     const response = await axios.get("http://localhost:4000/listaccount");
//     return response.data;
//   } catch (error) {
//     console.error("loi call api khi get list account", error);
//   }
// });

export const accountSlice = createSlice({
  name: "account",
  initialState,

  reducers: {
    //
    resetAccountRegister: (state) => {
      state.accountRegister.status = "";
      state.accountRegister.data = { status: "", message: "" };
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
      });

    // Get list account
    // .addCase(getAccount.pending, (state) => {
    //   state.accountLogin.statusGetListAccount = "loading";
    // })
    // .addCase(getAccount.fulfilled, (state, action) => {
    //   state.accountLogin.listAccount = action.payload;
    //   state.accountLogin.statusGetListAccount = "success";
    // });
  },
});

export const { deleteStatusRegister, getCurrentAccount, resetAccountRegister } =
  accountSlice.actions;

export default accountSlice.reducer;
