import { configureStore } from "@reduxjs/toolkit";
import StarSlice from "./StarSlice";
 const myStore = configureStore({
    //1 big reducer
  reducer: {
    star: StarSlice,
  },
});
export default myStore