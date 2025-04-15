import { createSlice } from "@reduxjs/toolkit";

const StarSlice = createSlice({
  name: "star",
  initialState: {
    starred: [],
  },
  reducers: {
    addCountry: (state, action) => {
      state.starred.push(action.payload);
    },
    removeCountry: (state) => {
      state.starred.pop();
    },
  },
});
export const { addCountry, removeCountry } = StarSlice.actions;
export default StarSlice.reducer;
