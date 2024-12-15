import homepageReducer from "@/services/homepageSlice";
import flightReducer from "@/services/flightSlice";
import { configureStore } from "@reduxjs/toolkit";
import { flightApi } from "@/services/api/flightApi";
import { authApi } from "@/services/api/authApi";
import { transactionApi } from "@/services/api/transactionApi";

const store = configureStore({
  reducer: {
    homepage: homepageReducer,
    flight: flightReducer,
    [flightApi.reducerPath]: flightApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [transactionApi.reducerPath]: transactionApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(flightApi.middleware)
      .concat(authApi.middleware)
      .concat(transactionApi.middleware),
});

export default store;
