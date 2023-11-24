import { configureStore } from "@reduxjs/toolkit";
import textvisiblereducer from "./textvisibleSlice";
const AppStore = configureStore({
  reducer: {
    textvisible: textvisiblereducer,
  },
});

export default AppStore;
