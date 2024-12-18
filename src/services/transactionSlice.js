import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactionToken: null,
  transactionDate: null,
  transactionTime: null,
  bookingCode: null,
  formData: null,
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    updateTransactionToken(state, action) {
      state.transactionToken = action.payload;
    },
    updateBookingCode(state, action) {
      state.bookingCode = action.payload;
    },
    updateFormData(state, action) {
      state.formData = action.payload;
    },
    updateTransactionDate(state, action) {
      state.transactionDate = action.payload;
    },
    updateTransactionTime(state, action) {
      state.transactionTime = action.payload;
    },
    resetTransactionState() {
      return initialState;
    },
  },
});

export const {
  updateTransactionToken,
  updateBookingCode,
  updateTransactionDate,
  updateTransactionTime,
  updateFormData,
  resetTransactionState,
} = transactionSlice.actions;
export default transactionSlice.reducer;
