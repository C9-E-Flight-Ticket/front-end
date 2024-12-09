import { configureStore } from "@reduxjs/toolkit";
import homepageReducer from "@/services/homepageSlice";
import flightReducer from "@/services/flightSlice";
import { flightApi } from "@/services/api/flightApi";
import { detailFlightApi } from "@/services/api/detailFlightApi";
import { authApi } from "@/services/api/authApi";

const store = configureStore({
  reducer: {
    homepage: homepageReducer,
    flight: flightReducer,
    [flightApi.reducerPath]: flightApi.reducer,
    [detailFlightApi.reducerPath]: detailFlightApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(flightApi.middleware)
      .concat(detailFlightApi.middleware)
      .concat(authApi.middleware),
});

export default store;
