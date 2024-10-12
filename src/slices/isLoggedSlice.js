import { createSlice } from "@reduxjs/toolkit";
export const isLoggedSlice = createSlice({
  name: "isLogged",
  initialState: false,
  reducers: {
    changeLogged: (state) => {
      state = !state;
    },
  },
});

export const { changeLogged } = isLoggedSlice.actions;

export default isLoggedSlice.reducer;
