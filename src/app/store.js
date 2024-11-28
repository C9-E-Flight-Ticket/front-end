import { configureStore } from "@reduxjs/toolkit";
import homepageReducer from "@/services/homepageSlice";
import { flightApi } from "@/services/api/flightApi";

const store = configureStore({
  reducer: {
    homepage: homepageReducer,
    [flightApi.reducerPath]: flightApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(flightApi.middleware),
});

export default store;
