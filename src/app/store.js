import { configureStore } from "@reduxjs/toolkit";
import homepageReducer from "@/services/homepageSlice";
import flightReducer from "@/services/flightSlice";
import { flightApi } from "@/services/api/flightApi";

const store = configureStore({
  reducer: {
    homepage: homepageReducer,
    flight: flightReducer,
    [flightApi.reducerPath]: flightApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(flightApi.middleware),
});

export default store;
