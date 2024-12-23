import homepageReducer from "@/services/slices/homepageSlice";
import flightReducer from "@/services/slices/flightSlice";
import transactionReducer from "@/services/slices/transactionSlice";
import notificationReducer from "@/services/slices/notificationSlice";

import { configureStore } from "@reduxjs/toolkit";
import { flightApi } from "@/services/api/flightApi";
import { authApi } from "@/services/api/authApi";
import { transactionApi } from "@/services/api/transactionApi";
import { accountApi } from "@/services/api/accountApi";
import socketMiddleware from "@/middlewares/socketMiddleware";

const store = configureStore({
  reducer: {
    homepage: homepageReducer,
    flight: flightReducer,
    transaction: transactionReducer,
    notification: notificationReducer,
    [flightApi.reducerPath]: flightApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [transactionApi.reducerPath]: transactionApi.reducer,
    [accountApi.reducerPath]: accountApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(flightApi.middleware)
      .concat(authApi.middleware)
      .concat(transactionApi.middleware)
      .concat(accountApi.middleware)
      .concat(socketMiddleware),
});

export default store;
