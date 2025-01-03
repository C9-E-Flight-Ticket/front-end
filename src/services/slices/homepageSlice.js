import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  departureCity: "Jakarta",
  returnCity: "Denpasar",
  suggestions: ["Jakarta", "Denpasar", "Bandung", "Singapore"],
  flightDate: null,
  passengers: {
    adult: 0,
    child: 0,
    baby: 0,
  },
  seatClass: "Economy",
  isReturnToggleActive: false,
};

const homepageSlice = createSlice({
  name: "ticketSearch",
  initialState,
  reducers: {
    selectDepartureCity(state, action) {
      state.departureCity = action.payload;
      state.suggestions = state.suggestions.includes(action.payload)
        ? [
            action.payload,
            ...state.suggestions.filter(
              (suggestion) => suggestion !== action.payload
            ),
          ]
        : [...state.suggestions, action.payload];
    },
    selectReturnCity(state, action) {
      state.returnCity = action.payload;
      state.suggestions = state.suggestions.includes(action.payload)
        ? [
            action.payload,
            ...state.suggestions.filter(
              (suggestion) => suggestion !== action.payload
            ),
          ]
        : [...state.suggestions, action.payload];
    },
    switchSearchCity(state) {
      const returnCity = state.returnCity;
      // switch
      state.returnCity = state.departureCity;
      state.departureCity = returnCity;
    },
    clearSuggestion(state) {
      state.suggestions = [];
    },
    removeSuggestion(state, action) {
      state.suggestions = state.suggestions.filter(
        (suggestion) => suggestion !== action.payload
      );
    },
    updateFlightDate(state, action) {
      state.flightDate = action.payload;
    },
    updatePassengers(state, action) {
      state.passengers = { ...state.passengers, ...action.payload };
    },
    chooseSeatClass(state, action) {
      state.seatClass = action.payload;
    },
    changeReturnToggle(state) {
      state.isReturnToggleActive = !state.isReturnToggleActive;
    },
    resetHomepageState() {
      return initialState;
    },
  },
});

export const {
  selectDepartureCity,
  selectReturnCity,
  switchSearchCity,
  clearSuggestion,
  removeSuggestion,
  updateFlightDate,
  updatePassengers,
  chooseSeatClass,
  changeReturnToggle,
  resetHomepageState,
} = homepageSlice.actions;
export default homepageSlice.reducer;
