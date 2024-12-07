import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stage: "departure",
  departureFlightId: null,
  returnFlightId: null,
};

const flightSlice = createSlice({
  name: "flightSelection",
  initialState,
  reducers: {
    changeFlightStage(state) {
      state.stage = state.stage === "departure" ? "return" : "departure";
    },
    changeDepartureFlight(state, action) {
      state.departureFlightId = action.payload;
    },
    changeReturnFlight(state, action) {
      state.returnFlightId = action.payload;
    },
  },
});

export const { changeDepartureFlight, changeReturnFlight, changeFlightStage } =
  flightSlice.actions;
export default flightSlice.reducer;
