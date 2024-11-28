import { configureStore } from "@reduxjs/toolkit";
import homepageReducer from "@/services/homepageSlice";

const store = configureStore({
  reducer: {
    homepage: homepageReducer,
  },
});

export default store;
