import { configureStore } from "@reduxjs/toolkit";
import homepageReducer from "@/services/homepageSlice";
import flightReducer from "@/services/flightSlice";
import { flightApi } from "@/services/api/flightApi";
import { authApi } from "@/services/api/authApi";
import { ticketApi } from "@/services/api/ticketApi";

const store = configureStore({
  reducer: {
    homepage: homepageReducer,
    flight: flightReducer,
    [flightApi.reducerPath]: flightApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [ticketApi.reducerPath]: ticketApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(flightApi.middleware)
      .concat(authApi.middleware)
      .concat(ticketApi.middleware),
});

export default store;
