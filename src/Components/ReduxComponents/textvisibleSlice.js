import { createSlice } from "@reduxjs/toolkit";

const textvisibleSlice = createSlice({
  name: "textvisible",
  initialState: null,
  reducers: {
    texttoggle: (state, action) => {},
  },
});

export const { texttoggle } = textvisibleSlice.actions;
export default textvisibleSlice.reducer;
