import { createSlice } from "@reduxjs/toolkit";

const textvisibleSlice = createSlice({
  name: "textvisible",
  initialState: false,
  reducers: {
    texttoggle: (state, action) => {
      return (state = !state);
    },
  },
});

export const { texttoggle } = textvisibleSlice.actions;
export default textvisibleSlice.reducer;
