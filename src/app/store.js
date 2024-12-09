import { configureStore } from "@reduxjs/toolkit";
import homepageReducer from "@/services/homepageSlice";
import flightReducer from "@/services/flightSlice";
import { flightApi } from "@/services/api/flightApi";
import { detailFlightApi } from "@/services/api/detailFlightApi";
import { ticketApi } from "@/services/api/ticketApi";

const store = configureStore({
  reducer: {
    homepage: homepageReducer,
    flight: flightReducer,
    [flightApi.reducerPath]: flightApi.reducer,
    [detailFlightApi.reducerPath]: detailFlightApi.reducer,
    [ticketApi.reducerPath]: ticketApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(flightApi.middleware)
      .concat(detailFlightApi.middleware)
      .concat(ticketApi.middleware),
});

export default store;
