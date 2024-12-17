import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactionToken: null,
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
    resetTransactionState() {
      return initialState;
    },
  },
});

export const {
  updateTransactionToken,
  updateBookingCode,
  updateFormData,
  resetTransactionState,
} = transactionSlice.actions;
export default transactionSlice.reducer;
