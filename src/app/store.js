import { configureStore } from "@reduxjs/toolkit";
import homepageReducer from "@/services/homepageSlice";
import { flightApi } from "@/services/api/flightApi";
import { detailFlightApi } from "@/services/api/detailFlightApi";

const store = configureStore({
  reducer: {
    homepage: homepageReducer,
    [flightApi.reducerPath]: flightApi.reducer,
    [detailFlightApi.reducerPath]: detailFlightApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(flightApi.middleware)
      .concat(detailFlightApi.middleware),
});

export default store;
